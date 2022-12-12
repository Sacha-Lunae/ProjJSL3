import React from "react";
import IMCARDS from "../../assets/Cards.zip";
import { ImDownload } from "react-icons/im";

const CTA = () => {
  return (
    <div className="cta">
      <a href={IMCARDS} download className="btn">
        {" "}
        <ImDownload /> ZIP of cards
      </a>
      <a
        href="https://www.sacred-texts.com/tarot/pkt/index.htm"
        className="btn btn-primary"
      >
        Main info source
      </a>
    </div>
  );
};

export default CTA;
