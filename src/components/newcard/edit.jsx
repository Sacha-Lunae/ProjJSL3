import React from "react";
import "./edit.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { DisplayOracle } from "./displayoracle";

function Edit() {
  let [Image, setImage] = useState(null);
  let [Name, setName] = useState(null);
  let [Description, setDesc] = useState(null);
  let [DescUD, setDescUD] = useState(null);
  const ID = useParams().id;
  const history = useHistory();

  let apiURL = `https://project-tarot-deck-js.onrender.com/api/oracles/${ID}?populate=*`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    let obj = {
      data: {
        id: ID,
      },
    };

    if (Name != null) {
      obj.data.name = Name;
    }

    if (Description != null) {
      obj.data.description = Description;
    }

    if (DescUD != null) {
      obj.data.descriptionUD = DescUD;
    }

    if (Image != null) {
      obj.data.imageURL = Image;
    }

    try {
      await axios.put(apiURL, obj);
      history.go(`oracle/edit/${ID}`);
    } catch (error) {
      console.log(error);
    }
  };

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
    setImage(event.target.value);
  }

  function goBack() {
    history.push("/oracle");
    history.go("/oracle");
  }

  return (
    <div>
      <h1 className="title">Let's modify your card !</h1>
      <h2 className="subtitle">
        You made a mistake ? No worries. You can change it anytime.
      </h2>

      <div className="container edit_form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Card's name"
            onChange={handleName}
          />
          <textarea
            name="description"
            rows="5"
            placeholder="Card's Description"
            onChange={handleDesc}
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
          <h4>Tip: you don't need to change everything.</h4>
          <button type="submit" className="btn btn_primary edit-btn">
            Submit
          </button>
        </form>
      </div>

      <h2 className="subtitle">
        Here's what the card looks like right now. Click "submit" to change it !{" "}
      </h2>

      <div className="display_oracle">
        <DisplayOracle id={ID - 1} />
      </div>

      <h2 className="subtitle">
        Satisfied ? Well done ! You can go back to the main page and check the
        other cards now.
      </h2>
      <a onClick={goBack} className="btn btn-secondary btn-oracle">
        {" "}
        Go back to the oracle page{" "}
      </a>
    </div>
  );
}

export { Edit };
