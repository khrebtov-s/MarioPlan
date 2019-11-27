import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLInks from './signed-in-links';
import SignedOutLinks from './signed-out-links';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">MarioPlan</Link>
                <SignedInLInks />
                <SignedOutLinks />
            </div>
        </nav>
    );
}

export default Navbar;