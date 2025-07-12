import React, { useState } from "react";
import { Calendar, Edit, Plus, PlusSquare, Trash } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { clearBooking, deleteBooking } from "../../redux/reducers/bookings";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

export default function ListMovie() {
  const [selectedMonth, setSelectedMonth] = useState("Jun 2025");
  const bookings = useSelector((state) => state.booking.bookings);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (index) => {
    Swal.fire({
      title: "Do you want to Delete Transactions?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sucess Delete!", "", "success");
        dispatch(deleteBooking(index));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  const handleAdd = () => {
    navigate("/dashboard/add-movies");
  };
  const handleDeleteAll = () => {
    dispatch(clearBooking());
  };

  return (
    <div className=" h-full  p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">List Movie</h2>
        <div className="flex gap-2 items-center">
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            <Plus className="w-4 h-4" />
            Add Movie
          </button>
          <button
            onClick={handleDeleteAll}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            <Trash className="w-4 h-4" />
            Delete All
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <Calendar className="text-gray-600 w-5 h-5" />
        <span className="text-gray-700">{selectedMonth}</span>
      </div>

      {bookings.length === 0 ? (
        <p className="text-gray-500 text-center">No Movie found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-4 rounded-lg shadow-sm flex gap-4 items-start relative"
            >
              <img
                src={item.img}
                alt={item.movieName}
                className="w-20 h-28 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-secondary mb-1">
                  {item.movieName}
                </h3>
                <p className="text-sm text-gray-600">
                  <strong>Date:</strong> {item.days} at {item.time}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong> {item.location}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Price:</strong> Rp {item.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => handleDelete(idx)}
                className="p-2 bg-red-500 hover:bg-red-600 text-white rounded"
                title="Delete Transaction"
              >
                <Trash className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDelete(idx)}
                className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                title="Edit Transaction"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDelete(idx)}
                className="p-2 bg-secondary hover:bg-orange-600 text-white rounded"
                title="Add Transaction"
              >
                <PlusSquare className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
