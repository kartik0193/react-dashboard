// 📌 Dashboard.js
import React from 'react';

import HeaderComp from './Header';
import { Outlet } from 'react-router-dom';
import SideBar from './Sidebar';
import './index.css';
const Layout = () => {

    return (

        <div className="flex flex-col">
            <HeaderComp />
            <div className="flex dashboardBody flex-col lg:flex-row flex-1">
                <aside className=" sideBarBox">
                    <SideBar />
                </aside>
                <main className="flex-1 mainContentBox border_gray">
                    <Outlet />
                </main>
            </div>
        </div>


    );
};

export default Layout;
