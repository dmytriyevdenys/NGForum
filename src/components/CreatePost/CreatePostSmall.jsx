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
        <div className={style.containerInput}>
          <NavLink to={CREATE_POST_ROURE} className={style.input}>
            <input type="text" placeholder="Let's share what's going on your mind..." className={style.input}/>
          </NavLink>
        </div>
        <div >
          <input type="button" value="Create Post" className={style.button} />
        </div>
    </div>
  );
};
