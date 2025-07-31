import React from 'react';

const StatusToggle = ({ isActive, onToggle }) => {
  return (
    <label className="inline-flex relative items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isActive}
        onChange={(e) => onToggle(e.target.checked)}
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-600 transition-colors duration-200"></div>
      <div
        className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
          isActive ? 'translate-x-5' : ''
        }`}
      />
    </label>
  );
};

export default StatusToggle;
