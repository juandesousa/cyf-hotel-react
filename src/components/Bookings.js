import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
// import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState();

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/error")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    const newBooking = bookings.filter(
      booking =>
        booking.firstName.toUpperCase() === searchVal.toUpperCase() ||
        booking.surname.toUpperCase() === searchVal.toUpperCase()
    );
    console.info("TO DO!", searchVal);
    setBookings(newBooking);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings ? (
          bookings.error ? (
            <div
              className="alert alert-danger d-flex justify-content-center"
              role="alert"
            >
              <h2>{bookings.error}</h2>
            </div>
          ) : (
            <SearchResults results={bookings} />
          )
        ) : (
          <div className="d-flex justify-content-center">
            <h2>Loading... </h2>
            <div className="spinner-border ml-2" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
