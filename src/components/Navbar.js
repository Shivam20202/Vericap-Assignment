import React, { useState } from 'react';


function Navbar() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    function toggleSidebar() {
        setSidebarVisible(!isSidebarVisible);
    }

    return (
        <div>
            <nav>
                <ul className={`navbar ${isSidebarVisible ? 'visible' : ''}`}>
                    <li onClick={toggleSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg></a></li>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/Product">Product</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Settings">Settings</a></li>
                    <li><a href="/Login">Login</a></li>
                </ul>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li className="hideOnMobile"><a href="/">Profile</a></li>
                    <li className="hideOnMobile"><a href="/Product">Product</a></li>
                    <li className="hideOnMobile"><a href="/About">About</a></li>
                    <li className="hideOnMobile"><a href="/Settings">Settings</a></li>
                    <li className="hideOnMobile"><a href="/Login">Login</a></li>
                    <li className="menu-button" onClick={toggleSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;


