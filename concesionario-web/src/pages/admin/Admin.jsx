import React from 'react'
import { useDarkMode } from '../../context/DarkMode';

const Admin = () => {
    const {darkMode} = useDarkMode();
    return (
        <div className={`flex h-full w-full bg-gray-${ darkMode ? '900' : '50'}`}>
            Admin panel
        </div>
    )
}

export default Admin
