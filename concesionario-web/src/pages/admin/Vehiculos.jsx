import React, {useEffect, useState} from 'react';

//realizar un formulario que pida edad y muestre un mensaje
//mostrar si es mayor o menor

const Vehiculos = () => {
    const [nombreVehiculo, setNombreVehiculo] = useState('');
    
    useEffect(()=>{
        console.log('Hola, I am a useEffect (esto se ejecuta cada que cambia el valor del nombre del vehiculo');
        console.log('el valor de la variable es ', nombreVehiculo);
        
    }, [nombreVehiculo]);

    const enviarDatosAlBackend = () => {
        console.log('El nombre del vehiculo es: ', nombreVehiculo)
    }

    // const cambioDeNombre = (e) => {
    //     console.log('nombre: ', e.target.value);
    // };

    // const cambioDeMarca = (e) => {
    //     console.log('marca: ', e.target.value);

    // };



    return (
        <form className='flex flex-col'>
            <h2>formulario de creacion de vehiculos</h2>
            
            <input onChange={(e) => {
                setNombreVehiculo(e.target.value)
            }} 
            type="text" placeholder='Nombre del vehiculo'/>

            <input onChange={(e) => {
                console.log(e.target.value)
            }} 
            type="text" placeholder='Marca del vehiculo'/>

            <input type="text" placeholder='Modelo del vehiculo'/>
            <button type='button' onClick={enviarDatosAlBackend} className='bg-indigo-500 text-white'>Send data</button>

        </form>
    )
}

export default Vehiculos
