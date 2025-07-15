import { Link, useLocation } from "react-router-dom";
import megaLogo from "../assets/mega.png";

export default function DummyTextbookPage() {
  const location = useLocation();
  // Default to 'Unknown File' and mega.nz if not provided
  const fileName = location.state?.fileName || "Unknown File";
  const megaLink = location.state?.megaLink || "https://mega.nz";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Download: {fileName}</h1>
      <p className="mb-8 text-gray-600 max-w-xl text-center">
        To access <span className="font-semibold">{fileName}</span>, click the button below. You will be redirected to complete a few quick surveys, after which you will receive the MEGA download link for your file.
      </p>
      <a
        href={megaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-red-700 transition mb-8"
      >
        <img src={megaLogo} alt="MEGA" className="w-7 h-7" />
        Get MEGA Link
      </a>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Back to Home</Link>
    </div>
  );
} 