import React from "react";

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
          return (
            <tbody key={index}>
              <tr>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{firstName}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
              </tr>
            </tbody>
          );
        }
      )}
    </table>
  );
};

export default SearchResults;
