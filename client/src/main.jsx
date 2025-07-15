import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import VipPage from "./pages/VipPage";
import DummyTextbookPage from "./pages/DummyTextbookPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/vip" element={<VipPage />} />
      <Route path="/dummy-textbook-page" element={<DummyTextbookPage />} />
    </Routes>
  </Router>
);
