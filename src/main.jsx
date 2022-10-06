import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Sobre from "./components/Sobre";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import { Provider } from "react-redux";
import { stores } from "./features/store/storeConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={stores}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Proyectos />} />
            <Route path='sobre-mi' element={<Sobre />} />
            <Route path='contacto' element={<Contacto />} />
            <Route path='proyectos' element={<Proyectos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
