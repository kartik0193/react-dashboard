import React from 'react';
import { useState } from "react";
import OrderStatus from "./OrderStatus";
import ActivityLog from './ActivityLog';
import Revenue from './Revenue';
import TradStats from './TradStats';

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
      <TradStats />
      <div className='flex flex-col lg:flex-row dashboard_LayoutMobile'>
        <OrderStatus />
        <ActivityLog />
      </div>
      <div className='flex dashboard_LayoutMobile'>
        <Revenue />
      </div>
    </>
  );
}

export default Dashboard
