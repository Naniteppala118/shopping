import React, { useState } from 'react';
import './BrowseFileWidget.css';

const BrowseFileWidget = ({ label, onFileChange,required = false, }) => {
  const [file, setFile] = useState(null);
  

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
    onFileChange && onFileChange(selectedFile);
  };

  return (
    <div className="browse-file-container">
      {label && <label className="browse-label" >{label}{required && <span className="required-asterisk"> *</span>}</label>}
      <div className="browse-card">
        <img
          src={'assets/chooseFile.svg'}
          alt="Preview"
          className="browse-img"
        />
        <h4 className='firstLine'>Choose a file or drag & drop it here</h4>
        <h4 className='secondLine'>JPEG, PNG, PDF formats, up to 5MB</h4>
        <label className="browse-button">
          Browse File
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            hidden
          />
        </label>
      </div>
    </div>
  );
};

export default BrowseFileWidget;
