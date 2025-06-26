/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.module.css";

const ProfileMenu = ({
  onProfileClick,
  onLogoutClick,
  profileData,
  onProfileBtn,
}) => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleMouseLeave = () => {
    setClosing(true);
    setTimeout(() => {
      if (closing) {
        setShowProfileOptions(false);
        setClosing(false);
      }
    }, 1000);
  };

  const handleButtonClick = (handler) => {
    setClosing(false);
    setShowProfileOptions(false);
    handler();
  };

  return (
    <div
      className={styles.profile_container}
      onMouseEnter={() => setShowProfileOptions(true)}
      onMouseLeave={handleMouseLeave}
    >
      {profileData?.photoURL && !onProfileBtn && (
        <Link to="/profile">
          <img
          width="50px"
          height="50px"
          src={profileData.photoURL}
          alt="Profile"
          className={styles.profile_image}
        />
        </Link>
        
      )}
      {showProfileOptions && (
        <div className={styles.profile_options}>
          <button
            className={styles.profile_button}
            onClick={() => handleButtonClick(onProfileClick)}
          >
            Profile
          </button>
          <button
            className={styles.profile_button}
            onClick={() => handleButtonClick(onLogoutClick)}
          >
            Déconnexion
          </button>
        </div>
      )}
    </div>
  );
};
export default ProfileMenu;
