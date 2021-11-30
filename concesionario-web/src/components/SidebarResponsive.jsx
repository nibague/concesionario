import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

const SidebarResponsive = () => {
    const [mostrarNavegacion, setMostrarNavegacion] = useState(false);

    return (
        <div className='md:hidden' 
        onClick={() => {
            setMostrarNavegacion(!mostrarNavegacion)
        }}>
            <FontAwesomeIcon className='mx-4 hover:text-yellow-600' icon={mostrarNavegacion ? solid('times') : solid('bars')} />
            {mostrarNavegacion && (
                <ul className='bg-gray-900'>
                    <ResponsiveRoute nombre='Vehiculos' ruta='/admin/vehiculos' />
                    <ResponsiveRoute nombre='Ventas' ruta='/admin/ventas' />
                    <ResponsiveRoute nombre='Usuarios' ruta='/admin/usuarios' />
                 
                </ul>
            )}
        </div>
    )
}

const ResponsiveRoute = ({ruta, nombre }) => {
    return (
        <Link to={ruta}>
            <li className='text-gray-200 border border-gray-300 p-1 hover:bg-indigo-600'>{nombre}</li>
        </Link>
    );
};


export default SidebarResponsive
