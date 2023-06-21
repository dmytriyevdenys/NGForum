
import style from "./Header.module.scss";
import NavbarHeader from "./NavbarHeader/NavbarHeader";

const Header = () => {
  return <>
    <header className={style.header}>
      NGForum 
          <NavbarHeader/>
    </header>
  </>;
};

export default Header;
