import React from "react";

const Recipe = ({ title, calories, image, cautions, cuisineType, ingeriants,id}) => {

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
          <li><strong>Cuisine type:</strong> {cuisineType}</li>
          {/* <li><strong>Ingredient: </strong></li>
          {ingeriants.map((eachIngre) => (
              <>
                <ul className="ingre">
                <li>{eachIngre}</li>
                </ul>
              </>
          ))} */}
 
        
        </ul>
      </div>
    </>
  );
};

export default Recipe;
