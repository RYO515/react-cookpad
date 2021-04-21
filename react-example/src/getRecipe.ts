export type Recipe = {
    name: string;
    description: string;
    imageUrl: string | null;
    steps: string[];
    ingredients: {
      name: string;
      quantity: string;
    }[];
  };
  
  export function getRecipe(): Recipe {
    const response = fetch("/recipe.json");
    const recipe = response.json();
    return recipe;
  }