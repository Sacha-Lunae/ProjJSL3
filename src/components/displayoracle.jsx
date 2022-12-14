import React from "react";
import "../styles/display_card.css";
import { GiBleedingEye } from "react-icons/gi";
import { GiWarlockEye } from "react-icons/gi";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";

function DisplayOracle(props) {
  const correctID = parseInt(props.id) + 1;
  const history = useHistory();

  let apiURL = `https://project-tarot-deck-js.onrender.com/api/oracles/${correctID}?populate=*`;

  let [Image, setImage] = useState(null);
  let [Name, setName] = useState(null);
  let [Description, setDesc] = useState(null);
  let [DescUD, setDescUD] = useState(null);

  async function startFetching() {
    try {
      axios.get(apiURL).then((response) => {
        setImage(response.data.data.attributes.imageURL);
        setName(response.data.data.attributes.name);
        setDesc(response.data.data.attributes.description);
        setDescUD(response.data.data.attributes.descriptionUD);
      });
    } catch (error) {
      console.log(error);
    }
  }

  startFetching();

  function handleEdit() {
    history.push(`/oracle/edit/${correctID}`);
    history.go(`/oracle/edit/${correctID}`);
  }

  function deleteCard(event) {
    event.preventDefault();
    try {
      axios.delete(apiURL);
      history.push("/oracle");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section id="card">
      <div className="container card_container">
        <div className="card_display">
          <div className="card_image">
            <a href={apiURL}>
              <img src={Image} alt="card" href />
            </a>
          </div>
        </div>

        <div className="card_content">
          <h4>Name: </h4>
          <div className="meme_ligne_svp">
            <h2>{Name}</h2>
            <a onClick={deleteCard} className="btn btn-primary">
              {" "}
              <RiDeleteBin5Line size="20" />
            </a>
            <a onClick={handleEdit} className="btn btn-secondary">
              {" "}
              <RiEdit2Line size="20" />{" "}
            </a>
          </div>
          <div className="descriptions">
            <article className="description">
              <GiWarlockEye className="description_icon" />
              <h5>Meaning</h5>
              <small>{Description}</small>
            </article>
            <article className="description upside_down">
              <GiBleedingEye className="description_icon" />
              <h5>Upside-down Meaning</h5> <br /> <br />
              <small>{DescUD}</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export { DisplayOracle };
