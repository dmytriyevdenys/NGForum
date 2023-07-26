import React, { useState, useCallback, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Login, SetNewAccount } from "../../redux/authSlice";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "./../../utils/consts";
import style from "./LoginForm.module.scss";

const AuthButtons = React.memo(({ handleFormToggle }) => {
  const activeLink = useCallback(
    ({ isActive }) => (isActive ? style.activeButton : style.authButton),
    []
  );

  return (
    <div className={style.authButtons}>
      <NavLink to={LOGIN_ROUTE} className={activeLink}>
        <div onClick={() => handleFormToggle(true)}>Увійти</div>
      </NavLink>

      <NavLink to={REGISTRATION_ROUTE} className={activeLink}>
        <div onClick={() => handleFormToggle(false)}>Зареєструватись</div>
      </NavLink>
    </div>
  );
});

export const LoginForm = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formType, setFormType] = useState(currentPath === "/login");

  const handleFormToggle = useCallback((isLoginForm) => {
    setFormType(isLoginForm);
  }, [setFormType]);

  const onSubmit = useCallback((data) => {
    const { username, password } = data;
    const { confirmPassword, ...formData } = data;

    formType && dispatch(Login({ username, password }));
    !formType && dispatch(SetNewAccount(formData))
    
  }, [dispatch, formType]);

  return (
    <div className={style.container}>
      {(formType) && (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <AuthButtons handleFormToggle={handleFormToggle} />
          <div className={style.formBlock}>
            <div className={style.input}>
              <input type="text" placeholder="Login" autoFocus ={true} {...register("username", {})} />
            </div>
            <div className={style.input}>
              <input type="password" placeholder="Password" {...register("password", { min: 8 })} />
            </div>
            <div className={style.checkbox}>
              <input
                type="checkbox"
                className={style.customCheckbox}
                id="rememberMe"
                {...register("rememberMe")}
              />
              <label htmlFor="rememberMe">Запам'ятати мене</label>
            </div>
            <input type="submit" className={style.button} value="Увійти" />
          </div>
        </form>
      )}
      {(!formType) && (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <AuthButtons handleFormToggle={handleFormToggle} />
          <div className={style.formBlock}>
            <div className={style.input}>
              <input type="text" placeholder="Username" autoFocus ={true} {...register("username", {})} />
            </div>
            <div className={style.input}>
              <input type="email" placeholder="Email" {...register("email", { required: true })} />
            </div>
            <div className={style.input}>
              <input type="password" placeholder="Password" {...register("password", { min: 8 })} />
            </div>
            <div className={style.input}>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", { min: 8 })}
              />
            </div>
            <div className={style.input}>
              <input type="text" placeholder="Description" {...register("discription", {})} />
            </div>
            <input type="submit" className={style.button} value="Зареєструватись" />
          </div>
        </form>
      )}
    </div>
  );
};


