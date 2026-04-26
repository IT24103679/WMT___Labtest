import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [items, setItems] = useState([]); // Initialize items as an empty array
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("/api/items"); // Fetch items from the backend
        setItems(response.data); // Set the items state with the response data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Failed to fetch items:", error);
        setError("Failed to fetch items. Please try again later."); // Set error message
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <p>Loading items...</p>; // Show loading message while fetching data
  }

  if (error) {
    return <p>{error}</p>; // Show error message if there's an error
  }

  return (
    <div>
      <h1>Items</h1>
      <Link to="/add-item">
        <button>Add New Item</button>
      </Link>
      {items.length === 0 ? ( // Check if there are no items
        <p>No items available.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <strong>Name:</strong> {item.name} <br />
              <strong>Brand Name:</strong> {item.brandName} <br />
              <strong>Category:</strong> {item.category} <br />
              <strong>Price:</strong> ${item.price} <br />
              <strong>Description:</strong> {item.description} <br />
              <strong>Image URL:</strong> {item.imageUrl || "N/A"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;