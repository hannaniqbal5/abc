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
    <div className="max-w-md mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-lg">
      {todos?.map((todo) => (
        <div key={todo.id} className="container w-full max-w-md p-4 mb-4">
          <div className="flex flex-col items-center">
            <a href={todo.html_url} target="_blank">
              <img
                src={todo.owner.avatar_url}
                alt={todo.owner.login}
                width="200"
                height="200"
              ></img>
            </a>
            <h2 className="text-lg font-bold">
              <a href={todo.html_url} target="_blank">
                {todo.name}
              </a>
            </h2>
            <p className="text-gray-600">
              <a href={todo.owner.html_url} target="_blank">
                <FontAwesomeIcon icon={faUser} /> {todo.owner.login}
              </a>
            </p>

            <p className="text-gray-600">
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              {todo.stargazers_count}
            </p>
            <p className="text-gray-600">
              <FontAwesomeIcon
                icon={faCodeBranch}
                style={{ color: "#74C0FC" }}
              />
              {todo.forks}
            </p>
            <p className="text-gray-600">
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                style={{ color: "#ce0926" }}
              />
              {todo.open_issues}
            </p>
          </div>
          <br/>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FetchingApi;
