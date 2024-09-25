import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css'; // Import your CSS styles

function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div className="recipe-not-found">Recipe not found</div>;
  }

  return (
    <div className="recipe-detail">
      <h2 className="recipe-title">{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <div className="recipe-info">
        <p className="recipe-poster"><strong>Posted by:</strong> {recipe.poster}</p>
        <p className="recipe-ingredients"><strong>Ingredients:</strong> {recipe.ingredients}</p>
        <p className="recipe-instructions"><strong>Instructions:</strong> {recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
