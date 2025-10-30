import React, { useState } from "react";

const NotesApp = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (note.trim() === "") return;
    setNotes([...notes, note]);
    setNote("");
  };

  const handleDelete = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="min-h-screen  from-pink-400 via-purple-500 to-indigo-500 flex flex-col items-center py-10 px-4 bg-blue-300">
      <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg">
        📝 My Notes
      </h1>

      {/* Input Area */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10 w-full max-w-md">
        <input 
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your note..."
          className="p-3 rounded-lg text-gray-900 outline-none border border-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 transition-all w-full"
        />
        <button
          onClick={handleAddNote}
          className="bg-yellow-400 text-gray-900 px-5 py-3 rounded-lg font-semibold hover:bg-yellow-500 active:scale-95 transition-all shadow-md"
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      {notes.length === 0 ? (
        <p className="text-white/80 italic">No notes yet. Start writing something 💭</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {notes.map((n, index) => (
           <div
  key={index}
  className="bg-white/20 p-5 rounded-lg shadow-md relative flex flex-col justify-between pt-7"
>
  <p className="text-lg wrap-break-word mb-8">{n}</p>
  <button
    onClick={() => handleDelete(index)}
    className="absolute top-0 right-0 bg-red-500 text-white px-1  py-1 text-sm rounded hover:bg-red-600 transition-all"
  >
    Delete
  </button>
</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesApp;
