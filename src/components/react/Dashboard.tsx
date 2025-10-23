import React, { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Articles");

  const tabs = ["Articles", "Media", "Pages", "Users", "Comments"];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "bg-orange-100 text-orange-700 hover:bg-orange-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 border border-orange-100 rounded-xl bg-orange-50">
        <h2 className="text-xl font-semibold text-orange-700 mb-3">
          {activeTab} Management
        </h2>
        <p className="text-gray-700">
          You are now viewing the <strong>{activeTab}</strong> section of your dashboard.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
