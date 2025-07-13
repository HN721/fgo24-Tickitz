import React, { useState, useEffect } from "react";
import { X, Plus, User } from "lucide-react";
import http from "../../lib/http";

const AddDirector = ({ selectedDirectors, setSelectedDirectors }) => {
  const [newDirector, setNewDirector] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [availableDirectors, setAvailableDirectors] = useState([]);

  useEffect(() => {
    const fetchDirectors = async () => {
      try {
        const res = await http().get("/movie/director");
        setAvailableDirectors(res.data.results);
      } catch (err) {
        console.error("Failed to fetch directors:", err);
      }
    };
    fetchDirectors();
  }, []);

  const handleAddDirector = (director) => {
    if (director && !selectedDirectors.some((d) => d.id === director.id)) {
      setSelectedDirectors((prev) => [...prev, director]);
      setNewDirector("");
      setShowInput(false);
    }
  };

  const handleRemoveDirector = (idToRemove) => {
    setSelectedDirectors((prev) => prev.filter((d) => d.id !== idToRemove));
  };

  const handleInputSubmit = (e) => {
    if (e) e.preventDefault();
    const match = availableDirectors.find(
      (d) => d.fullname.toLowerCase() === newDirector.toLowerCase()
    );
    if (match) handleAddDirector(match);
  };

  const unusedDirectors = availableDirectors.filter(
    (d) => !selectedDirectors.some((dir) => dir.id === d.id)
  );

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-secondary text-white">
      <label className="text-sm font-medium text-gray-300 mb-2 flex items-center">
        <User className="w-4 h-4 mr-2" />
        Director
      </label>

      {selectedDirectors.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {selectedDirectors.map((d) => (
            <span
              key={d.id}
              className="inline-flex items-center px-3 py-1 bg-purple-600 text-white rounded-full text-sm"
            >
              {d.fullname}
              <button
                onClick={() => handleRemoveDirector(d.id)}
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
            type="text"
            value={newDirector}
            onChange={(e) => setNewDirector(e.target.value)}
            placeholder="Enter director name..."
            className="flex-1 px-4 py-3 bg-purple-800/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg"
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => {
              setShowInput(false);
              setNewDirector("");
            }}
            className="px-4 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg"
          >
            Cancel
          </button>
        </form>
      ) : (
        <button
          onClick={() => setShowInput(true)}
          className="w-full px-4 py-3 bg-purple-800/50 border border-purple-500/50 rounded-lg text-gray-300 hover:border-pink-400"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Director
        </button>
      )}

      {unusedDirectors.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-gray-400 mb-2">Available Directors:</p>
          <div className="flex flex-wrap gap-2">
            {unusedDirectors.slice(0, 6).map((d) => (
              <button
                key={d.id}
                onClick={() => handleAddDirector(d)}
                className="px-3 py-1 bg-gray-700 hover:bg-purple-600 text-sm rounded-full"
              >
                + {d.fullname}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddDirector;
