import React from "react";
import "./LoadingScreen.css";

export default function LoadingRing({ fadeOut }) {
  return (
    <div className={`ring-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
      <h2 className="ring-name">KirubaNithi</h2>
    </div>
  );
}
