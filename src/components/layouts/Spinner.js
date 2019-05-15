import React from "react";
import spinner from "./assets/spinner.gif";

export default function Navbar() {
  return (
    <div className="">
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "40px", margin: "40px auto", display: "block" }}
      />
    </div>
  );
}
