"use client";

export default function Buttons({ filter, setFilter }) {
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
}
