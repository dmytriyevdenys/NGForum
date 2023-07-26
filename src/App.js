import { Outlet, useLocation } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { PROFILE_ROUTE } from "./utils/consts";
import Profile from "./pages/Profile";

function App() {
  const location = useLocation();
  const profileLocation = location.pathname === PROFILE_ROUTE;
  return (
    <>
      <div className="site-wrapper">
        <Header />
        <main className="main-content">
          {profileLocation ? (
            <Profile />
          ) : (
            <>
              <Navbar />
              <section className="site-content">
                <Outlet />
              </section>
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
