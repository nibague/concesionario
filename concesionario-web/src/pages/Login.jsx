import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='m-10'>
            <div className='flex flex-col mt-60 justify-center items-center'>
                logo
            </div>
            <div className='flex w-full flex-col justify-center items-center'>

                <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>Iniciar sesion en tu cuenta</h2>
                <form className='mt-8 max-w-md'>
                    <div>
                        <input className='appearance-none relative block px-3 py-2 w-80 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='email' placeholder='user' required/>
                        <input className='appearance-none relative block px-3 py-2 w-80 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='password' placeholder='password' required/>
                    </div>  
                    <div className='flex justify-between'>
                        <div className='mt-5'>
                            <label htmlfor='rememberme'>
                                <input className='m-2' type='checkbox' name='rememberme'/>
                                remember me
                            </label>
                        </div>
                        <div className='mt-5'>
                            <Link to='/'>did you forget the pass?</Link>
                        </div>
                    </div>

                    <div>
                        <Link to='/admin'>
                            <button className='bg-indigo-500 p-3 w-80 45 mt-10 mb-5 text-white rounded-lg shadow-md hover:bg-indigo-700' type='submit'>
                                iniciar sesion
                            </button>
                        </Link>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <label htmlfor='noAccount'>
                                Dont you have an account?
                            </label>
                        </div>
                        <div>
                            <Link to='/'>Register</Link>
                        </div>
                    </div>

                    <div className='mt-5 mb-5 text-center'>----------------------- or -----------------------</div>
                    <div>
                        <button>Continue with gogle</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
