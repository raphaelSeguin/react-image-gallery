import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => <nav className="main-nav">
    <ul>
        <li>
            <NavLink to='/presets/cats'>Cats</NavLink>
        </li>
        <li>
            <NavLink to='/presets/fishes'>Fishes</NavLink>
        </li>
        <li>
            <NavLink to='/presets/catfishes'>Catfishes</NavLink>
        </li>
        <li>
            <NavLink to='/search/'>Search</NavLink>
        </li>
    </ul>
</nav>

export default Navigation;
