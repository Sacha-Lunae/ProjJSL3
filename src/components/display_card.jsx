import React from "react";
import { GiBleedingEye } from "react-icons/gi";
import { GiWarlockEye } from "react-icons/gi";
import axios from "axios";
import { useState } from "react";
import "../styles/display_card.css";

function DisplayCard(props) {
  const correctID = parseInt(props.id) + 1;

  let apiURL = `https://project-tarot-deck-js.onrender.com/api/cards/${correctID}?populate=*`;

  let [Image, setImage] = useState(null);
  let [Name, setName] = useState(null);
  let [Description, setDesc] = useState(null);
  let [DescUD, setDescUD] = useState(null);
  let [Arcane, setArcane] = useState(null);
  let [Color, setColor] = useState(null);
  let [Sign, setSign] = useState(null);

  async function startFetching() {
    try {
      axios.get(apiURL).then((response) => {
        setImage(
          response.data.data.attributes.imageURL
        );
        setName(response.data.data.attributes.name);
        setDesc(response.data.data.attributes.description);
        setDescUD(response.data.data.attributes.descriptionUD);
        setArcane(response.data.data.attributes.arcane);
        setColor(response.data.data.attributes.color);
        setSign(response.data.data.attributes.sign);
      });
    } catch (error) {
      console.log(error);
    }
  }

  startFetching();

  return (
    <section id="card">
      <div className="container card_containerr">
        <div className="card_display">
          <div className="card_image">
            <a href={apiURL}>
              <img src={Image} alt="card" href />
            </a>
          </div>
        </div>

        <div className="card_content">
          <h4>Name: </h4>
          <h2>{Name}</h2>
          <div className="descriptions">
            <article className="description">
              <GiWarlockEye className="description_icon" />
              <h5>Meaning</h5>
              <small>{Description}</small>
            </article>
            <article className="descriptions">
              <div className="description">
                <GiBleedingEye className="description_icon" />
                <h5>Upside-down Meaning</h5> <br /> <br />
                <small>{DescUD}</small>
              </div>
            </article>
          </div>
          <p>
            {" "}
            <br />
            Sign: {Sign} - Color: {Color} - Arcane: {Arcane}
          </p>
        </div>
      </div>
    </section>
  );
}

export { DisplayCard };
