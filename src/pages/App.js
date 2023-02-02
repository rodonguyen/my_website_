import NavBar from "../components/NavBar";
import ContactMe from "./ContactMe";
import Project from "./Project";
import List100 from "./List100";
import Resume from "./Resume";
import Home from "./Home";
import NotFound from "./NotFound";
import "../stylesheets/App.css";

import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  let themeModeFromLS = localStorage.getItem("themeMode");
  const [themeMode, setThemeMode] = useState(themeModeFromLS || 'Light');

  useEffect(() => {
    if (themeMode === "Dark") {
      document.body.classList.add("dark");
      localStorage.setItem('themeMode', 'Dark')
    } else if (themeMode === "Light") {
      document.body.classList.remove("dark");
      localStorage.setItem('themeMode', 'Light')
    }
  }, [themeMode]);

  const AppConstantElements = (
    <div className="App">
      <NavBar themeMode={themeMode} setThemeMode={setThemeMode} />
      <Outlet />
    </div>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={AppConstantElements}>
            <Route path="contactme" element={<ContactMe />} />
            <Route path="projects" element={<Project />} />
            <Route path="resume" element={<Resume />} />
            <Route path="list-100" element={<List100 />} />
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
