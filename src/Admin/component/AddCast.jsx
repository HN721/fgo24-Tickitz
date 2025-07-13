import React, { useEffect, useState } from "react";
import { X, Plus, User } from "lucide-react";
import http from "../../lib/http";

const AddCast = ({ selectedCasts, setSelectedCasts }) => {
  const [newCast, setNewCast] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [actorList, setActorList] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const res = await http().get("/movie/actor");
        setActorList(res.data.results);
      } catch (err) {
        console.error("Failed to fetch actors:", err);
      }
    };
    fetchActors();
  }, []);

  const handleAddCast = (name) => {
    if (name && !selectedCasts.includes(name)) {
      setSelectedCasts((prev) => [...prev, name]);
      setNewCast("");
      setShowInput(false);
    }
  };

  const handleRemoveCast = (name) => {
    setSelectedCasts((prev) => prev.filter((c) => c !== name));
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (newCast.trim()) handleAddCast(newCast.trim());
  };

  const availableCasts = actorList
    .map((a) => a.fullname)
    .filter((name) => !selectedCasts.includes(name));

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-secondary text-white">
      <label className="text-sm font-medium text-gray-300 mb-2 flex items-center">
        <User className="w-4 h-4 mr-2" />
        Casts
      </label>

      {selectedCasts.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedCasts.map((name, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 bg-purple-600 text-white rounded-full text-sm"
            >
              {name}
              <button
                onClick={() => handleRemoveCast(name)}
                className="ml-2 hover:bg-purple-700 rounded-full p-1"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {showInput ? (
        <form onSubmit={handleInputSubmit} className="mb-4 flex gap-2">
          <input
            value={newCast}
            onChange={(e) => setNewCast(e.target.value)}
            className="flex-1 px-4 py-3 bg-purple-800/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-300 focus:outline-none"
            placeholder="Enter cast name..."
            autoFocus
          />
          <button type="submit" className="px-4 py-3 bg-pink-600 rounded-lg">
            Add
          </button>
          <button
            onClick={() => {
              setShowInput(false);
              setNewCast("");
            }}
            className="px-4 py-3 bg-gray-600 rounded-lg"
          >
            Cancel
          </button>
        </form>
      ) : (
        <button
          onClick={() => setShowInput(true)}
          className="w-full px-4 py-3 bg-purple-800/50 border border-purple-500/50 rounded-lg text-gray-300 hover:text-white"
        >
          <Plus className="w-4 h-4 inline-block mr-2" />
          Add Cast Member
        </button>
      )}

      {availableCasts.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-gray-400 mb-2">Available Casts:</p>
          <div className="flex flex-wrap gap-2">
            {availableCasts.slice(0, 10).map((name) => (
              <button
                key={name}
                onClick={() => handleAddCast(name)}
                className="px-3 py-1 bg-gray-700 hover:bg-purple-600 text-sm rounded-full"
              >
                + {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCast;
