import { useSelector } from "react-redux";
import style from "./CreatePostSmall.module.scss";
import { NavLink } from "react-router-dom";
import { CREATE_POST_ROURE } from "../../utils/consts";

export const CreatePostSmall = () => {
  const userAvatar = useSelector(state => state.auth.authUser.avatar)
  
  return (
    <div className={style.container}>
        <div>
        <img 
        src={userAvatar}
        alt="avatar"
      />
        </div>
      <div >
        <NavLink to={CREATE_POST_ROURE}>
        <input type="text" placeholder="Let's share what going on your mind..." className={style.input}/>
        </NavLink>
      </div>
      <div >
        <input type="button" value="Create Post"className={style.button} />
      </div>
    </div>
  );
};
