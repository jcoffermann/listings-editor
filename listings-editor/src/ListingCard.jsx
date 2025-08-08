import React, { useState } from 'react'

export default function ListingCard({ id, title, description, onDelete, onUpdate }) {
  const [editTitle, setEditTitle] = useState(title)
  const [editDescription, setEditDescription] = useState(description)

  return (
    <div className="card">
      <input
        type="text"
        value={editTitle}
        onChange={(e) => {
          setEditTitle(e.target.value)
          onUpdate({ title: e.target.value, description: editDescription })
        }}
      />
      <textarea
        value={editDescription}
        onChange={(e) => {
          setEditDescription(e.target.value)
          onUpdate({ title: editTitle, description: e.target.value })
        }}
      />
      <div className="card-actions">
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}
