import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/signUp">Sign Up</Link>
            </li>
            <li>
                <Link to="/signOut">Sign Out</Link>
            </li>
        </ul>
    );
}