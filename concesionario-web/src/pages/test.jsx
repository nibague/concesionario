import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios';
import { obtenerUsuarios } from 'utils/api';
import { obtenerVehiculos } from 'utils/api';
import { nanoid  } from 'nanoid'

const Test = () => {
    const [usuarios, setUsuarios]= useState([]);
    const [vehiculos, setVehiculos]= useState([]);
    const form = useRef(null)

    useEffect(() => {
        obtenerVehiculos(setVehiculos);
        obtenerUsuarios(setUsuarios);
    }, [])

    useEffect(()=>{
        console.log(vehiculos)
    }, [vehiculos])
    useEffect(()=>{
        console.log(usuarios)
    }, [usuarios])

    const submitForm = async (e) =>{
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevaVenta = {};
        fd.forEach((value, key) => {
            nuevaVenta[key] = value;
        });

        console.log(nuevaVenta)
        
        const informacionConsolidada =  {
            valor:nuevaVenta.cantidadVenta,
            vehiculo:vehiculos.filter(el => el._id === nuevaVenta.vehiculo)[0],
            vendedor:usuarios.filter(el => el._id === nuevaVenta.vendedor)[0],
            
        }

         const options = {
            method: 'POST',
            url: 'http://localhost:5000/ventas/',
            headers: {'content-type': 'application/json'},
            data: nuevaVenta,

        };
        await axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    };

    return (
        <div>
            crear nueva venta
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>
                <label>
                    seleccionar vehiculo
                    <select name="vendedor" id="">
                        {usuarios.map((u)=>{
                            return <option key = {nanoid()} value={u._id}>
                                {u.email}
                            </option>;
                        })};
                    </select>
                </label>
                <label>
                    Seleccionar Vehiculo
                    <select name="vehiculo" id="">
                    {vehiculos.map((v)=>{
                        return <option key = {nanoid()} value={v._id}>
                                {v.name}
                            </option>;
                        })};
                    </select>
                </label>
                <input type= 'number' name="cantidad venta"/>
                <button className="border-4 bg-gray-600" type="submit">
                    Submit
                </button>
            </form>

        </div>
    );
};

export default Test