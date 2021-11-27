import React from 'react'
import ImagenLogo from './ImagenLogo';
import { Link } from 'react-router-dom';
import '../styles/responsive-test.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { fas, fa } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <nav className='w-72 border bg-gray-300 h-full flex flex-col p-4 sidebar'>
            <Link to='/admin'>
                <ImagenLogo />
            </Link>
            <div className='my-4'>
                <Ruta icono={solid('user')} ruta='/admin/perfil' nombre='perfil'/>
                <Ruta icono={solid('car')} ruta='/admin/vehiculos' nombre='vehiculos'/>
                <Ruta icono={solid('cash-register')} ruta='/admin/ventas' nombre='ventas'/>
                <Ruta icono={solid('users')} ruta='/admin/usuarios' nombre='usuarios'/>
            </div>
            <button>Log out</button>
        </nav>
    )
};

const Ruta = ({icono, ruta, nombre}) => {
    return (
        <Link to={ruta}>
            <button className='my-1 text-lg pl-7 p-2 bg-indigo-400 hover:bg-indigo-800 flex items-center w-full text-white rounded-md'>
                {/* <i className={`${icono} w-10`}/> el profesor puso este tag para llamar a los iconos de fontawesome pero no funcionan si no se instalan las dependencias y el componente */}
                <FontAwesomeIcon className='mr-5' icon={icono} />
                {nombre}
            </button>
        </Link>
    );
};

export default Sidebar
