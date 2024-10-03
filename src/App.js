import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeForm from './RecipeForm';
import SearchBar from './SearchBar';
import Profile from './Profile';
import ContactUs from './ContactUs';
import RecipeDetail from './RecipeDetail';
import AboutUs from './AboutUs';
import Favorites from './Favourites';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Fetch recipes from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/recipes')
      .then((response) => response.json())
      .then((data) => setRecipes(data.data))  // data.data since your API returns a 'data' field
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const likeRecipe = (id) => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === id) {
        return { ...recipe, liked: !recipe.liked };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  };

  const addToFavorites = (id) => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === id) {
        const favorited = !recipe.favorited;
        // You can add your API call to update the favorites table here
        // Example: fetch(`http://localhost:5000/api/favorites/${favorited ? 'add' : 'remove'}`, ...)
        return { ...recipe, favorited };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  };

  const deleteRecipe = (id) => {
    fetch(`http://localhost:5000/api/recipes/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setRecipes(recipes.filter((recipe) => recipe.id !== id));
        } else {
          console.error('Error deleting recipe');
        }
      })
      .catch((error) => console.error('Error deleting recipe:', error));
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav className="nav-bar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/favourites">Favorites</Link></li>
            </ul>
          </nav>
          <h1>OnePot</h1>
          <div className="search-add-container">
            <button className="add-recipe-btn" onClick={toggleForm}>
              Add Recipe
            </button>
          </div>
        </header>

        {showForm && <RecipeForm addRecipe={addRecipe} toggleForm={toggleForm} />}

        <Routes>
          <Route
            path="/"
            element={
              <div className="recipe-container">
                <div className='search-bar1'>
                  <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                {filteredRecipes.map((recipe) => (
                  <div className="recipe-card" key={recipe.id}>
                    <img src={recipe.image} alt={recipe.name} style={{ width: "400px", height: "250px" }} />
                    <h2>{recipe.name}</h2>
                    <p>Posted by: {recipe.poster}</p>
                    <FontAwesomeIcon
                    className="heart-btn"
                    icon={recipe.favorited ? solidHeart : regularHeart}
                    onClick={() => addToFavorites(recipe.id)}
                  />
                  
                  <Link to={`/recipe/${recipe.id}`}>
                    <button className="view-recipe-btn">View Recipe</button>
                  </Link>
                  
                  <FontAwesomeIcon
                    className="delete-btn small-icon" // Add small-icon class for size adjustment
                    icon={faTrashAlt}
                    onClick={() => deleteRecipe(recipe.id)}
                    size="xs" 
                  />
                  </div>
                ))}
                {filteredRecipes.length === 0 && <p>No recipes found.</p>}
              </div>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/favourites" element={<Favorites />} />
        </Routes>

        <footer className="footer">
          <p>OnePot - Share your best recipes with the world!</p>
        </footer>
      </div>
    </Router>
  );
}
export default App;
