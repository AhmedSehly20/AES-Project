import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AESPage from "./pages/AESPage";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aes" element={<AESPage />} />
        <Route path="/calculators" element={<h2>Online Calculators</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
