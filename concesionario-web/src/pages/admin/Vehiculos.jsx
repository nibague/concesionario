import React, {useEffect, useState} from 'react';

//realizar un formulario que pida edad y muestre un mensaje
//mostrar si es mayor o menor

const vehiculosBackend = [
    {
        nombre:'corola',
        marca:'toyota',
        modelo:2014 
    },
    {
        nombre:'fiesta',
        marca:'ford',
        modelo:2020 
    },
    {
        nombre:'ranger',
        marca:'renault',
        modelo:2014 
    },  
    {
        nombre:'taurus',
        marca:'ferrari',
        modelo:2019 
    },
    {
        nombre:'montero',
        marca:'audi',
        modelo:2021 
    }
]

const Vehiculos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [vehiculos, setVehiculos] = useState([]);
    const [textBoton, setTextBoton] = useState('crear nuevo vehiculo')
    

    useEffect(()=>{
        //obtener lista de vehiculos desde el frontend
        setVehiculos(vehiculosBackend);

    }, [])

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
                <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className='text-white bg-indigo-500 p-6 rounded-full m-6 w-25 self-end' type='button' >{textBoton}</button>
                {mostrarTabla ? <TablaVehiculos listaVehiculos={vehiculos} /> : <FormularioVehiculos />}
            </div>
        </div>

    );
    
};

const TablaVehiculos = ({ listaVehiculos }) => {
    useEffect(() => {
        console.log('este es el estado de vehiculos en el componente de tabla', listaVehiculos);

    }, [listaVehiculos])
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehiculos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Vehicle Name</th>
                        <th>Vehicle Brand</th>
                        <th>Vehicle Model</th>
                    </tr>
                </thead>
                <tbody>
                    {listaVehiculos.map((vehiculo)=>{
                        return (
                            <tr>    
                                <td>{vehiculo.nombre}</td>
                                <td>{vehiculo.marca}</td>
                                <td>{vehiculo.modelo}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );

}
const FormularioVehiculos = () => {
    return (
    <div className='flex felx-col items-center justify-center'>
        <h2 className='text-2xl font-extrabold text-gray-800'>crear nuevo vehiculo</h2>
        <form className='grid grid-cols-2'>
            <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
            <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
            <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
            <button className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-100 text-white'>
                Guardar vehiculo
            </button>
        </form>
    </div>
    );
}

export default Vehiculos
