import React, { useState } from "react";
import {
  Plus,
  Upload,
  Star,
  Calendar,
  Clock,
  Tag,
  Film,
  X,
} from "lucide-react";
import AddCast from "./AddCast";
import AddDirector from "./AddDirector";

export default function AddMovie() {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    year: "",
    duration: "",
    genre: "",
    rating: "",
    description: "",
    poster: null,
  });

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Horror",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Fantasy",
    "Mystery",
    "Animation",
    "Documentary",
    "Crime",
    "Family",
    "War",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenreToggle = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        setFormData((prev) => ({
          ...prev,
          poster: file,
        }));
      }
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        poster: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    console.log("Form submitted:", { ...formData, genres: selectedGenres });
    // Reset form
    setFormData({
      title: "",
      director: "",
      year: "",
      duration: "",
      genre: "",
      rating: "",
      description: "",
      poster: null,
    });
    setSelectedGenres([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4 shadow-lg">
            <Film className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Add New Movie
          </h1>
          <p className="text-gray-600">
            Create a new movie entry with stunning details
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-secondary backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Movie Poster
                </h3>

                <div
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                    dragActive
                      ? "border-pink-400 bg-pink-400/20 scale-105"
                      : "border-purple-400/50 hover:border-purple-300/70 bg-purple-800/30"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {formData.poster ? (
                    <div className="space-y-3">
                      <div className="w-32 h-48 mx-auto bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm text-center px-2">
                          {formData.poster.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, poster: null }))
                        }
                        className="text-pink-400 hover:text-pink-300 text-sm underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="w-16 h-16 mx-auto bg-pink-500 rounded-full flex items-center justify-center">
                        <Upload className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white font-medium">
                        Drop your poster here or click to browse
                      </p>
                      <p className="text-gray-400 text-sm">
                        Supports: JPG, PNG (Max 5MB)
                      </p>
                    </div>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>

              <div className="bg-secondary backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Movie Background
                </h3>

                <div
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                    dragActive
                      ? "border-pink-400 bg-pink-400/20 scale-105"
                      : "border-purple-400/50 hover:border-purple-300/70 bg-purple-800/30"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {formData.poster ? (
                    <div className="space-y-3">
                      <div className="w-32 h-48 mx-auto bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm text-center px-2">
                          {formData.poster.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, poster: null }))
                        }
                        className="text-pink-400 hover:text-pink-300 text-sm underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="w-16 h-16 mx-auto bg-pink-500 rounded-full flex items-center justify-center">
                        <Upload className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white font-medium">
                        Drop your poster here or click to browse
                      </p>
                      <p className="text-gray-400 text-sm">
                        Supports: JPG, PNG (Max 5MB)
                      </p>
                    </div>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
              <div className="bg-secondary backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  Genres
                </h3>

                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      type="button"
                      onClick={() => handleGenreToggle(genre)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedGenres.includes(genre)
                          ? "bg-secondary text-white shadow-lg scale-105"
                          : "bg-purple-600/50 text-gray-300 hover:bg-purple-500/60 hover:text-white border border-purple-400/50"
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>

                {selectedGenres.length > 0 && (
                  <div className="mt-4 p-3 bg-purple-800/30 rounded-lg border border-purple-500/30">
                    <p className="text-sm text-gray-300 mb-2">
                      Selected genres:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {selectedGenres.map((genre) => (
                        <span
                          key={genre}
                          className="inline-flex items-center px-2 py-1 bg-secondary text-white text-xs rounded-full"
                        >
                          {genre}
                          <button
                            type="button"
                            onClick={() => handleGenreToggle(genre)}
                            className="ml-1 hover:text-gray-300"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Movie Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Movie Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-purple-800/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all duration-200"
                      placeholder="Enter movie title"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Year
                      </label>
                      <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-purple-800/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all duration-200"
                        placeholder="2024"
                        min="1900"
                        max="2030"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Duration (min)
                      </label>
                      <input
                        type="number"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-purple-800/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all duration-200"
                        placeholder="120"
                        min="1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-purple-800/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all duration-200 resize-none"
                      placeholder="Brief description of the movie..."
                    />
                  </div>
                </div>
              </div>
              <AddDirector />
              <AddCast />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="group relative px-8 py-4 bg-secondary hover:bg-pink-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add Movie</span>
              <div className="absolute inset-0 bg-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
