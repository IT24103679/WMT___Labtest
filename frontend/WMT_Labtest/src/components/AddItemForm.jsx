import React, { useState } from "react";
import axios from "axios";

const AddItemForm = ({ onItemAdded }) => {
  const [name, setName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newItem = { name, brandName, category, price, description, imageUrl };
      const response = await axios.post("/api/items", newItem);
      onItemAdded(response.data);
      setName("");
      setBrandName("");
      setCategory("");
      setPrice("");
      setDescription("");
      setImageUrl("");
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Brand Name"
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;