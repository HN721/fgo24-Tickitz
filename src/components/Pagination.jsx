import React from "react";

/**
 * Komponen Pagination reusable
 *
 * @param {number} currentPage - Halaman aktif saat ini
 * @param {function} onPageChange - Fungsi pemanggil saat nomor halaman diklik
 * @param {number} totalPages - Total halaman yang ingin ditampilkan (default 4)
 */
export default function Pagination({
  currentPage,
  onPageChange,
  totalPages = 4,
}) {
  return (
    <div className="flex items-center space-x-2 mt-6 justify-center">
      {[...Array(totalPages)].map((_, index) => {
        const num = index + 1;
        return (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`w-10 h-10 rounded-full ${
              num === currentPage
                ? "bg-orange-600 text-white"
                : "border border-black text-black"
            } font-bold`}
          >
            {num}
          </button>
        );
      })}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="w-10 h-10 rounded-full bg-secondary text-white font-bold"
      >
        →
      </button>
    </div>
  );
}
