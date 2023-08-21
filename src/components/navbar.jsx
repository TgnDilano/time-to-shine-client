import React from 'react';
import appRoutes from '../routes/routes';
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.png"

const NavBar = () => {
    return (
        <header className='sticky top-0 w-screen z-50 h-[5.5rem] bg-black shadow'>
            <nav className='h-full w-full text-lg text-zinc-400 flex justify-between px-32 items-center'>
                <Link className='p-1'><img src={logo} /></Link>
                <ul className='flex justify-between items-center gap-x-10'>
                    {Object.values(appRoutes).map((e, index) => <li className='hover:text-white cursor-pointer' key={e.name + index}>{e.name}</li>)}
                </ul>

            </nav>
        </header>
    );
}

export default NavBar;
