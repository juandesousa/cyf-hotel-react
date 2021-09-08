import React from "react";

const Footer = ({ valueFooter }) => {
  return (
    <footer>
      <ul>
        {valueFooter.map((value, index) => (
          <li key={index} className="d-flex justify-content-center">
            {value}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
