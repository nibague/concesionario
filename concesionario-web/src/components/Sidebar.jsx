import React from 'react'
import ImagenLogo from './ImagenLogo';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className='w-72 border bg-gray-300 h-full flex flex-col p-4'>
            <Link to='/admin'>
                <ImagenLogo />
            </Link>
            <div className='my-4'>
                <Ruta icono='fas fa-user' ruta='/admin/perfil' nombre='perfil'/>
                <Ruta icono='fas fa-car' ruta='/admin/vehiculos' nombre='vehiculos'/>
                <Ruta icono='fas fa-cash-register' ruta='/admin/ventas' nombre='ventas'/>
                <Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='usuarios'/>
            </div>
            <button>Log out</button>
        </nav>
    )
};

const Ruta = ({icono, ruta, nombre}) => {
    return (
        <Link to={ruta}>
            <button className='my-1 text-lg pl-7 p-2 bg-indigo-400 hover:bg-indigo-800 flex items-start w-full text-white rounded-md'>
                <i className={`${icono} w-10`}/>
                {nombre}
            </button>
        </Link>
    );
};

export default Sidebar
