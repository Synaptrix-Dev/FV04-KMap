import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PricingCard() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [cadastralInput, setCadastralInput] = useState("");

  const pricingPlans = [
    {
      id: "cadastral",
      title: "Cadastral package",
      price: "1 EUR",
      description: "Looking Bulletin Board ADS and Court Auctions for specific Cadastral numbers",
      features: ["Access to specific cadastral ads", "Court auction data for cadastral numbers"],
      buttonText: "Buy",
    },
    {
      id: "admin",
      title: "ADMINISTRATIVE UNIT",
      price: "5 EUR",
      description: "Looking Bulletin Board ADS and Court Auctions for specific ADMINISTRATIVE UNITS",
      features: ["Access to admin unit ads", "Court auction data for admin units"],
      buttonText: "Register",
    },
    {
      id: "region",
      title: "REGION package",
      price: "20 EUR",
      description: "Looking Bulletin Board ADS and Court Auctions for specific REGIONS",
      features: ["Access to region ads", "Court auction data for regions"],
      buttonText: "Register",
    },
    {
      id: "allSlovenia",
      title: "ALL Slovenia package",
      price: "50 EUR",
      description: "Looking Bulletin Board ADS and Court Auctions for ALL Slovenia",
      features: ["Access to all Slovenia ads", "Court auction data nationwide"],
      buttonText: "Register",
    },
  ];

  const handleBuyNow = (plan) => {
    if (plan.id === "cadastral" && plan.buttonText === "Buy") {
      setShowModal(true);
    } else {
      navigate("/checkout", { state: { selectedPlan: plan } });
    }
  };

  const handleModalSubmit = () => {
    console.log("Cadastral Input:", cadastralInput);
    setShowModal(false);
    setCadastralInput("");
    // Add further logic for submission if needed
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col text-center rounded-lg p-6 md:p-8 border border-slate-200 bg-white hover:shadow-lg"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              {plan.title}
            </h4>
            <div className="mb-6">
              <span className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-green-600 to-green-600">
                {plan.price}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              {plan.description}
            </p>
            <ul className="space-y-3 text-xs sm:text-sm flex-grow mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center gap-x-2">
                  <svg
                    className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleBuyNow(plan)}
              className="mt-auto py-2.5 sm:py-3 px-4 inline-flex justify-center items-center text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-emerald-700 hover:to-emerald-700"
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Enter Cadastral Number</h3>
            <input
              type="text"
              value={cadastralInput}
              onChange={(e) => setCadastralInput(e.target.value)}
              className="w-full mb-2 bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Enter cadastral number"
            />
            <button
              onClick={handleModalSubmit}
              className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-2 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}