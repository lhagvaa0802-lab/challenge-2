"use client";
import { useState } from "react";
import Buttons from "@/Components/Buttons";
import NameInput from "@/Components/NameInput";
import NameList from "@/Components/NameList";

export default function NameManager() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addName = () => {
    const text = input.trim();
    if (!text) return;

    setNames((prev) => [...prev, { id: Date.now(), text, completed: false }]);
    setInput("");
  };

  const deleteName = (id) => {
    setNames((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setNames((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const clearCompleted = () => {
    setNames((prev) => prev.filter((t) => !t.completed));
  };

  let filteredNames = names;
  if (filter === "active") filteredNames = names.filter((t) => !t.completed);
  if (filter === "completed") filteredNames = names.filter((t) => t.completed);

  const completedCount = names.filter((t) => t.completed).length;
  const totalCount = names.length;

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col mt-30 gap-10 bg-white w-94.25 shadow-xl">
        <div className="flex flex-col gap-10 ml-5">
          <h2 className="text-center mt-10">To-Do list</h2>
          <NameInput input={input} setInput={setInput} addName={addName} />
          <Buttons filter={filter} setFilter={setFilter} />
        </div>

        <div className="flex flex-col gap-10 items-center">
          <NameList
            names={filteredNames}
            deleteName={deleteName}
            toggleTask={toggleTask}
            completedCount={completedCount}
            totalCount={totalCount}
            clearCompleted={clearCompleted}
          />
        </div>
        <div className="flex gap-1 justify-center">
          <p className="text-center mb-5 text-gray-400">Powered by</p>
          <p
            className="cursor-pointer text-blue-300 hover:underline"
            onClick={() => window.open("https://pinecone.mn/", "_blank")}
          >
            PineCone Academy
          </p>
        </div>
      </div>
    </div>
  );
}
