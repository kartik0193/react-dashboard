import React, { useEffect, useState } from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';
import { Menu, MenuButton, MenuItem, MenuItems, } from '@headlessui/react'
import Logomark from '../../assets/Logomark.png';
import menuIcon from '../../assets/menuImg.png';
import './index.css';




const Header = () => {
    const [theme, setTheme] = useState('light_theme')

    const themeChange = () => {
        let themeName = theme == 'dark_theme' ? 'light_theme' : 'dark_theme'
        setTheme(themeName)
        localStorage.setItem("theme", themeName)
    }

    useEffect(() => {
        let themeValue = localStorage.getItem("theme");
        setTheme(themeValue)
        document.body.className = theme
    }, [theme])

    return (
        <header className="w-full flex headerBox items-center justify-between ">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-tr  text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                        <img src={Logomark} alt="logo" />
                    </div>
                    <span className="text-xl font-semibold text-gray-800">Quotient</span>
                </div>

                <button className="p-1 rounded-full menuIcon hover:bg-gray-100 border ">
                    <img src={menuIcon} alt="menuIcon" />
                </button>
            </div>

            <div className="flex-1 max-w-lg mx-6 ">
                <div className="flex items-center HeaderSearch_bar  px-3 py-1.5 ">
                    <Search className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full outline-none bg-transparent text-sm text-gray-700"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4 ">
                <button className="p-2 notification_bell flex items-center content-center rounded-full hover:bg-gray-100 border border-[rgba(14, 37, 60, 0.1)]">
                    <Bell />
                </button>

                <div className="flex items-center gap-2 profileBox">
                    <div className="bg-[rgba(81,60,206,1)] nameLogo  text-white rounded-full flex items-center justify-center font-semibold text-sm">
                        MS
                    </div>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <MenuButton className="flex items-center w-full shadow-none border-none">
                                <div className="text-sm text-left">
                                    <div className="font-medium userName">Manoj Sharma</div>
                                    <div className="font-normal userName">Super Admin</div>
                                </div>
                                <ChevronDown className="-mr-1 size-5 downArrow text-gray-400" />
                            </MenuButton>
                        </div>
                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 shadow-none border-none bg-white ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                            <div className="py-1">
                                <MenuItem>
                                    <a
                                        onClick={() => themeChange()}
                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                    >
                                        {theme}
                                    </a>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
