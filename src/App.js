
import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <div className="site-wrapper">
        <Header />
        <main className="main-content">
           <Navbar />
          <section className="site-content">
          <Outlet/>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
