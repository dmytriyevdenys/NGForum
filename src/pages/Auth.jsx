
import { Navigate } from "react-router-dom";
import { LoginForm } from "../components/Forms/LoginForm";
import { useSelector } from 'react-redux';

const Auth = () => {
  const isAuth = useSelector (state => state.auth.isAuth)

  
if (isAuth) return <Navigate to={'/'} replace /> ;
  return (
    <>
      <LoginForm />
    </>


  );
};

export default Auth;
