import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";

import "./App.css";

function App() {
  const appId = "b3ad570a";
  const apiKey = "2243c7054e89240b91a8e40a2749021b";
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipe(data.hits);
      });
  }, [query]);

  function searchHandler(e) {
    setSearch(e.target.value);
  }

  function searchRecipe(e) {
    e.preventDefault();
    setQuery(search);
    // console.log(search)
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
        <div className="recipe-list">
          {recipe.map((eachRecipe) => (
            <Recipe
              title={eachRecipe.recipe.label}
              calories={eachRecipe.recipe.calories}
              image={eachRecipe.recipe.image}
              cautions={eachRecipe.recipe.cautions[0]}
              cuisineType={eachRecipe.recipe.cuisineType}
              ingeriants={eachRecipe.recipe.ingredientLines}
            />
          ))}
        </div>
      </div>

      <footer>
        <div class="footer">
          <ul>
            <li>
              <a
                href="https://akashkhandelwal191.github.io/PortFolio/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe-asia"></i>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Akashkhandelwal191"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/skykhandelwal1999/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/akash-khandelwal-5b09531aa"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/skykhandelwal26"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-subhead">
          <h5>
            Created by Akash Khandelwal <i class="fas fa-heart"></i>{" "}
          </h5>
        </div>
      </footer>
    </>
  );
}

export default App;
