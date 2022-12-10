import React from "react";
import './index.css';
import {Nav} from "./components/nav/nav.jsx"
import {Footer} from "./components/footer/footer.jsx"
import {Cards_list} from "./components/about/cards_list.jsx"
import{NewCard} from "./components/newcard/newcard.jsx"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Edit } from "./components/newcard/edit";

function App() {


  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Cards_list />
          </Route>
          <Route exact path ="/oracle">
            <Nav />
            <NewCard />
            <Footer />
          </Route>
          <Route exact path="/oracle/edit/:id">
            <Edit />
          </Route>
          </Switch>
      </Router>
  );
}

export default App;
