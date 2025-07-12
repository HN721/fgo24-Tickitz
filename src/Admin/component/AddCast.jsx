import React, { useState } from "react";
import { X, Plus, User } from "lucide-react";

const AddCast = () => {
  const [formData, setFormData] = useState({
    cast: [], // Array untuk menyimpan multiple cast
  });

  const [newCast, setNewCast] = useState("");
  const [showInput, setShowInput] = useState(false);

  // Daftar cast populer sebagai suggestions
  const popularCasts = [
    "Leonardo DiCaprio",
    "Scarlett Johansson",
    "Robert Downey Jr.",
    "Emma Stone",
    "Tom Holland",
    "Margot Robbie",
    "Ryan Reynolds",
    "Jennifer Lawrence",
    "Chris Evans",
    "Natalie Portman",
  ];

  // Filter cast yang belum dipilih
  const availableCasts = popularCasts.filter(
    (cast) => !formData.cast.includes(cast)
  );

  const handleAddCast = (castName) => {
    if (castName && !formData.cast.includes(castName)) {
      setFormData((prev) => ({
        ...prev,
        cast: [...prev.cast, castName],
      }));
      setNewCast("");
      setShowInput(false);
    }
  };

  const handleRemoveCast = (castToRemove) => {
    setFormData((prev) => ({
      ...prev,
      cast: prev.cast.filter((cast) => cast !== castToRemove),
    }));
  };

  const handleInputSubmit = (e) => {
    if (e) e.preventDefault();
    if (newCast.trim()) {
      handleAddCast(newCast.trim());
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-secondary text-white">
      <div>
        <label className="text-sm font-medium text-gray-300 mb-2 flex items-center">
          <User className="w-4 h-4 mr-2" />
          Casts
        </label>

        <div className="mb-4">
          {formData.cast.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {formData.cast.map((cast, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-purple-600 text-white rounded-full text-sm"
                >
                  {cast}
                  <button
                    onClick={() => handleRemoveCast(cast)}
                    className="ml-2 hover:bg-purple-700 rounded-full p-1 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {showInput ? (
          <div className="mb-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={newCast}
                onChange={(e) => setNewCast(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleInputSubmit(e)}
                className="flex-1 px-4 py-3 bg-purple-800/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all duration-200"
                placeholder="Enter cast name..."
                autoFocus
              />
              <button
                onClick={handleInputSubmit}
                className="px-4 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors"
              >
                Add
              </button>
              <button
                onClick={() => {
                  setShowInput(false);
                  setNewCast("");
                }}
                className="px-4 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowInput(true)}
            className="w-full px-4 py-3 bg-purple-800/50 border border-purple-500/50 rounded-lg text-gray-300 hover:border-pink-400 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Cast Member
          </button>
        )}

        {availableCasts.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-400 mb-2">
              Popular Cast Suggestions:
            </p>
            <div className="flex flex-wrap gap-2">
              {availableCasts.slice(0, 6).map((cast) => (
                <button
                  key={cast}
                  onClick={() => handleAddCast(cast)}
                  className="px-3 py-1 bg-gray-700 hover:bg-purple-600 text-sm rounded-full transition-colors"
                >
                  + {cast}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-3 text-sm text-gray-400">
          {formData.cast.length > 0 && (
            <span>
              {formData.cast.length} cast member
              {formData.cast.length > 1 ? "s" : ""} selected
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCast;
