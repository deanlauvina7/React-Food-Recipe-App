import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './recipe';

const App = () => {

  const APP_ID = 'e78586a5';
  const APP_KEY = '5b90ae5dac87d2bee3b17db178a4d22e';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => { 
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type="text" />
        <button className='search-btn' type='submit'>Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))};
    </div>
  );
};

export default App;
