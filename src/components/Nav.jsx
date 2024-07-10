import React from "react";

const Nav = ({ setLanguage }) => {
  return (
    <nav className="flex flex-wrap justify-center mb-4">
      <button
        className="bg-orange-500 hover:bg-orange-700 m-2 sm:m-3 text-white font-bold py-2 px-4 rounded"
        onClick={() => setLanguage("All")}
      >
        All
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 m-2 sm:m-3 text-white font-bold py-2 px-4 rounded"
        onClick={() => setLanguage("JavaScript")}
      >
        JavaScript
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 m-2 sm:m-3 text-white font-bold py-2 px-4 rounded"
        onClick={() => setLanguage("Ruby")}
      >
        Ruby
      </button>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 m-2 sm:m-3 text-white font-bold py-2 px-4 rounded"
        onClick={() => setLanguage("Python")}
      >
        Python
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 m-2 sm:m-3 text-white font-bold py-2 px-4 rounded"
        onClick={() => setLanguage("Java")}
      >
        Java
      </button>
      <button
        className="bg-purple-500 hover:bg-purple-700 m-2 sm:m-3 text-white font-bold py-2 px-4 rounded"
        onClick={() => setLanguage("C++")}
      >
        C++
      </button>
    </nav>
  );
};

export default Nav;
