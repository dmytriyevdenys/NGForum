import Messages from "../pages/Messages";
import Profile from "../pages/Profile";
import PostPage from "../pages/PostPage";
import UsersPage from "../pages/UsersPage";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import { ErrorPage } from "../pages/ErrorPage";
import {
  PROFILE_ROUTE,
  MESSEGES_ROUTE,
  POST_PAGE_ROUTE,
  USERS_PAGE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  CREATE_POST_ROURE,
} from "../utils/consts";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CreatePost } from "../components/CreatePost/CreatePost";

const routes = [
  {
    path: "/",
    element:  <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: HOME_ROUTE,
        element: <Home />,
      },
        {
          path: "/",
          element: <Home/>
        },
      {
        path: PROFILE_ROUTE,
        element:  <Profile />,
      },
      {
        path: MESSEGES_ROUTE,
        element:  <Messages /> 
      },
      {
        path: POST_PAGE_ROUTE,
        element: <PostPage />,
      },
      {
        path: USERS_PAGE_ROUTE,
        element:  <UsersPage /> 
      },
      {
        path: CREATE_POST_ROURE,
        element: <CreatePost/>
      }
    ],
  },  
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth />,
  },  
];

export const router = createBrowserRouter(routes);
