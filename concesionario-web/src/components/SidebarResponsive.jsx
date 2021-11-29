import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const SidebarResponsive = () => {
    const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
    let solids = 'solid()';

    return (
        <div className='md:hidden' 
        onClick={() => {
            setMostrarNavegacion(!mostrarNavegacion)
        }}>
            <FontAwesomeIcon className='hover:text-yellow-600' icon={mostrarNavegacion ? solid('times') : solid('bars')} />
        </div>
    )
}


export default SidebarResponsive
