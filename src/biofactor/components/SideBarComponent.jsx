import React from "react";

export default function SideBarComponent({ onSelect }) {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item" onClick={() => onSelect("Dashboard")}>
          <img src="assets/dashboard.svg" alt="Dashboard" className="sidebar-icon" />
          <span>Dashboard</span>
        </li>
        <li className="sidebar-item" onClick={() => onSelect("Master")}>
          <img src="assets/Master.svg" alt="Master" className="sidebar-icon" />
          <span>Master</span>
        </li>
        
      </ul>
    </div>
  );
}
