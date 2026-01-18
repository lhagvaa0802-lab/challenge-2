"use client";
import { useState } from "react";

export default function NameManager() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState("");
  const addName = () => {
    if (input.trim() === "") return;
    setNames([...names, input]);
    setInput("");
  };
  const deleteName = (index) => {
    setNames(names.filter((_, i) => i !== index));
  };



  return (
    <div>
      <h2>Name List</h2>
      <NameInput
        input={input}
        setInput={setInput}
        addName={addName}
      />
      <NameList names={names} deleteName={deleteName} />
    </div>
  );
}


const NameInput=({ input, setInput, addName })=>{
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addName}>Add</button>
    </div>
  );
}
function NameList({ names, deleteName }) {
  if (names.length === 0) {
    return <p>No names yet</p>;
  }

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>
          {name}
          <button onClick={() => deleteName(index)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

