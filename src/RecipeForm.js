import React, { useState } from 'react';

function RecipeForm({ addRecipe, toggleForm }) {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new recipe object
    const newRecipe = {
      id: Date.now(), // Unique ID
      name: recipeName,
      ingredients,
      instructions,
      image: URL.createObjectURL(image), // Display uploaded image as URL
      liked: false
    };

    // Add the new recipe to the list
    addRecipe(newRecipe);

    // Reset the form
    setRecipeName('');
    setIngredients('');
    setInstructions('');
    setImage(null);

    // Close the form
    toggleForm();
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        required
      />
      <textarea 
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <textarea 
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={toggleForm}>Cancel</button>
    </form>
  );
}

export default RecipeForm;