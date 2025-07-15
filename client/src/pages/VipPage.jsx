import { useNavigate } from "react-router-dom";

export default function VipPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <button
          onClick={() => navigate("/")}
          className="mb-8 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 float-left"
        >
          ← Back to Home
        </button>
        <div className="clear-both"></div>
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Choose Your Perfect Plan</h1>
        <p className="text-gray-600 mb-12">
          Get access to exclusive textbook downloads and premium features.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* VIP ALL ACCESS */}
          <div className="bg-white rounded-xl border shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">VIP All Access</h2>
            <p className="text-gray-500 mb-4">Monthly Premium Access</p>
            <div className="text-3xl font-bold mb-4">$10.00</div>
            <ul className="text-left space-y-2 text-sm text-gray-600 flex-1">
              <li>✔️ Unlimited downloads</li>
              <li>✔️ Early access to new textbooks</li>
              <li>✔️ Ad-free experience</li>
              <li>✔️ Priority support</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Get VIP Access
            </button>
          </div>
          {/* ANNUAL PREMIUM */}
          <div className="bg-yellow-50 rounded-xl border-2 border-yellow-400 shadow p-6 flex flex-col relative">
            <span className="absolute top-0 right-0 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-bl">
              Most Popular
            </span>
            <h2 className="text-xl font-semibold mb-2">Annual Premium</h2>
            <p className="text-gray-500 mb-4">Billed annually ($60/year)</p>
            <div className="text-3xl font-bold mb-4">$5.00/mo</div>
            <ul className="text-left space-y-2 text-sm text-gray-600 flex-1">
              <li>✔️ All VIP features included</li>
              <li>✔️ 50% savings</li>
              <li>✔️ Exclusive badge</li>
              <li>✔️ Premium Discord access</li>
            </ul>
            <button className="mt-6 bg-yellow-400 text-white py-2 rounded hover:bg-yellow-500">
              Get Annual Plan
            </button>
          </div>
          {/* FREE ACCESS */}
          <div className="bg-white rounded-xl border shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Free Access</h2>
            <p className="text-gray-500 mb-4">Basic Features</p>
            <div className="text-3xl font-bold mb-4">$0.00</div>
            <ul className="text-left space-y-2 text-sm text-gray-600 flex-1">
              <li>✔️ Free browsing</li>
              <li>❌ No downloads</li>
              <li>❌ Limited search</li>
              <li>❌ Ads included</li>
            </ul>
            <button className="mt-6 bg-gray-200 text-gray-600 py-2 rounded cursor-not-allowed">
              Current Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
  