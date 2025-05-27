import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    ID: "",
    name: "",
    price: "",
    size: "",
    stock: "",
    image: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (!form.name || !form.price || !form.size || !form.stock || !form.image) {
      alert("Please fill in all fields");
      return;
    }

    if (editingIndex !== null) {
      const updated = [...products];
      updated[editingIndex] = { ...form, id: products[editingIndex].id };
      setProducts(updated);
      setEditingIndex(null);
    } else {
      const newProduct = { ...form, id: Date.now() };
      setProducts([...products, newProduct]);
    }

    setForm({ name: "", price: "", size: "", stock: "", image: "" });
  };

  const handleEdit = (index) => {
    setForm(products[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = products.filter((_, i) => i !== index);
    setProducts(filtered);
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>

      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-lg font-semibold mb-4">
          {editingIndex !== null ? "Edit Product" : "Add New Product"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" placeholder="Product Name" className="border p-2 rounded" value={form.name} onChange={handleChange} />
          <input name="price" placeholder="Price" className="border p-2 rounded" value={form.price} onChange={handleChange} />
          <input name="size" placeholder="Size" className="border p-2 rounded" value={form.size} onChange={handleChange} />
          <input name="stock" placeholder="Stock" className="border p-2 rounded" value={form.stock} onChange={handleChange} />
          <input name="image" placeholder="Image URL" className="border p-2 rounded col-span-1 md:col-span-2" value={form.image} onChange={handleChange} />
        </div>
        <button onClick={handleAddProduct} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {editingIndex !== null ? "Update Product" : "Add Product"}
        </button>
      </div>

      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Product List</h2>
        {products.length === 0 ? (
          <p className="text-gray-500">No products added yet.</p>
        ) : (
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-xs">
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Price</th>
                <th className="p-2">Size</th>
                <th className="p-2">Stock</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod, index) => (
                <tr key={prod.id} className="border-b">
                  <td className="p-2">{prod.id}</td>
                  <td className="p-2">{prod.name}</td>
                  <td className="p-2">${prod.price}</td>
                  <td className="p-2">{prod.size}</td>
                  <td className="p-2">{prod.stock}</td>
                  <td className="p-2 space-x-2">
                    <button onClick={() => handleEdit(index)} className="text-blue-600 hover:underline">Edit</button>
                    <button onClick={() => handleDelete(index)} className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </DashboardLayout>
  );
}
