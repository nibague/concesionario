import { nanoid } from 'nanoid';
import React, {useEffect, useState, useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [textBoton, setTextBoton] = useState('crear nuevo vehiculo');
    const [colorBoton, setColorBoton] = useState('indigo');
    

    useEffect(()=>{
        //obtener lista de vehiculos desde el frontend
        setVehiculos(vehiculosBackend); 

    }, [])

    useEffect(()=>{
        if(mostrarTabla){
            setTextBoton('crear nuevo vehiculo');
            setColorBoton('indigo')

        }else {
            setTextBoton('mostrar vehiculos')
            setColorBoton('red')
        }
    }, [mostrarTabla]);
    return (
        <div className='flex flex-col h-full w-full items-center justify-start p-8'>
            <div className='flex flex-col'> 
            {/* cambiar a w-full para que la tabla ocupe toda la pantalla */}
                <h2 className='text-3xl font-extrabold text-gray-900'>pagina de administracion de vehiculos</h2>
                <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className={`text-white bg-${colorBoton}-500 p-6 rounded-full m-6 w-25 self-end`} type='button' >{textBoton}</button>
                {mostrarTabla ? <TablaVehiculos listaVehiculos={vehiculos} /> : <FormularioVehiculos setMostrarTabla ={setMostrarTabla} setVehiculos={setVehiculos} listaVehiculos={vehiculos} />}
                <ToastContainer position='bottom-center' autoClose={5000}/>
            </div>
        </div>

    );
    
};

const TablaVehiculos = ({ listaVehiculos }) => {
    useEffect(() => {
        console.log('este es el estado de vehiculos en el componente de tabla', listaVehiculos);

    }, [listaVehiculos])
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <h2 className='text-2xl font-extrabold text-gray-800 mb-10'>Todos los vehiculos</h2>
            <table className='tabla w-full'>
                <thead className='bg-gray-200'>
                    <tr>
                        <th className='pr-20'>Vehicle Name</th>
                        <th className='pr-20'>Vehicle Brand</th>
                        <th className='pr-20'>Vehicle Model</th>
                    </tr>
                </thead>
                <tbody>
                    {listaVehiculos.map((vehiculo)=>{
                        return (
                            <tr key={nanoid()} className='border border-black-300'>    
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
const FormularioVehiculos = ({ setMostrarTabla, listaVehiculos, setVehiculos }) => {
    const form = useRef(null);

    const submitForm = (e) =>{
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoVehiculo = {};
        fd.forEach((value, key) => {
            nuevoVehiculo[key] = value;
        });
        setMostrarTabla(true)
        setVehiculos([...listaVehiculos, nuevoVehiculo]);
        //identificar el caso de exito y mostrar el toast de exito
        toast.success('vehiculo agregado con exito');
        //identificar el caso de error y mostrar el toast de error
        //toast.error('vehiculo agregado con exito');


    };

    return (
    <div className=''>
        <h2 className='text-2xl font-extrabold text-gray-800 mb-5'>crear nuevo vehiculo</h2>
        <form ref={form} onSubmit={submitForm} className='flex flex-col'>
            <label className='flex flex-col' htmlFor='nombre'>
                Nombre del vehiculo
                <input 
                    name='nombre' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
                    type="text"
                    placeholder='corolla'
                    required />
            </label>
            <label className='flex flex-col' htmlFor='marca'>
                Marca del vehiculo
                <select className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' name='marca' defaultValue={0} required>
                    <option disabled value={0}>Seleccione una ocpion</option>
                    <option>ford</option>
                    <option>renault</option>
                    <option>toyota</option>
                    <option>Mazda</option>
                    <option>chevrolet</option>
                </select>
            </label>
            <label className='flex flex-col' htmlFor='modelo'>
                Nombre del vehiculo
                <input 
                    name='modelo' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
                    type="number" 
                    min={1992} 
                    max={2022} 
                    placeholder='2014'
                    required />
            </label>

            <button 
                type='submit' 
                className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-100 text-white'>
                Guardar vehiculo
            </button>
        </form>
    </div>
    );
}

export default Vehiculos
