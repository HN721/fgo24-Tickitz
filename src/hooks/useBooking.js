import { useContext, useMemo } from "react";
import { DataContext } from "../App";

/**
 * Custom hook untuk mendapatkan daftar booking yang sesuai dengan
 * filter berdasarkan `date`, `time`, `location`, dan `idMovie`.
 *
 * @function useBookings
 * @param {Object} params - Parameter untuk memfilter bookings.
 * @param {string} params.date - Tanggal pemutaran film (format: YYYY-MM-DD).
 * @param {string} params.time - Waktu pemutaran film.
 * @param {string} params.location - Lokasi bioskop.
 * @param {string} params.idMovie - ID film.
 *
 * @returns {Array<Object>} Array dari objek booking yang sesuai dengan filter.
 *
 * @example
 * const filtered = useBookings({
 *   date: "2025-05-20",
 *   time: "14:00",
 *   location: "Jakarta",
 *   idMovie: "MOV123"
 * });
 */
export default function useBookings({ date, time, location, idMovie }) {
  const { bookings } = useContext(DataContext);

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      return (
        booking.date === date &&
        booking.time === time &&
        booking.location === location &&
        booking.idMovie === idMovie
      );
    });
  }, [bookings, date, time, location, idMovie]);

  return filteredBookings;
}
