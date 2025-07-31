import React from "react";

export default function AppBarComponent({ onMenuClick }) {
  return (
    <div className="appbar">
      <button className="menu-button" onClick={onMenuClick}>
        ☰
      </button>
      <div className="profile-pic">
        <img
          src="assets/Men/1.jpg"
          alt="Profile"
          className="profile-img"
        />
      </div>
    </div>
  );
}
