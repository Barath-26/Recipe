import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const Favourites = ({ recipes, likeRecipe }) => {
  const deleteRecipe = (id) => {
    // Call API to delete the recipe from the database
    fetch(`http://localhost:5000/api/recipes/${id}/favorite`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Remove the recipe from the local state (if needed)
          // This may require lifting the state up to App.js to reflect the changes
        } else {
          console.error('Error deleting recipe from favorites');
        }
      })
      .catch((error) => console.error('Error deleting recipe:', error));
  };

  return (
    <div>
      <h2>Your Favourites</h2>
      <ul>
        {recipes.filter(recipe => recipe.favorited).map(recipe => (
          <li key={recipe.id}>
            {recipe.name}
            <button onClick={() => deleteRecipe(recipe.id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
