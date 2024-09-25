import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeForm from './RecipeForm';
import SearchBar from './SearchBar';
import Profile from './Profile';
import ContactUs from './ContactUs';
import RecipeDetail from './RecipeDetail';
import AboutUs from './AboutUs';
import Favorites from './Favourites';
import './styles.css';

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'Chicken Biriyani',
      poster: 'Hi',
      image: '/goan.jpg',
      ingredients: 'Basmati rice, chicken, onions, tomatoes, yogurt...',
      instructions: 'Marinate chicken, layer rice, cook...',
      liked: false
    },
    {
      id: 2,
      name: 'Paneer Fried Rice',
      poster: 'John Doe',
      image: '/paneer.jpg',
      ingredients: 'Cooked rice, paneer cubes, garlic, onions, bell peppers...',
      instructions: 'Saute paneer cubes with garlic, onions...',
      liked: false
    },
    {
      id: 1,
      name: 'Chicken Biriyani',
      poster: 'Hi',
      image: '/goan.jpg',
      ingredients: 'Basmati rice, chicken, onions, tomatoes, yogurt...',
      instructions: 'Marinate chicken, layer rice, cook...',
      liked: false
    },
    {
      id: 2,
      name: 'Paneer Fried Rice',
      poster: 'John Doe',
      image: '/paneer.jpg',
      ingredients: 'Cooked rice, paneer cubes, garlic, onions, bell peppers...',
      instructions: 'Saute paneer cubes with garlic, onions...',
      liked: false
    },
    {
      id: 1,
      name: 'Chicken Biriyani',
      poster: 'Hi',
      image: '/goan.jpg',
      ingredients: 'Basmati rice, chicken, onions, tomatoes, yogurt...',
      instructions: 'Marinate chicken, layer rice, cook...',
      liked: false
    },
    {
      id: 2,
      name: 'Paneer Fried Rice',
      poster: 'John Doe',
      image: '/paneer.jpg',
      ingredients: 'Cooked rice, paneer cubes, garlic, onions, bell peppers...',
      instructions: 'Saute paneer cubes with garlic, onions...',
      liked: false
    },
    {
      id: 1,
      name: 'Chicken Biriyani',
      poster: 'Hi',
      image: '/goan.jpg',
      ingredients: 'Basmati rice, chicken, onions, tomatoes, yogurt...',
      instructions: 'Marinate chicken, layer rice, cook...',
      liked: false
    },
    {
      id: 2,
      name: 'Paneer Fried Rice',
      poster: 'John Doe',
      image: '/paneer.jpg',
      ingredients: 'Cooked rice, paneer cubes, garlic, onions, bell peppers...',
      instructions: 'Saute paneer cubes with garlic, onions...',
      liked: false
    },
    {
      id: 1,
      name: 'Chicken Biriyani',
      poster: 'Hi',
      image: '/goan.jpg',
      ingredients: 'Basmati rice, chicken, onions, tomatoes, yogurt...',
      instructions: 'Marinate chicken, layer rice, cook...',
      liked: false
    },
    {
      id: 2,
      name: 'Paneer Fried Rice',
      poster: 'John Doe',
      image: '/paneer.jpg',
      ingredients: 'Cooked rice, paneer cubes, garlic, onions, bell peppers...',
      instructions: 'Saute paneer cubes with garlic, onions...',
      liked: false
    },
    {
      id: 1,
      name: 'Chicken Biriyani',
      poster: 'Hi',
      image: '/goan.jpg',
      ingredients: 'Basmati rice, chicken, onions, tomatoes, yogurt...',
      instructions: 'Marinate chicken, layer rice, cook...',
      liked: false
    },
    {
      id: 2,
      name: 'Paneer Fried Rice',
      poster: 'John Doe',
      image: '/paneer.jpg',
      ingredients: 'Cooked rice, paneer cubes, garlic, onions, bell peppers...',
      instructions: 'Saute paneer cubes with garlic, onions...',
      liked: false
    },
    {
      id: 1,
      name: 'Chicken Biriyani',
      poster: 'Hi',
      image: '/goan.jpg',
      ingredients: 'Basmati rice, chicken, onions, tomatoes, yogurt...',
      instructions: 'Marinate chicken, layer rice, cook...',
      liked: false
    },
    {
      id: 2,
      name: 'Paneer Fried Rice',
      poster: 'John Doe',
      image: '/paneer.jpg',
      ingredients: 'Cooked rice, paneer cubes, garlic, onions, bell peppers...',
      instructions: 'Saute paneer cubes with garlic, onions...',
      liked: false
    },
    {
      id: 1,
      name: 'Chicken Biriyani',
      poster: 'Hi',
      image: '/goan.jpg',
      ingredients: 'Basmati rice, chicken, onions, tomatoes, yogurt...',
      instructions: 'Marinate chicken, layer rice, cook...',
      liked: false
    },
    {
      id: 2,
      name: 'Paneer Fried Rice',
      poster: 'John Doe',
      image: '/paneer.jpg',
      ingredients: 'Cooked rice, paneer cubes, garlic, onions, bell peppers...',
      instructions: 'Saute paneer cubes with garlic, onions...',
      liked: false
    },
    {
      id: 1,
      name: 'Chicken Biriyani',
      poster: 'Hi',
      image: '/goan.jpg',
      ingredients: 'Basmati rice, chicken, onions, tomatoes, yogurt...',
      instructions: 'Marinate chicken, layer rice, cook...',
      liked: false
    },
    {
      id: 2,
      name: 'Paneer Fried Rice',
      poster: 'John Doe',
      image: '/paneer.jpg',
      ingredients: 'Cooked rice, paneer cubes, garlic, onions, bell peppers...',
      instructions: 'Saute paneer cubes with garlic, onions...',
      liked: false
    },
    {
      id: 1,
      name: 'Chicken Biriyani',
      poster: 'Hi',
      image: '/goan.jpg',
      ingredients: 'Basmati rice, chicken, onions, tomatoes, yogurt...',
      instructions: 'Marinate chicken, layer rice, cook...',
      liked: false
    },
    {
      id: 2,
      name: 'Paneer Fried Rice',
      poster: 'John Doe',
      image: '/paneer.jpg',
      ingredients: 'Cooked rice, paneer cubes, garlic, onions, bell peppers...',
      instructions: 'Saute paneer cubes with garlic, onions...',
      liked: false
    },
    {
      id: 1,
      name: 'Chicken Biriyani',
      poster: 'Hi',
      image: '/goan.jpg',
      ingredients: 'Basmati rice, chicken, onions, tomatoes, yogurt...',
      instructions: 'Marinate chicken, layer rice, cook...',
      liked: false
    },
    {
      id: 2,
      name: 'Paneer Fried Rice',
      poster: 'John Doe',
      image: '/paneer.jpg',
      ingredients: 'Cooked rice, paneer cubes, garlic, onions, bell peppers...',
      instructions: 'Saute paneer cubes with garlic, onions...',
      liked: false
    },
    // Add more recipes here...
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
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
              <li><Link to="/friends">Favorites</Link></li>
            </ul>
          </nav>
          <h1>OnePot</h1>
          <div className="search-add-container">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
                {filteredRecipes.map((recipe) => (
                  <div className="recipe-card" key={recipe.id}>
                    <img src={recipe.image} alt={recipe.name} />
                    <h2>{recipe.name}</h2>
                    <p>Posted by: {recipe.poster}</p>
                    <Link to={`/recipe/${recipe.id}`}>
                      <button className="view-recipe-btn">View Recipe</button>
                    </Link>
                  </div>
                ))}
                {filteredRecipes.length === 0 && <p>No recipes found.</p>}
              </div>
            }
          />

          <Route
            path="/recipe/:id"
            element={<RecipeDetail recipes={recipes} />}
          />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/friends" element={<Favorites />} />
        </Routes>

        <footer className="footer">
          <p>OnePot - Share your best recipes with the world!</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
