import React from "react";

const AdminDashboardPage = () => {

  this.paginate = async function (data) {
    try {
      const response = await fetch('https://reacttask.mkdlabs.com/v1/api/rest/video/PAGINATE', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'x-project': 'cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw=='},
      });
    }
      catch (error) {
        console.error(error);
        throw error;
      }
      

  return (
    <>
      <div className="w-full flex justify-center items-center text-7xl h-screen text-gray-700 ">
      <div class="flex flex-col h-screen bg-gray-200">
  <header class="flex items-center justify-between px-4 py-3 bg-white shadow">
    <div class="flex items-center">
      <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
        {/* Logo SVG path goes here */}
      </svg>
      <h1 class="font-bold text-2xl ml-2">My App</h1>
    </div>
    <div class="flex items-center">
      <button class="p-1 rounded-full bg-gray-300 hover:bg-gray-400">
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          {/* User icon SVG path goes here */}
        </svg>
      </button>
      <button class="ml-4 p-1 rounded-full bg-gray-300 hover:bg-gray-400">
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          {/* Logout icon SVG path goes here */}
        </svg>
      </button>
    </div>
  </header>
  <main class="flex-1 px-4 py-6 overflow-y-scroll">
    {/* Dashboard content goes here */}
  </main>
</div>

      </div>
    </>
  );
};
}

export default AdminDashboardPage;
