import React, { useState } from 'react'
import ListingCard from './ListingCard'

export default function App() {
  const [listings, setListings] = useState([
    { id: 1, title: 'Sample Listing 1', description: 'This is an example description.' },
    { id: 2, title: 'Sample Listing 2', description: 'Another listing example.' }
  ])

  const [newListing, setNewListing] = useState({ title: '', description: '' })

  const addListing = () => {
    if (!newListing.title.trim()) return
    setListings([...listings, { id: Date.now(), ...newListing }])
    setNewListing({ title: '', description: '' })
  }

  const deleteListing = (id) => {
    setListings(listings.filter(listing => listing.id !== id))
  }

  const updateListing = (id, updatedData) => {
    setListings(listings.map(l => l.id === id ? { ...l, ...updatedData } : l))
  }

  return (
    <div className="container">
      <h1>Listings Editor</h1>

      <div className="new-listing-form">
        <input
          type="text"
          placeholder="Title"
          value={newListing.title}
          onChange={e => setNewListing({ ...newListing, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newListing.description}
          onChange={e => setNewListing({ ...newListing, description: e.target.value })}
        />
        <button onClick={addListing}>Add Listing</button>
      </div>

      <div className="grid">
        {listings.map(listing => (
          <ListingCard
            key={listing.id}
            {...listing}
            onDelete={() => deleteListing(listing.id)}
            onUpdate={(data) => updateListing(listing.id, data)}
          />
        ))}
      </div>
    </div>
  )
}
