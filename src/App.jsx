import { useState } from "react";

import "./App.css";
import FetchingApi from "./components/FetchingApi";
import Nav from "./components/Nav";

const App = () => {
  const [language, setLanguage] = useState("All");

  return (
    <div>
      <Nav setLanguage={setLanguage} />
      {language && <FetchingApi language={language} />}
    </div>
  );
};

export default App;
