export default function NameInput({ input, setInput, addName }) {
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
}
