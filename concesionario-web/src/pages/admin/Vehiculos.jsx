import React, {useEffect, useState} from 'react';

//realizar un formulario que pida edad y muestre un mensaje
//mostrar si es mayor o menor

const Vehiculos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textBoton, setTextBoton] = useState('crear nuevo vehiculo')

    useEffect(()=>{
        if(mostrarTabla){
            setTextBoton('crear nuevo vehiculo');

        }else {
            setTextBoton('mostrar todos los vehiculos')
        }
    }, [mostrarTabla]);
    return (
        <div className='flex h-full w-full flex-col items-center justify-start p-8'>
            <div className='flex flex-col'>
                <h2 className='text-3xl font-extrabold text-gray-900'>pagina de administracion de vehiculos</h2>
                <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className='text-white bg-indigo-500 p-5' type='button' >{textBoton}</button>
                {mostrarTabla ? <TablaVehiculos /> : <FormularioVehiculos />}
            </div>
            
        </div>

    );
    
};

const TablaVehiculos = () => {
    return <div> esto es un div pero deberia ser una tabla mostrando los vehiculos</div>
}
const FormularioVehiculos = () => {
    return <div>
        <h2 className='text-2xl font-extrabold text-gray-800'>crear nuevo vehiculo</h2>
        <form className='grid grid-cols-2'>
            <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
            <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
            <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
            <button className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-100 text-white'>Guardar vehiculo</button>
        </form>
    </div>;
}

export default Vehiculos
