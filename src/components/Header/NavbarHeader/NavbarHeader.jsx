import Search from "../../Search/Search";
import NavigationButton from "../../../assets/buttons/NavigationButton/NavigationButton";
import style from "./NavbarHeader.module.scss";
import { ReactComponent as FriendsIcon } from "../../../assets/icons/Friends-icon.svg";
import { ReactComponent as HomeIcon } from "../../../assets/icons/Home-icon.svg";
import { ReactComponent as MessageIcon } from "../../../assets/icons/Message-icon.svg";
import { ReactComponent as NotificationIcon } from "../../../assets/icons/Notification.svg";
import Profileheader from "./ProfileHeader/ProfileHeader";
import { NavLink } from "react-router-dom";
import {
  HOME_ROUTE,
  MESSEGES_ROUTE,
  USERS_PAGE_ROUTE,
} from "../../../utils/consts";
import { useSelector } from "react-redux";


const NavbarHeader = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);


  const activeLink = ({ isActive }) => (isActive ? style.active : style.item);
  return (
    <nav className={style.items}>
      <NavLink to={HOME_ROUTE} className={activeLink} tabIndex={1}>
        <NavigationButton icon={HomeIcon} />
      </NavLink>

      <NavLink to={USERS_PAGE_ROUTE} className={activeLink} tabIndex={2}>
        <NavigationButton icon={FriendsIcon} />
      </NavLink>

      <NavLink to={MESSEGES_ROUTE} className={activeLink} tabIndex={3}>
        <NavigationButton icon={MessageIcon} />
      </NavLink>

      <Search />

      <NavLink to={"notification"} className={activeLink} tabIndex={4}>
        <NavigationButton icon={NotificationIcon} />
      </NavLink>

      {isAuth ? (
        <Profileheader name="Den4ik" tabIndex={5} />
      ) : (
        <>
          {" "}
          <div className={style.authButton}>
            <NavLink to="/login" className={style.link}>Sign in</NavLink>
            <span> / </span>
        <NavLink to="/registration" className={style.link}>Sign up</NavLink>
   
     
    </div>
        </>
      )}
    </nav>
  );
};

export default NavbarHeader;
