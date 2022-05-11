import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>Made ❤ By Akash Kumar Dash</p>
    </footer>
  );
}

export default Footer;
