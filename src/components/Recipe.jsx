import React from "react";
import { ExternalLink } from 'react-external-link';


const Recipe = ({
  title,
  calories,
  image,
  cautions,
  cuisineType,
  ingeriants,
  id,
  dishType,
  mealType,
  url,
}) => {
  

  return (
    <>
      <div className="recipe-box">
        <img src={image} alt="" />
        <h1 className="recipe-name">{title}</h1>
        <p className="calories">
          <strong>Calories:</strong> {calories}
        </p>
        <ul>
          <li>
            <strong>Cautions:</strong> {cautions}
          </li>
          <li>
            <strong>Cuisine type:</strong> {cuisineType}
          </li>
          <li>
            <strong>Dish type:</strong> {dishType}
          </li>
          <li>
            <strong>Meal type:</strong> {mealType}
          </li>
        </ul>
        <br />

        <ExternalLink href={url}>
               <button type="button" className="button">Read More</button>
         </ExternalLink>
      </div>
    </>
  );
};

export default Recipe;
