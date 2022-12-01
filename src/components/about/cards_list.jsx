import React from "react";
import { About } from "./about";
import axios from "axios";
import { useEffect, useState } from "react";
import "./about.css"

const Cards_list = () => {

    const[cards, setCards] = useState([])
    let itemsID = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]


    useEffect(() => {
        let ignore = false;
        fetch("http://localhost:1337/api/cards/").then(
          async (data) => {
            console.log(data);
            if (!ignore) {
              setCards((await data.json()).data);
            }
          }
        );
        return () => {
          ignore = true;
        };
      }, []);

    return(
        
        <div>
            {JSON.stringify(cards.id)}
            {Object.keys(cards).map((item) =>(
                <About id={parseInt(item)} />
            ))}
        </div>
    )
}

export {Cards_list};