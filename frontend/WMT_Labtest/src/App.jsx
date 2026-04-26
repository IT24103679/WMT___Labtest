import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AddItemPage from "./pages/AddItemPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-item" element={<AddItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;