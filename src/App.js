import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState();

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <h1>Please type your name</h1>
      <input type="text" onChange={handleSetName} />
      <p>{name}</p>
    </div>
  );
}

export default App;
