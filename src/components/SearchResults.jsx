import React, { useState } from "react";
import moment from "moment";
moment().format();

const SearchResults = ({ results }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map(
          (
            {
              id,
              title,
              firstName,
              surname,
              email,
              roomId,
              checkInDate,
              checkOutDate
            },
            index
          ) => {
            const checkOut = moment(checkOutDate, "YYYY-MM-DD");
            const checkIn = moment(checkInDate, "YYYY-MM-DD");

            const [backGround, setBackGround] = useState("bg-transparent");

            const changeBackGround = event => {
              if (event.currentTarget.className === "bg-transparent") {
                setBackGround("selectedRow");
              } else {
                setBackGround("bg-transparent");
              }
            };

            return (
              <tr className={backGround} key={index} onClick={changeBackGround}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{firstName}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
                <td>{checkOut.diff(checkIn, "days")}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
