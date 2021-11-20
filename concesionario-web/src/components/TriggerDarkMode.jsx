import React from 'react'
import { useDarkMode } from 'context/DarkMode';


const TriggerDarkMode = () => {
    const { darkMode, setDarkMode } = useDarkMode();
    return (
        <button onClick={()=>{
            setDarkMode(!darkMode);
            }}>
            { darkMode ? 'desactivar' : 'activar'} modo Dark
        </button>
    )
}

export default TriggerDarkMode
