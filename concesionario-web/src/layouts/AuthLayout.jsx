import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'media/VRKid.png';

const AuthLayout = ({ children }) => {
    return (
        <div className='flex flex-col items-center justify-center bg-gray-50 py-2 px-4'> Auth layout
            <div className='w-full flex items-start'>
                <Link to='/'>
                    <i className='fas fa-home cursor pointer hover:text-indigo-500' />
                </Link>
            </div>
            <div className='max-w-md w-full'>
                <img className='mx-auto h-52 w-auto' src={Logo} alt='workflow' />
                {children}
            </div>
        </div>

    );
};

export default AuthLayout
