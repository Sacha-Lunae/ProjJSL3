import React from "react";
import { GiBleedingEye } from "react-icons/gi";
import { GiWarlockEye } from "react-icons/gi";
import axios from "axios";
import { useEffect, useState } from "react";
import "./about.css";

function About(props) {
  const correctID = parseInt(props.id) + 1;

  let apiURL = `https://project-tarot-deck-js.onrender.com/api/cards/${correctID}?populate=*`;

  let [Data, setData] = useState(null);
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
        setData(response.data.data);
        setImage(
          `https://project-tarot-deck-js.onrender.com${response.data.data.attributes.image.data.attributes.formats.small.url}`
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
    <section id="about">
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <a href={apiURL}>
              <img src={Image} alt="card" href />
            </a>
          </div>
        </div>

        <div className="about_content">
          <h4>Name: </h4>
          <h2>{Name}</h2>
          <div className="about_cards">
            <article className="about_card">
              <GiWarlockEye className="about_icon" />
              <h5>Meaning</h5>
              <small>{Description}</small>
            </article>
            <article className="about_card">
              <div className="upside_down">
                <GiBleedingEye className="about_icon" />
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

export { About };
