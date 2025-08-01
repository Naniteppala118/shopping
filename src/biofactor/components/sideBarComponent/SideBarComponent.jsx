import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

export default function SideBarComponent({ onSelect }) {
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const masterRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const toggleMaster = () => {
    if (masterRef.current) {
      const rect = masterRef.current.getBoundingClientRect();
      setDropdownPosition({ top: rect.bottom, left: rect.left + rect.width });
    }
    setIsMasterOpen(!isMasterOpen);
  };

  const subMasters = [
    { key: "Employee", label: "Employee Master" },
    { key: "Employee", label: "Zones Master" },
    { key: "Employee", label: "States Master" },
    { key: "Employee", label: "Education Master" },
  ];


  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!masterRef.current?.contains(e.target)) {
        setIsMasterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item" onClick={() => onSelect("Dashboard")}>
            <img src="assets/dashboard.svg" alt="Dashboard" className="sidebar-icon" />
            <span className="title">Dashboard</span>
          </li>

          <li
            className="sidebar-item"
            onClick={toggleMaster}
            ref={masterRef}
          >
            <img src="assets/Master.svg" alt="Master" className="sidebar-icon" />
            <span className="title">Master</span>
            <div className="dropdownIcon">
              {isMasterOpen ? <FiChevronDown size={20} /> : <FiChevronRight size={20} />}
            </div>




          </li>
        </ul>
      </div>

      {isMasterOpen && (
        <div
          className="dropdown-container"
          style={{
            position: "absolute",
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            background: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
        >
          <ul className="dropdown-list">
            {subMasters.map((item) => (
              <li
                key={item.key}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  setIsMasterOpen(false);
                  onSelect(item.key); // navigate with the key
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>

        </div>
      )}
    </>
  );
}