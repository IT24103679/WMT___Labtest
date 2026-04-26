import { useNavigate } from "react-router-dom";
import ItemForm from "../components/ItemForm.jsx";
import { createItem } from "../api/itemApi.js";

function AddItemPage() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      await createItem(formData); // Call the API to create the item
      navigate("/"); // Navigate back to the home page after success
    } catch (error) {
      console.error("Failed to create item", error);
      alert("Failed to create item");
    }
  };

  return <ItemForm submitText="Add Item" onSubmit={handleCreate} />;
}

export default AddItemPage;