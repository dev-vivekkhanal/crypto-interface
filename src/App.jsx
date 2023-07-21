// routing
import { Routes, Route, Navigate } from "react-router-dom";
// components and pages
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import CryptoPage from "./pages/CryptoPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="font-poppins cursor-default text-[#2e2d2d] bg-[#F3F5F9] min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="crypto/:crypto_id" element={<CryptoPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
