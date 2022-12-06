import React from "react";
import { About } from "./about";
import { useEffect, useState } from "react";
import "./about.css"
import { FormControl } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { InputLabel } from "@mui/material";


const Cards_list = () => {

  const [cards, setCards] = useState([])
  const [sign, setSign] = useState("none")
  const [url, setUrl] = useState("http://localhost:1337/api/cards")

  function handleChangeSign(event) {
    setSign(event.target.value)
  }

  useEffect(() => {
    let ignore = false;
    if (sign == "none") {
      setUrl("http://localhost:1337/api/cards")
    } else {
      setUrl(`http://localhost:1337/api/cards?filters[sign][$eq]=${sign}`)
    }
    fetch(url).then(
      async (data) => {
        console.log(data);
        if (!ignore) {
          setCards((await data.json()).data);
        }
      }
    );

    return () => {
      ignore = true;
    };
  }, [sign,url]);

  return (

    <div>
      <div>{url}</div>

      <FormControl>
        <InputLabel id="demo-simple-select-label">Sign</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sign}
          label="Sign"
          onChange={handleChangeSign}
        >
          <MenuItem value={"none"}>All</MenuItem>
          <MenuItem value={"aries"}>Aries</MenuItem>
          <MenuItem value={"taurus"}>Taurus</MenuItem>
          <MenuItem value={"gemini"}>Gemini</MenuItem>
          <MenuItem value={"cancer"}>Cancer</MenuItem>
          <MenuItem value={"leo"}>Leo</MenuItem>
          <MenuItem value={"virgo"}>Virgo</MenuItem>
          <MenuItem value={"libra"}>Libra</MenuItem>
          <MenuItem value={"scorpio"}>Scorpio</MenuItem>
          <MenuItem value={"saggitarius"}>Saggitarius</MenuItem>
          <MenuItem value={"capricorn"}>Capricorn</MenuItem>
          <MenuItem value={"aquarius"}>Aquarius</MenuItem>
          <MenuItem value={"pisces"}>Pisces</MenuItem>
        </Select>
      </FormControl>


      {Object.keys(cards).map((item) => (
        <About id={parseInt(cards[item].id) - 1} />
      ))}

        
    </div>
  )
}

export { Cards_list };