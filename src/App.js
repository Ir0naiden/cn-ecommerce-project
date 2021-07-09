import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import Card from "./components/Product";
import Nav from "./components/Nav";
import Logo from "./img/logo.svg";
import Hero from "./img/hero_bg.jpg";
import "./App.css";

import { nameGen, priceGen, descGen } from "./utils";

const App = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Pulls in data from API
  const fetchData = async () => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=15"
    );
    const data = await response.json();

    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      item.name = nameGen();
      item.price = priceGen();
      item.description = descGen();
    }

    setData(data);
  };
  // Add to basket functionality
  const handleAdd = (newItem) => {
    setBasket([...basket, newItem]);
  };

  // Page build
  return (
    <div className="container">
      <div className="header">
        <img src={Logo} alt="site logo" className="logo" />
        <Nav basket={basket} />
      </div>

      <div>
        <img src={Hero} alt="hero" id="hero" />
      </div>

      <div className="divider">
        <h2>Take a look at our featured cats</h2>
        <p>Hover over the images to find out more ...</p>
      </div>

      <div className="productFeed">
        {data.length > 0 &&
          data.map((item, index) => {
            return <Card key={index} data={item} handleAdd={handleAdd} />;
          })}
      </div>

      <div className="footer">
        <p>
          Website hashed together by a bunch of junior web developers that <strong>LITERALLY</strong> have no idea.
        </p>
      </div>
    </div>
  );
};

export default App;
