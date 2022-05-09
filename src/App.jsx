import { React, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import "./styles/app.css";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.value);
  const [darkLight, setDarkLight] = useState(true);

  useEffect(() => {
    theme ? setDarkLight(true) : setDarkLight(false);
  }, [theme]);

  return (
    <main className={darkLight ? "App" : "App dark"}>
      <section className="App__profile">
        <ProfileCard />
      </section>
      <section className="App__content">
        <Navbar />
        <Outlet />
      </section>
    </main>
  );
}

export default App;
