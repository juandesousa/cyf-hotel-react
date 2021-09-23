import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import moment from "moment";
import Trow from "./Trow";
moment().format();

const SearchResults = ({ results }) => {
  const [profile, setProfile] = useState();

  return (
    <div>
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
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <Trow result={result} key={index} setProfile={setProfile} />
          ))}
        </tbody>
      </table>

      {profile ? <CustomerProfile profile={profile} /> : null}
    </div>
  );
};

export default SearchResults;
