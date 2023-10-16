import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css'
const NavigationMenu = ({ menuItems }) => {
    const location = useLocation();

    return (
        <div className="sections">
            {menuItems.map((menuItem) => (
                <NavLink
                    key={menuItem.path}
                    to={menuItem.path}
                    label={menuItem.label}
                    currentPath={location.pathname}
                />
            ))}
        </div>
    );
};

const NavLink = ({ to, label, currentPath }) => {
    const isActive = to === currentPath;

    return (
        <Link to={to} className={isActive ? `${label.toLowerCase()} active` : label.toLowerCase()}>
            {label}
        </Link>
    );
};

export default NavigationMenu;
