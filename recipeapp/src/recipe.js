import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div className='recipe-bx'>
      <h1>{title}</h1>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories} Calories</p>
      <img src={image} alt=""/>
    </div>
  );
};

export default Recipe;