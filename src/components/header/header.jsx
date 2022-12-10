import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./headerSocials";

const Header = () => {
  return (
    <header>
      <section id="header">
        <div className="container header__container">
          <h5>Welcome to the World of</h5>
          <h1>Tarot Cards</h1>
          <h5 classname="text-light">Possibilities are infinite !</h5>
          <CTA />

          <div className="info">
            <h3>
              This site allows you to browse through tarot cards. If like me,
              you've always been interested in discovering more about divination
              but learning everything by heart seems too hard, you're in the
              right place !
            </h3>
          </div>

          <a href="#footer" className="scroll_down">
            Scroll down
          </a>

          <HeaderSocials />
        </div>
      </section>
    </header>
  );
};
export { Header };
