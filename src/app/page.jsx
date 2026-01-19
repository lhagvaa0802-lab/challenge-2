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
    <div className="flex w-full justify-center">
      <div className="flex flex-col mt-30 gap-10 bg-white w-94.25 shadow-xl">
        <div className="flex flex-col gap-10 ml-5">
          <h2 className="text-center mt-10">To-Do list</h2>
          <NameInput input={input} setInput={setInput} addName={addName} />
          <Buttons />
        </div>

        <div className=" flex flex-col gap-10 items-center">
          <NameList names={names} deleteName={deleteName} />
        </div>
      </div>
    </div>
  );
}

const NameInput = ({ input, setInput, addName }) => {
  return (
    <div className="flex justify-between w-86.25">
      <input
        className="border border-gray-100 w-70 h-10"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task.."
      />
      <button
        className="bg-blue-500 w-14.75 text-white rounded-sm"
        onClick={addName}
      >
        Add
      </button>
    </div>
  );
};
const NameList = ({ names, deleteName }) => {
  if (names.length === 0) {
    return <p className="text-gray-400">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="flex flex-col gap-5">
      {names.map((name, index) => (
        <li
          className="flex justify-between w-86.25 h-15.5 items-center"
          key={index}
        >
          {name}
          <button onClick={() => deleteName(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const Buttons = () => {
  return (
    <div className="flex gap-2">
      <button>all</button>
      <button>active</button>
      <button>completed</button>
    </div>
  );
};
