import React, { useEffect, useState } from "react";
import { Calendar, Eye, Pencil, Trash } from "lucide-react";
import { getData } from "../../services/fetchMovie";
export default function ListMovie() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState("November 2023");

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchList = async () => {
      const res = await getData();

      setMovies(res);
    };
    fetchList();
  }, []);
  return (
    <div className="bg-white p-6 rounded-lg  mt-12 shadow-sm max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">List Movie</h1>
        <div className="flex gap-2">
          <div className="relative">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded cursor-pointer">
              <Calendar className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700">{selectedMonth}</span>
            </div>
          </div>
          <button className="bg-secondary hover:bg-orange-700 text-white px-4 py-2 rounded">
            Add Movies
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="py-3 px-2 whitespace-nowrap">No</th>
              <th className="py-3 px-2 whitespace-nowrap">Thumbnail</th>
              <th className="py-3 px-2 whitespace-nowrap">Movie Name</th>
              <th className="py-3 px-2 whitespace-nowrap">Category</th>
              <th className="py-3 px-2 whitespace-nowrap">Released Date</th>
              <th className="py-3 px-2 whitespace-nowrap">Duration</th>
              <th className="py-3 px-2 whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie.id} className="border-t border-gray-100">
                <td className="py-3 px-2">{index + 1}</td>
                <td className="py-3 px-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    className="h-10 w-10 rounded object-cover"
                  />
                </td>
                <td className="py-3 px-2 text-secondary">{movie.title}</td>
                <td className="py-3 px-2 text-secondary">Action</td>
                <td className="py-3 px-2">{movie.release_date}</td>
                <td className="py-3 px-2">60 Min</td>
                <td className="py-3 px-2">
                  <div className="flex gap-1">
                    <button className="p-1 bg-blue-500 rounded text-white">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-1 bg-blue-500 rounded text-white">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button className="p-1 bg-red-500 rounded text-white">
                      <Trash className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6">
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`h-8 w-8 flex items-center justify-center rounded ${
                currentPage === page
                  ? "bg-secondary text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
