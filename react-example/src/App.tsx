import React from 'react';
import { getRecipe } from "./getRecipe";

function App() {
  const recipe = getRecipe();

  return (
    <div>
      <h1>My Recipe Page</h1>

      <h2>{recipe.name}</h2>
    </div>
  );
}

export default App;
