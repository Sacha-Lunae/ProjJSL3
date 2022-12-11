import React from "react";
import { About } from "./about";
import { useEffect, useState } from "react";
import "./about.css";
import { FormControl } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { InputLabel } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Nav } from "../nav/nav";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

const Cards_list = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#E8CC61",
      },
      secondary: {
        main: yellow[600],
      },
    },
  });

  const [cards, setCards] = useState([]);
  const [sign, setSign] = useState("none");
  const [url, setUrl] = useState("https://project-tarot-deck-js.onrender.com/api/cards");

  function handleChangeSign(event) {
    setSign(event.target.value);
  }

  useEffect(() => {
    let ignore = false;
    if (sign == "none") {
      setUrl("https://project-tarot-deck-js.onrender.com/api/cards");
    } else {
      setUrl(`https://project-tarot-deck-js.onrender.com/api/cards?filters[sign][$eq]=${sign}`);
    }
    try {
      fetch(url).then(async (data) => {
        console.log(data);
        if (!ignore) {
          setCards((await data.json()).data);
        }
      });
    } catch (error) {
      console.log(error);
    }

    return () => {
      ignore = true;
    };
  }, [sign, url]);

  return (
    <div>
      <Nav tab="cardslist" />
      <Header />

      <div className="menu_deroulant">
        <ThemeProvider theme={theme}>
          <FormControl color="primary" variant="outlined" fullWidth="true">
            <InputLabel id="demo-simple-select-label" color="primary">
              Sign
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sign}
              label="Sign"
              color="primary"
              onChange={handleChangeSign}
            >
              <MenuItem value={"none"} color="primary">
                All
              </MenuItem>
              <MenuItem value={"aries"} color="primary">
                Aries
              </MenuItem>
              <MenuItem value={"taurus"} color="primary">
                Taurus
              </MenuItem>
              <MenuItem value={"gemini"} color="primary">
                Gemini
              </MenuItem>
              <MenuItem value={"cancer"} color="primary">
                Cancer
              </MenuItem>
              <MenuItem value={"leo"} color="primary">
                Leo
              </MenuItem>
              <MenuItem value={"virgo"} color="primary">
                Virgo
              </MenuItem>
              <MenuItem value={"libra"} color="primary">
                Libra
              </MenuItem>
              <MenuItem value={"scorpio"} color="primary">
                Scorpio
              </MenuItem>
              <MenuItem value={"saggitarius"} color="primary">
                Saggitarius
              </MenuItem>
              <MenuItem value={"capricorn"} color="primary">
                Capricorn
              </MenuItem>
              <MenuItem value={"aquarius"} color="primary">
                Aquarius
              </MenuItem>
              <MenuItem value={"pisces"} color="primary">
                Pisces
              </MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>

      {Object.keys(cards).map((item) => (
        <About id={parseInt(cards[item].id) - 1} />
      ))}

      <Footer />
    </div>
  );
};

export { Cards_list };
