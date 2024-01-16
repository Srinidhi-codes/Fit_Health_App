import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <>
            <div className='flex justify-around gap-5 items-center py-3 bg-skin-base text-skin-text border-b-4 border-white'>
                <img src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg" alt="" />

                <div className='flex items-center gap-5 text-[1.3rem]'>
                    <Link className='hover:bg-skin-text hover:text-skin-base p-2 rounded-2xl' to={"/"}>Home</Link>
                    <Link className='hover:bg-skin-text hover:text-skin-base p-2 rounded-2xl' to={"/"}>About</Link>
                    <Link className='hover:bg-skin-text hover:text-skin-base p-2 rounded-2xl' to={"/"}>Services</Link>
                </div>
            </div>
        </>
    )
}

export default Header