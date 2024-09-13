
import React, { useState, useEffect } from "react";
import "./theme/Theme.css";
import "./App.css"
import "react-toastify/dist/ReactToastify.css";
import IconButton from "./components/IconButton/IconButton.jsx";
import Home from "./pages/home/Home.jsx";
import sun from "./assets/icons/sun.png";
import moon from "./assets/icons/moon.png";
import switchTheme, { LIGHT, DARK, L_S_NAME } from "./theme/theme.js";
import { ToastContainer } from "react-toastify";

// caregar o ultimo tema salvo no navegador
const lastTheme = localStorage.getItem(L_S_NAME);
switchTheme(lastTheme);

if (process.env.REACT_APP_ENV === "development") {
  // Inicia o MSW apenas no ambiente de desenvolvimento 
  import("./mocks/browser.js").then(({ worker }) => {
    worker.start();
  });
}

const App = () => {
  const [theme, setTheme] = useState(lastTheme || LIGHT);

  const handleTheme = () => setTheme(theme === LIGHT ? DARK : LIGHT);

  useEffect(() => switchTheme(theme), [theme]);

  return (
    <>
      <div className="container-theme-controller">
        <IconButton
          icon={theme === LIGHT ? moon : sun}
          _function={handleTheme}
        />
      </div>
      <Home />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme.toLocaleLowerCase()}
      />
    </>
  )
}

export default App;