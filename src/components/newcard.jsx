import React from "react";
import axios from "axios";
import "../styles/newcard.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { DisplayOracle } from "./displayoracle";
import { useEffect } from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";

const NewCard = () => {
  const [url, setURL] = useState("http://localhost:1337/api/Oracles/");
  const history = useHistory();
  let [name, setName] = useState("");
  let [desc, setDesc] = useState("");
  let [descUD, setDescUD] = useState("");
  let [image_url, setImage_url] = useState("");
  const [cards, setCards] = useState([]);

  function handleName(event) {
    setName(event.target.value);
  }

  function handleDesc(event) {
    setDesc(event.target.value);
  }

  function handleDescUD(event) {
    setDescUD(event.target.value);
  }

  function handleImURL(event) {
    setImage_url(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(url, {
        data: {
          name: name,
          description: desc,
          descriptionUD: descUD,
          imageURL: image_url,
        },
      });
      history.push("/oracle");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let ignore = false;
    fetch("https://project-tarot-deck-js.onrender.com/api/Oracles/").then(async (data) => {
      console.log(data);
      if (!ignore) {
        setCards((await data.json()).data);
      }
    });
  });

  return (
    <div>
      <Nav tab="newcard" />
      <section id="newcard">
        <h1 className="title">
          Tired of the Tarot ? Let's create your own oracle deck !
        </h1>
      </section>

      <div className="container form_container">
        <div className="oracle_tips">
          <article className="oracle_tip">
            <h4>Cards Names</h4>
            <h5 className="card_text">
              Choose a coherent name for each card ! Something that will help
              you remember the purpose of the card.
            </h5>
            <a href="https://wildsimplejoy.com/best-oracle-decks-for-beginners/">
              Some inspiration
            </a>
          </article>

          <article className="oracle_tip">
            <h4>Descriptions</h4>
            <h5 className="card_text">
              This is the most important. Be precise and clear, avoid
              double-meanings.
            </h5>
            <a href="https://en.tarotquest.fr/review-en-011-oracle-belline.html">
              My favourite oracle deck
            </a>
          </article>

          <article className="oracle_tip">
            <h4>What's the difference ?</h4>
            <h5 className="card_text">
              Tarot is more "strict" than oracle. Oracles come in many different
              forms, and are better for beginners.
            </h5>
            <a href="https://wiccanow.com/tarot-vs-oracle-decks/">More info</a>
          </article>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Card's name"
            onChange={handleName}
            required
          />
          <textarea
            name="description"
            rows="5"
            placeholder="Card's Description"
            onChange={handleDesc}
            required
          />
          <textarea
            name="descriptionUD"
            rows="5"
            placeholder="Card's Upside-Down Description"
            onChange={handleDescUD}
          />
          <input
            type="text"
            id="image_url"
            name="image_url"
            placeholder="URL of your card's visual (preferably 300x518 px)"
            onChange={handleImURL}
          ></input>
          <button type="submit" className="btn btn_primary">
            Submit
          </button>
        </form>
      </div>

      {Object.keys(cards).map((item) => (
        <DisplayOracle id={parseInt(cards[item].id) - 1} />
      ))}
      <Footer />
    </div>
  );
};

export { NewCard };
