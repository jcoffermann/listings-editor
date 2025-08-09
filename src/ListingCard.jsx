import React, { useState } from "react";
import { Trash2 } from "lucide-react";

export default function ListingCard({ id, title, description, onDelete, onUpdate }) {
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  const handleTitleChange = (e) => {
    setEditTitle(e.target.value);
    onUpdate({ title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setEditDescription(e.target.value);
    onUpdate({ description: e.target.value });
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-3 border hover:shadow-lg transition">
      <input
        type="text"
        value={editTitle}
        onChange={handleTitleChange}
        className="text-lg font-semibold border-b p-1 focus:outline-none"
      />
      <textarea
        value={editDescription}
        onChange={handleDescriptionChange}
        className="text-sm border p-2 rounded-lg resize-none focus:outline-none"
        rows={4}
      />
      <button
        onClick={onDelete}
        className="flex items-center justify-center gap-2 bg-red-500 text-white py-1 rounded-lg hover:bg-red-600 transition"
      >
        <Trash2 size={16} /> Delete
      </button>
    </div>
  );
}
