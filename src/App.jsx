import React from "react";
import './index.css';
import {Header} from "./components/header/header.jsx"
import {About} from "./components/about/about.jsx"
import {Nav} from "./components/nav/nav.jsx"
import {Footer} from "./components/footer/footer.jsx"
import {Cards_list} from "./components/about/cards_list.jsx"

function App() {
  return (
      <body>
      <Header />
      <Nav />
      <Cards_list />
      <Footer /></body>
  );
}

export default App;
