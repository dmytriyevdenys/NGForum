import React, { useState, useRef, useEffect } from "react";
import s from "./ProfileHeader.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../../../redux/authSlice";
import defaultAva from "../../../../assets/images/avatarDefoult.png"
import iconLogaut from "../../../../assets/icons/logautIcon.png"
import { NavLink } from "react-router-dom";
import { PROFILE_ROUTE } from './../../../../utils/consts';

const ProfileHeader = () => {
  const dispatch = useDispatch()
  const userName = useSelector(state => state.auth.authUser.username);
  const userAvatar = useSelector(state => state.auth.authUser.avatar)

  const [isOpen, setIsOpen] = useState(false);
  const profileInfoRef = useRef(null);
  const dropdownRef = useRef(null);



  const toggleDropdown = () => {
    setIsOpen(prevOpen => !prevOpen);
  };

  const handleLogout = () => {
    dispatch(Logout())
  };

  const handleClickOutside = (event) => {
    if (
      profileInfoRef.current &&
      !profileInfoRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={s.profileContainer}>
      <div className={s.profileInfo} onClick={toggleDropdown} ref={profileInfoRef}>
       <img src={defaultAva} alt='' className={s.profileImg}/>
        <span className={s.profileName}>{userName}</span>
      </div>
      {isOpen && (
        <ul className={s.dropdownContent} ref={dropdownRef}>

          <li>
            <NavLink to={PROFILE_ROUTE}>
            <button onClick={toggleDropdown}>Мій профіль</button>  
            </NavLink>
           
          </li>
      
          <li>
            <button>Налаштування</button>
          </li>
          <li>
            <button >Змінити тему</button>
          </li>
          <li>
            <button onClick={handleLogout}> Вийти з профілю</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileHeader;
