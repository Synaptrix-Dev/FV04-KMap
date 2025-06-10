import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PricingCard() {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      id: "basic",
      title: "Basic Package",
      price: { monthly: "Free", yearly: "Free" },
      description: "Forever free",
      features: [
        "Limited access to ads",
        "Access only basic information about ads",
        "Access to only basic search filters",
        "No access to the interactive map",
        "No access push notification of new listings",
        "1 advertisement per month",
      ],
      popular: false,
    },
    {
      id: "lands",
      title: "Lands Package",
      price: { monthly: "5€", yearly: "50€" },
      description: "All the basics for land listings",
      features: [
        "Unlimited access to all ads",
        "Use of advanced filters",
        "Access to the interactive map",
        "Access push notification of new listings",
        "5 advertisements per month",
      ],
      popular: false,
    },
    {
      id: "auctions",
      title: "Auctions Package",
      price: { monthly: "4€", yearly: "40€" },
      description: "Everything for land auctions",
      features: [
        "Unlimited access to all information about land auctions",
        "Access to use of advanced filters",
        "Access to the interactive map",
        "Access notifications of new auctions listings",
        "Limited number of auctions",
      ],
      popular: false,
    },
    {
      id: "combo",
      title: "Combo Package",
      price: { monthly: "70€", yearly: "70€" },
      description: "Advanced features for combined needs",
      features: [
        "Unlimited access to all information",
        "Access to use of advanced filters",
        "Access to the interactive map",
        "Access notifications of new auctions listings",
        "5 advertisement of lands per month",
      ],
      popular: false,
    },
  ];

  const handleBuyNow = (plan) => {
    navigate("/checkout", {
      state: { selectedPlan: plan },
    });
  };

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex justify-center mb-6">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isYearly}
            onChange={handleToggle}
            className="sr-only peer"
          />
          <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-600"></div>
          <span className="ml-4 text-sm font-medium text-gray-900">
            {isYearly ? "Yearly" : "Monthly"}
          </span>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col text-center rounded-lg p-6 md:p-8 border transition-all duration-300 ease-in-out 
              ${
                plan.popular
                  ? "border-2 border-green-500 bg-white hover:shadow-xl transform"
                  : "border-slate-200 bg-white hover:shadow-lg"
              }`}
          >
            {plan.popular && (
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-green-600 to-green-600 text-white">
                  Most Popular
                </span>
              </div>
            )}

            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              {plan.title}
            </h4>

            <div className="mb-6">
              <span className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-green-600 to-green-600">
                {isYearly ? plan.price.yearly : plan.price.monthly}
              </span>
              <p className="mt-2 text-xs sm:text-sm text-gray-500">
                {plan.description}
              </p>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm flex-grow mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center justify-center gap-x-2"
                >
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
              className={`mt-auto py-2.5 sm:py-3 px-4 inline-flex justify-center items-center text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 
                ${
                  plan.id === "lands"
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-emerald-700 hover:to-emerald-700"
                    : plan.popular
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-emerald-700 hover:to-emerald-700"
                    : "border border-gray-200 bg-white text-gray-800 hover:bg-gray-200"
                }`}
            >
              {plan.id === "lands" ? "Register" : "Buy now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}