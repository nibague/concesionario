import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import React, {useEffect, useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
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
        <div className='flex flex-col h-full w-auto items-center p-8'>
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

    const form = useRef(null);

    const [busqueda, setBusqueda] = useState('');
    const [vehiculosFiltrados, setVehiculosFiltrados] = useState(listaVehiculos);

    useEffect(() => {
        console.log('busqueda', busqueda);
        console.log('lista original', listaVehiculos);
        setVehiculosFiltrados(
            listaVehiculos.filter((elemento) => {
                    console.log('elemento', elemento);
                    return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
        );
    }, [busqueda, listaVehiculos]);
    

    useEffect(() => {
        console.log('este es el estado de vehiculos en el componente de tabla', listaVehiculos);

    }, [listaVehiculos])

    return ( 
        <div className='flex flex-col'>
        <input 
            value = {busqueda}
            onChange={e=>setBusqueda(e.target.value)}
            placeholder='Buscar'
            className='border border-gray-700 p-3 py-1 self-center mt-10 rounded-md focus:outline-none focus:border-indigo-500 '
            
        />

            <h2 className='text-2xl font-extrabold text-gray-800 mb-5 mt-5 self-center'>Todos los vehiculos</h2>
                <table className='tabla'>
                    <thead className='bg-gray-200'>
                        <tr>
                            <th className='pr-20'>Vehicle Name</th>
                            <th className='pr-20'>Vehicle Brand</th>
                            <th className='pr-20'>Vehicle Model</th>
                            <th className='pr-20'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehiculosFiltrados.map((vehiculo)=>{
                            return <FilaVehiculo key={nanoid()} vehiculo={vehiculo}/>;
                            
                        })}
                    </tbody>
                </table>
        </div>
    );

}

const FilaVehiculo = ( {vehiculo} ) => {
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const [infoNuevoVehiculo, setInfoNuevoVehiculo] = useState({
        nombre: vehiculo.nombre,
        marca: vehiculo.marca,
        modelo: vehiculo.modelo
    });

    const actualizarVehiculo = () => {
        console.log(infoNuevoVehiculo);
        setEdit(false)
        //enviar info al backend
    }

    return (
        <tr className='border border-black-300'>
            {edit? (
                <>
                <td><input className='bg-gray-50 border border-gray-600 p-1 rounded-lg' type="text" onChange={e=>setInfoNuevoVehiculo({...infoNuevoVehiculo, nombre:e.target.value})} value={infoNuevoVehiculo.nombre}></input></td>
                <td><input className='bg-gray-50 border border-gray-600 p-1 rounded-lg' type="text" onChange={e=>setInfoNuevoVehiculo({...infoNuevoVehiculo, marca:e.target.value})} value={infoNuevoVehiculo.marca}></input></td>
                <td><input className='bg-gray-50 border border-gray-600 p-1 rounded-lg' type="text" onChange={e=>setInfoNuevoVehiculo({...infoNuevoVehiculo, modelo:e.target.value})} value={infoNuevoVehiculo.modelo}></input></td>
                </>
            ) : (
                <>
                <td>{vehiculo.nombre}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
                </>
                )
            }
            <td>
                <div className='flex justify-around w-full'>
                    
                    {edit ? (
                     <i><FontAwesomeIcon onClick={()=> actualizarVehiculo()}
                    //poner set edit para que permita deshacer la edicion
                    className='hover:text-gray-400' icon={solid('check')}/>
                    
                    <FontAwesomeIcon onClick={()=>setEdit(!edit)} 
                    className='hover:text-gray-400 ml-3' icon={solid('ban')} />
                    </i>
                    ) : ( 
                    <i>
                    <FontAwesomeIcon onClick={()=>setEdit(!edit)} 
                    className='hover:text-gray-400' icon={solid('pencil')} />
                    <Tooltip title='eliminar vehiculo'>
                        <FontAwesomeIcon onClick={()=> setOpenDialog(true)} className='hover:text-gray-400 ml-3' icon={solid('trash')} />
                    </Tooltip>
                    </i>
                    )}

                </div>
                <Dialog open={openDialog}>
                    <div className='p-8 flex flex-col'>
                        <h1 className='text-gray-900 text-2xl font-bold'>Are you sure you want to delete that?</h1>
                        <div className='flex w-full items-center justify-center my-4'>
                            <button className='mx-2 px-4 py-2 bg-gray-500 text-white hover:bg-gray-900 rounded-md shadow-md'>yes</button>
                            <button onClick={()=>setOpenDialog(false)} className='mx-2 px-4 py-2 bg-gray-500 text-white hover:bg-gray-900 rounded-md shadow-md'>No</button>
                        </div>
                    </div>
                </Dialog>
            </td>
        </tr>

    )
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
    <div className='w-96 items-center'>
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
