import React from "react";
import { ImHome } from "react-icons/im";
import { ImQuill } from "react-icons/im";
import { GiCardPick } from "react-icons/gi";
import "../styles/nav.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Nav = (props) => {
  const [activeNav, setActiveNav] = useState("#" + props.tab);
  const history = useHistory();

  const handleOracle = () => {
    history.push("/oracle");
    history.go("/oracle");
  };

  const handleHome = () => {
    history.push("/");
    history.go("/");
  };

  return (
    <nav>
      <a
        href="#"
        onClick={() => handleHome()}
        className={activeNav === "#cardslist" ? "active" : ""}
      >
        <ImHome />{" "}
      </a>
      <a
        href="#card"
        onClick={() => setActiveNav("#card")}
        className={activeNav === "#card" ? "active" : ""}
      >
        <GiCardPick />{" "}
      </a>
      <a
        href="#oracle"
        onClick={() => handleOracle()}
        className={activeNav === "#newcard" ? "active" : ""}
      >
        <ImQuill />{" "}
      </a>
    </nav>
  );
};

export { Nav };
