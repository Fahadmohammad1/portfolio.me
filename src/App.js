import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./Global/ScrollBar.css";
import NormalizeStyle from "./Global/NormalizeStyle";
import Loader from "./components/PageLoader/Loader";
import Header from "./components/Shared/Header";
import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";
import Blog from "./components/Blog/Blog";
import NotFound from "./components/Shared/NotFound";
import Projects from "./components/Home/Projects";

function App() {
  const location = useLocation();
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 2500);
  }, []);
  return (
    <div className="App bg-secondary font-serif">
      {!loading && <Header />}
      <NormalizeStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={loading ? <Loader /> : <Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/project/:id" element={<Projects />} />
        </Routes>
      </AnimatePresence>
      <ToastContainer />
    </div>
  );
}

export default App;
