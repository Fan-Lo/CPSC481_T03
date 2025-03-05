import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import RefundTicket from "./pages/Refund/RefundQR";
import RefundTicketInfo from "./pages/Refund/RefundQRInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/refund" element={<RefundTicket />} />
        <Route path="/refund/info" element={<RefundTicketInfo />} />
      </Routes>
    </div>
  );
}

export default App;
