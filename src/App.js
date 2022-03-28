import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

let data = {
  city: "Chicago",
  foodItems: [
    {
      food: "Falafel",
      img:
        "https://www.chicagomag.com/wp-content/archive/images/2013/0513/C201305-T-Best-Falafels-Dawali-Mediterranean-Kitchen.jpg",
      description:
        "A fresh-baked pita filled with our homemade crispy falefafel, loaded with fresh veggies and topped with our house garlic sauce"
    },
    {
      food: "Deep-Dish Pizza",
      img: "https://giordanos.com/wp-content/uploads/Hero-image_1210-v2.jpg",
      description:
        "Flaky, buttery pizza crust, an exclusive sausage blend, vine ripened plum tomatoes from California, and Wisconsin cheese"
    },
    {
      food: "Italian Beef",
      img:
        "https://i2.wp.com/topsecretrecipes.com/foodhackerblog/wp-content/uploads/2017/10/Portillos-Italian-Beef_top.jpg",
      description:
        "Paper-thin shaved, seasoned roast beef on fresh-baked bread topped with Italian giardiniera"
    }
  ]
};

function FoodCard(props) {
  return (
    <div className="card-container">
      <img
        alt="pic of a taco"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/330px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"
      />
      <div className="food-info">
        <p className="food-name">Tacos</p>
        <p className="food-desc">
          Marinated Pork topped with onions, cilantro and pineapple. Avocado
          Salsa and Arbol Salsa on the side
        </p>
      </div>
      <div className="like-button" style={{ color: "grey" }}>
        <i className="fa-solid fa-thumbs-up"></i>
      </div>
    </div>
  );
}

function CityButton(props) {
  return <button className="show-city">Show City</button>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Foodly</h1>
      <CityButton />
      <FoodCard />
    </div>
  );
}
