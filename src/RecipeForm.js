import React, { useState } from 'react';

function RecipeForm({ addRecipe, toggleForm }) {
  const [recipeName, setRecipeName] = useState('');
  const [poster, setPoster] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setErrorMessage('Please upload an image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', recipeName);
    formData.append('poster', poster);
    formData.append('ingredients', ingredients);
    formData.append('instructions', instructions);
    formData.append('image', image); // Attach image file

    try {
      const response = await fetch('http://localhost:5000/api/recipes', {
        method: 'POST',
        body: formData, // Send the form data with the image
      });

      if (response.ok) {
        const data = await response.json();
        addRecipe(data.data); // Add recipe to the list in parent component
        toggleForm(); // Close form
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Error adding recipe');
      }
    } catch (error) {
      console.error('Error submitting recipe:', error);
      setErrorMessage('Failed to submit recipe. Please try again later.');
    }
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit} encType="multipart/form-data">
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <input
        type="text"
        placeholder="Recipe Name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Posted by"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
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
