import React from 'react';
import './sidebar-navigation.css';

const SidebarNavigation = () => {
    return(
        <header id="sideNav" 
            style={{
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 3,
            }}>
            <div style={{
                    height: "100%",
                    width: "300px",
                    backgroundColor: "black",
                    color: "white"
                }}>
                <a className="sidenavbar-logo"
                    href="#">Logo Here</a>
                <ul className="sidenavbar">
                   <li className="sidenavbar-item">
                       <a className="sidenavbar-link" href="#">Sidebar Link 1</a>
                    </li>
                    <li className="sidenavbar-item">
                       <a className="sidenavbar-link" href="#">Sidebar Link 2</a>
                    </li>
                    <li className="sidenavbar-item">
                       <a className="sidenavbar-link" href="#">Sidebar Link 3</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default SidebarNavigation;