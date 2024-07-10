import {
  faCodeBranch,
  faStar,
  faTriangleExclamation,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

function FetchingApi({ language }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories.`
        );
        const data = await response.json();
        setTodos(data.items);
        console.log(data.items);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchTodos();
  }, [language]);

  return (
    <div className="max-w-7xl mx-auto p-4 bg-zinc-400 rounded shadow-lg">
      <div className="flex flex-wrap -mx-4">
        {todos?.map((todo, index) => (
          <div
            key={todo.id}
            className="w-full xs:w-1/2 sm:w-1/2 lg:w-1/3 px-4 mb-4"
          >
            <div className="bg-white p-4 rounded shadow-lg">
              <div className="flex flex-col items-center">
                <p className="text-gray-800 mt-2 font-bold">
                  # {index} {/* Displaying the index number */}
                </p>
                <a
                  href={todo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={todo.owner.avatar_url}
                    alt={todo.owner.login}
                    className="w-32 h-32 rounded-full"
                  />
                </a>
                <h2 className="text-lg font-bold mt-4">
                  <a
                    href={todo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {todo.name}
                  </a>
                </h2>
                <p className="text-gray-600 mt-2 flex items-center">
                  <a
                    href={todo.owner.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    {todo.owner.login}
                  </a>
                </p>
                <p className="text-gray-600 mt-2 flex flex-col items-center">
                  <span className="flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="mr-2"
                      style={{ color: "#FFD43B" }}
                    />
                    {todo.stargazers_count} star
                  </span>
                  <span className="flex items-center mt-2">
                    <FontAwesomeIcon
                      icon={faCodeBranch}
                      className="mr-2"
                      style={{ color: "#74C0FC" }}
                    />
                    {todo.forks} 
                    forks
                  </span>
                  <span className="flex items-center mt-2">
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      className="mr-2"
                      style={{ color: "#ce0926" }}
                    />
                    {todo.open_issues} open issue
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchingApi;
