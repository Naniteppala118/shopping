import React, { useRef, useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import './ProfilePictureUploader.css';

const ProfilePictureUploader = ({ size = 120 }) => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className="profile-picture-uploader"
      style={{ width: size, height: size }}
      onClick={handleClick}
    >
      {image ? (
        <img src={image} alt="Profile" className="profile-image" />
      ) : (
        <div className="placeholder" />
      )}
      <div className="camera-icon">
        <FiCamera size={16} />
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ProfilePictureUploader;
