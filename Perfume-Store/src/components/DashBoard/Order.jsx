import React, { useState } from "react";

const sampleOrders = [
  {
    id: 1,
    customer: "Alice Johnson",
    products: ["Rose Perfume", "Vanilla Mist"],
    total: 85,
    status: "Pending",
  },
  {
    id: 2,
    customer: "Bob Smith",
    products: ["Ocean Breeze"],
    total: 45,
    status: "Shipped",
  },
];

export default function Order() {
  const [orders, setOrders] = useState(sampleOrders);

  const handleStatusChange = (index, newStatus) => {
    const updated = [...orders];
    updated[index].status = newStatus;
    setOrders(updated);
  };

  const handleDelete = (index) => {
    const filtered = orders.filter((_, i) => i !== index);
    setOrders(filtered);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-xs">
              <th className="p-2">Order ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Products</th>
              <th className="p-2">Total</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className="border-b">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.customer}</td>
                <td className="p-2">{order.products.join(", ")}</td>
                <td className="p-2">${order.total}</td>
                <td className="p-2">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    className="border rounded p-1"
                  >
                    <option>Pending</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Canceled</option>
                  </select>
                </td>
                <td className="p-2 space-x-2">
                  <button className="text-blue-600 hover:underline">View</button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <p className="text-gray-500 mt-4">No orders found.</p>
        )}
      </div>
    </div>
  );
}
