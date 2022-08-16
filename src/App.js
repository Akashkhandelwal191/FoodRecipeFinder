import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";
import "./App.css";
import Emoji from "./components/Emoji";

function App() {
  const appId = "b3ad570a";
  const apiKey = "2243c7054e89240b91a8e40a2749021b";
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [check, setcheck] = useState(Boolean);

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setcheck(data.more);
        setRecipe(data.hits);
      });
  }, [query]);

  function searchHandler(e) {
    setSearch(e.target.value);
  }

  function searchRecipe(e) {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <>
      <nav>
        <h1>Food Recipe</h1>
      </nav>
      <div className="container">
        <div className="food-container">
          <form className="form" onSubmit={searchRecipe}>
            <div className="input-div">
              <input
                type="text"
                className="search"
                placeholder="Search Recipe"
                value={search}
                onChange={searchHandler}
              />
            </div>
            <div className="btn-container">
              <button className="btn-search" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="recipe-container">
        {(check===true)?
        <div className="recipe-list">
          {recipe.map((eachRecipe, i) => (
            <Recipe
              title={eachRecipe.recipe.label}
              calories={eachRecipe.recipe.calories}
              image={eachRecipe.recipe.image}
              cautions={eachRecipe.recipe.cautions[0]}
              cuisineType={eachRecipe.recipe.cuisineType}
              ingeriants={eachRecipe.recipe.ingredientLines}
              key={i}
              id={i}
            />
          ))}
        </div> : <Emoji />}
      </div>

      <Footer />
    </>
  );
}

export default App;
