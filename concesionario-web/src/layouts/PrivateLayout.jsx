import React from 'react'
import Sidebar from 'components/Sidebar'
import SidebarResponsive from 'components/SidebarResponsive';


const PrivateLayout = ({ children }) =>  {
    return (
        // se utiliza flex-col para que el contenido quede abajo de la hamburguer
        // luego se agrega md-flex row para que el contenido no se muestre abajo del sidebar 
        <div className='flex flex-col md:flex-row w-screen h-screen'>
            <Sidebar />
            <SidebarResponsive />
            <main className='flex w-full bg-white-400 overflow-y-scroll items-center justify-center'>{children}</main>
        </div>
    )
};

export default PrivateLayout
