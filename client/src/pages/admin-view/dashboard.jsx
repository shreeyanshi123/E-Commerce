import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Summary Cards */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-3xl font-bold mt-2">350</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold mt-2">75</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-4 h-64 flex items-center justify-center">
        <p className="text-gray-500">[Chart or recent activity will go here]</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
