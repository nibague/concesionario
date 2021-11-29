import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const SidebarResponsive = () => {
    return (
        <div className='md:hidden'>
            <FontAwesomeIcon className='hover:text-yellow-600' icon={solid('bars')} />
        </div>
    )
}


export default SidebarResponsive
