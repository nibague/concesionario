import React from 'react'
import { Link } from 'react-router-dom'; 
import TriggerDarkMode from './TriggerDarkMode';

const Navbar = () => {
    
    return (
        <nav className='bg-gray-400'>
            <ul className='flex w-full justify-between my-3'>
                <li>logo</li>
                <li>nav1</li>
                <li>nav2</li>
                <li>nav3</li>
                <li>
                    <TriggerDarkMode />
                </li>
                <li className='px-3'>
                    <Link to='/login'>
                    <button className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
                        Iniciar sesion
                    </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar
