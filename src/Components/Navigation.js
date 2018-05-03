import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => <nav className="main-nav">
    <ul>
        <li>
            <NavLink to='/fishes'>Fishes</NavLink>
        </li>
        <li>
            <NavLink to='/cats'>Cats</NavLink>
        </li>
        <li>
            <NavLink to='/catfishes'>Catfishes</NavLink>
        </li>
    </ul>
</nav>

export default Navigation;
