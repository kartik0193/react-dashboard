import React from 'react';
import { useState } from "react";
import OrderStatus from "./OrderStatus";
import ActivityLog from './ActivityLog';
import Revenue from './Revenue';

const tabs = [
  "Dashboard",
  "Orders",
  "Address",
  "Notes",
  "Tasks",
  "Contacts",
  "Credit History",
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <>
      <div className="flex space-x-2 tabsActions  rounded-md">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-normal	rounded-t-lg
            ${activeTab === tab
                ? "activeTab bg-white "
                : "text-gray-700 "
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='flex'>
        <OrderStatus />
        <ActivityLog/>
      </div>
      <div className='flex'>
        <Revenue/>
      </div>
    </>
  );
}

export default Dashboard
