import React from "react";
import axios from "axios";

let apiURL = 'http://localhost:1337/api/cards/1?populate=*'

axios.get(apiURL).then(response => {
  console.log(response.data.data.attributes.image);
});
 