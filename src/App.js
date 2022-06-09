import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./Global/ScrollBar.css";
import NormalizeStyle from "./Global/NormalizeStyle";
import Loader from "./components/PageLoader/Loader";
import Header from "./components/Shared/Header";
import Home from "./components/Home/Home";

function App() {
  const location = useLocation();
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 2500);
  }, []);
  return (
    <div className="App bg-[#0A192F]">
      {!loading && <Header />}
      <NormalizeStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={loading ? <Loader /> : <Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
