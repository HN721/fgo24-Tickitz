import React, { useState, useEffect } from "react";
import { Calendar, Clock, Film, Pencil, Trash2 } from "lucide-react";
import { getPage } from "../../services/fetchMovie";
import { useNavigate } from "react-router-dom";

export default function ListMovie() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPage();
        const data = Array.isArray(res) ? res : res.data || [];
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentMovies = movies.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const formatPrice = (price) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };
  const navigate = useNavigate();
  const addMovies = () => {
    navigate("/dashboard/add-movies");
  };

  const getGenreColor = (genre) => {
    const colors = {
      Action: "bg-red-100 text-red-800",
      Adventure: "bg-orange-100 text-orange-800",
      Drama: "bg-blue-100 text-blue-800",
      "Sci-Fi": "bg-purple-100 text-purple-800",
      Crime: "bg-gray-100 text-gray-800",
      Thriller: "bg-yellow-100 text-yellow-800",
      Fantasy: "bg-green-100 text-green-800",
    };
    return colors[genre] || "bg-gray-100 text-gray-800";
  };

  const handleEdit = (id) => {
    console.log("Edit movie with id:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete movie with id:", id);
    // Tambahan konfirmasi atau fungsi delete API di sini
  };

  if (loading) {
    return (
      <div className="p-6 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-16 bg-gray-200"></div>
              {[...Array(itemsPerPage)].map((_, i) => (
                <div
                  key={i}
                  className="h-24 bg-gray-100 border-b border-gray-200"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Film className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Movie Collection
            </h1>
          </div>
          <p className="text-gray-600">
            Discover and manage your movie collection
          </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <button
            onClick={addMovies} // Ganti dengan navigasi ke form
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow transition"
          >
            + Add Movie
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Movie
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Genres
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Release
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentMovies.map((movie) => (
                  <tr
                    key={movie.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={movie.poster}
                          alt={movie.title}
                          className="h-20 w-14 object-cover rounded-lg shadow-md"
                          onError={(e) =>
                            (e.target.src =
                              "https://via.placeholder.com/200x300/6b7280/ffffff?text=No+Image")
                          }
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {movie.title}
                          </h3>
                          <p className="text-sm text-gray-500">#{movie.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {movie.genres?.map((genre, idx) => (
                          <span
                            key={idx}
                            className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getGenreColor(
                              genre
                            )}`}
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-gray-500" />
                        {formatDuration(movie.duration)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        {formatDate(movie.releaseDate)}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-green-600">
                      {formatPrice(movie.price)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleEdit(movie.id)}
                          className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50"
                          title="Edit"
                        >
                          <Pencil className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(movie.id)}
                          className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm border">
            Showing {indexOfFirst + 1} to {Math.min(indexOfLast, movies.length)}{" "}
            of {movies.length} movies
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-white border text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white border text-gray-700 hover:bg-gray-50"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-white border text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
