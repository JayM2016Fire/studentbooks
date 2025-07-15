import { useState } from "react";
import HomePage from "./pages/HomePage";
import AuthModal from "./components/AuthModal";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setShowModal(true);
  };

  const handleSubmit = ({ email, password, mode }) => {
    console.log("Auth submit:", { email, password, mode });
    // Replace with actual API call later
    setShowModal(false);
  };

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">📘 StudentBooks</h1>
          <div className="space-x-2">
            <button
              onClick={() => navigate("/vip")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded font-semibold shadow hover:opacity-90">
              Become VIP
            </button>
            <button
              onClick={() => handleAuthClick("login")}
              className="px-4 py-1 text-sm border rounded hover:bg-gray-100"
            >
              Login
            </button>
            <button
              onClick={() => handleAuthClick("register")}
              className="px-4 py-1 text-sm border rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <HomePage />
      </main>

      {showModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default App;
