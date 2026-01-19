"use client";
import { useState } from "react";

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

const NameInput = ({ input, setInput, addName }) => {
  return (
    <div className="flex justify-between w-86.25">
      <input
        className="border border-gray-100 w-70 h-10"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task.."
        onKeyDown={(e) => {
          if (e.key === "Enter") addName();
        }}
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

const NameList = ({
  names,
  deleteName,
  toggleTask,
  completedCount,
  totalCount,
  clearCompleted,
}) => {
  if (names.length === 0) {
    return <p className="text-gray-400">No tasks yet. Add one above!</p>;
  }

  return (
    <div>
      <ul className="flex flex-col gap-5">
        {names.map((task) => (
          <li
            className="flex justify-between w-86.25 h-15.5 items-center gap-3 bg-gray-100 rounded-xl"
            key={task.id}
          >
            <div className="flex items-center gap-3 flex-1 ml-5">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <span
                className={task.completed ? "line-through text-gray-400" : ""}
              >
                {task.text}
              </span>
            </div>
            

            {task.completed && (<button className="mr-5 bg-red-100 w-16 h-8 rounded-sm text-red-400" onClick={() => deleteName(task.id)}>Delete</button>)}

          </li>
        ))}
      </ul>

      <div className="flex justify-between border-t-2 border-gray-200 h-9.25 items-center mt-4">
        <p className="text-gray-400">
          {completedCount} of {totalCount} tasks completed
        </p>
        <button className="text-red-400"onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  );
};




const Buttons = ({ filter, setFilter }) => {
  const base = "px-3 py-1 border rounded text-sm";
  const active = "bg-blue-500 text-white border-blue-500";
  const inactive = "bg-white text-gray-600 border-gray-300";

  return (
    <div className="flex gap-2">
      <button
        className={`${base} ${filter === "all" ? active : inactive}`}
        onClick={() => setFilter("all")}
      >
        all
      </button>

      <button
        className={`${base} ${filter === "active" ? active : inactive}`}
        onClick={() => setFilter("active")}
      >
        active
      </button>

      <button
        className={`${base} ${filter === "completed" ? active : inactive}`}
        onClick={() => setFilter("completed")}
      >
        completed
      </button>
    </div>
  );
};
