import { createContext, useState } from "react";

const defaultContext = {
  movieId: null,
  movieTitle: "",
  format: "",
  date: "",
  showtime: "",
  seats: [],
  setMovieId: () => {},
  setMovieTitle: () => {},
  setFormat: () => {},
  setDate: () => {},
  setShowtime: () => {},
  setSeats: () => {},
};

export const UserSelectionContext = createContext(defaultContext);

export const UserSelectionProvider = ({ children }) => {
  const [movieId, setMovieId] = useState(null);
  const [movieTitle, setMovieTitle] = useState("");
  const [format, setFormat] = useState("");
  const [date, setDate] = useState("");
  const [showtime, setShowtime] = useState("");
  const [seats, setSeats] = useState([]);

  return (
    <UserSelectionContext.Provider
      value={{
        movieId,
        movieTitle,
        format,
        date,
        showtime,
        seats,
        setMovieId,
        setMovieTitle,
        setFormat,
        setDate,
        setShowtime,
        setSeats,
      }}
    >
      {children}
    </UserSelectionContext.Provider>
  );
};
