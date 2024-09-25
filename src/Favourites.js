import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './styles.css'; // Import the CSS file for styles

function Favorites() {
  const [favoriteRecipes] = useState([
    { id: 1, name: 'Butter Masala', imageUrl: '/goan.jpg' },
    { id: 2, name: 'Chapati', imageUrl: '/goan.jpg' },
    { id: 3, name: 'Naan', imageUrl: '/goan.jpg' },
    { id: 4, name: 'Noodles', imageUrl: '/goan.jpg' },
    { id: 5, name: 'Pasta', imageUrl: '/goan.jpg' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFavorites = favoriteRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">My Favorites</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search for favorites..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="recipe-container">
        {filteredFavorites.length > 0 ? (
          filteredFavorites.map(recipe => (
            <div className="recipe-card" key={recipe.id}>
              <img src={recipe.imageUrl} alt={recipe.name} />
              <h2>{recipe.name}</h2>
              <Link to={`/recipe/${recipe.id}`}>
                <button className="view-recipe-btn">View Recipe</button>
              </Link>
            </div>
          ))
        ) : (
          <div className="no-favorites">No Favorites found</div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
