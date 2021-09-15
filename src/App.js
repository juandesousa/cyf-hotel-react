import React from "react";
import Heading from "./components/Heading";

import Bookings from "./components/Bookings";
import "./App.css";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";

const App = () => {
  const valueFooter = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer valueFooter={valueFooter} />
    </div>
  );
};

export default App;
