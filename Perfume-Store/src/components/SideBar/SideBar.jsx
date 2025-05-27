import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen shadow-lg fixed">
      <div className="p-6 text-2xl font-bold text-blue-600">Arome Admin</div>
      <nav className="flex flex-col space-y-2 p-4">
        <Link to="/dash" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
        <Link to="/orders" className="text-gray-700 hover:text-blue-600">Orders</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
