import React, {useEffect, useState} from 'react';

//realizar un formulario que pida edad y muestre un mensaje
//mostrar si es mayor o menor

const Vehiculos = () => {
    const [edad, setEdad] = useState(0);
    const [esMenorDeEdad, setEsMenorDeEdad] = useState(false)
    const [mostrarCamposAdicionales, setMostrarCamposAdicionales] = useState(false);

    useEffect(()=>{
        if(edad>18){
            setEsMenorDeEdad(false)
            console.log('la persona es mayor de edad')
        } else{
            setEsMenorDeEdad(true)
            console.log('la persona es menor de edad')
        }

    }, [edad]);

    return (
        <form className='flex flex-col'>
            <h2>formulario de creacion de vehiculos</h2>
            <label htmlfor='edad'>
                porfavor ingrese su edad
                <input value={edad} onChange={(e)=>{setEdad(e.target.value)}} name='edad' type='number' />
            </label>
            {
                esMenorDeEdad ? (<span className='text-3xl text-red-500'>usted es menor de edad! you cant make payments</span>) : (<span className='text-3xl text-yellow-500'>usted es mayor de edad! you can make payments</span>)
            }
            <button onClick={() => setMostrarCamposAdicionales(true)} type='button' className='text-white bg-indigo-500' >
                mostrar campos adicionales
            </button>
            {mostrarCamposAdicionales && (
                <div>
                    <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type="text" />
                    <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type="text" />
                    <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type="text" />
                    <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type="text" />
                    <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type="text" />
                </div>
            )}
            
        </form>
    )
}

export default Vehiculos
