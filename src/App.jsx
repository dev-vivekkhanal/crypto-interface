import Header from "./components/global/Header";
import CryptoPage from "./pages/CryptoPage";
import HomePage from "./pages/HomePage";
// routing
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="font-poppins cursor-default text-[#161616]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="crypto/:crypto_id" element={<CryptoPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
