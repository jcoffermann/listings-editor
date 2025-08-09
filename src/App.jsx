import React, { useState } from "react";
import ListingCard from "./ListingCard";

export default function App() {
  const [listings, setListings] = useState([
    { id: 1, title: "Sample Listing 1", description: "This is an example description." },
    { id: 2, title: "Sample Listing 2", description: "Another listing example." }
  ]);

  const [newListing, setNewListing] = useState({ title: "", description: "" });

  const addListing = () => {
    if (!newListing.title.trim()) return;
    setListings([...listings, { id: Date.now(), ...newListing }]);
    setNewListing({ title: "", description: "" });
  };

  const deleteListing = (id) => {
    setListings(listings.filter((l) => l.id !== id));
  };

  const updateListing = (id, updatedData) => {
    setListings(listings.map((l) => (l.id === id ? { ...l, ...updatedData } : l)));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Listings Editor</h1>

      {/* Add Listing Form */}
      <div className="flex flex-col md:flex-row gap-3 max-w-4xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Title"
          className="flex-1 p-2 border rounded-lg"
          value={newListing.title}
          onChange={(e) => setNewListing({ ...newListing, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="flex-1 p-2 border rounded-lg"
          value={newListing.description}
          onChange={(e) => setNewListing({ ...newListing, description: e.target.value })}
        />
        <button
          onClick={addListing}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Listing
        </button>
      </div>

      {/* Listings Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            {...listing}
            onDelete={() => deleteListing(listing.id)}
            onUpdate={(data) => updateListing(listing.id, data)}
          />
        ))}
      </div>
    </div>
  );
}
