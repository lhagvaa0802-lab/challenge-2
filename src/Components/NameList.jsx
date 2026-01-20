export default function NameList({
  names,
  deleteName,
  toggleTask,
  completedCount,
  totalCount,
  clearCompleted,
}) {
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

            {task.completed && (
              <button
                className="mr-5 bg-red-100 w-16 h-8 rounded-sm text-red-400"
                onClick={() => deleteName(task.id)}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>

      <div className="flex justify-between border-t-2 border-gray-200 h-9.25 items-center mt-4">
        <p className="text-gray-400">
          {completedCount} of {totalCount} tasks completed
        </p>
        <button className="text-red-400" onClick={clearCompleted}>
          Clear completed
        </button>
      </div>
    </div>
  );
}
