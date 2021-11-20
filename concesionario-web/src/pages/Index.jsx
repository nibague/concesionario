import { useDarkMode } from 'context/DarkMode';
import React from 'react';

const Index = () => {
    const { darkMode } = useDarkMode();
    return (
        <div className={`flex h-full bg-gray-${ darkMode ? '900' : '50'}`}>
            contenido landing concesionario
        </div>
    );
};

export default Index
