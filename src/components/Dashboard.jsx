import React from "react";

function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-[#FF4F99] text-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold">Total Buses</h2>
        <p className="text-2xl mt-2">50</p>
      </div>
      <div className="bg-[#8262FE] text-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold">Active Trips</h2>
        <p className="text-2xl mt-2">20</p>
      </div>
      <div className="bg-[#567DFF] text-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold">Total Bookings</h2>
        <p className="text-2xl mt-2">200</p>
      </div>
      <div className="bg-[#A953FF] text-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold">Users</h2>
        <p className="text-2xl mt-2">150</p>
      </div>
    </div>
  );
}

export default DashboardPage;
