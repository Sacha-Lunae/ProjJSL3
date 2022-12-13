import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <ul>
        <li>
          <div class="row">
            <div className="title_footer">Thanks for coming by!</div>
            <div className="text_footer">
              This site was made for a JS project during winter semester of year
              2022. It was made by Sacha Guenoun, student @ Efrei Paris and VSB
              during this semester. <br />
              Let's be honest: that's the part where I try to find things to say
              in order to make this footer a little more appealing. <br />
              Today ? No inspiration. Tomorrow ? Who knows...
            </div>
          </div>
        </li>

        <li>
          <div class="row">
            <div className="title_footer">Frameworks and ressources used</div>
            <a href="https://reactjs.org/">React</a>
            <br />
            <a href="https://strapi.io/">Strapi</a>
            <br />
            <a href="https://render.com/">Render</a>
            <br />
            <a href="https://mui.com/">MUI (not much)</a>
            <br />
            <a href="https://axios-http.com/docs/intro">Axios</a>
          </div>
        </li>

        <li>
          <div className="title_footer">Huge thanks to:</div>
          <a href="https://www.youtube.com/watch?v=G-Cr00UYokU&t=798s">
            This guy for the CSS inspiration
          </a>
          <br />
          <a href="https://stackoverflow.com/">StackOverflow</a>
          <br />
          <a href="https://www.sacred-texts.com/tarot/pkt/index.htm">
            The provider of cards images
          </a>
          <br />
          <div className="text_footer">My mom (she's a nice lady)</div>
          <div className="text_footer">And the teachers...!</div>
        </li>
      </ul>
    </div>
  );
};

export { Footer };
