import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='w-full'>
            <div className="container">
                <h1>Your favourite food delivered hot & fresh</h1>
                <p>HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh homemade dinner in just 15 minutes.</p>
                <Link to='/' className='px-4 py-3 rounded-md text-lg bg-green-500'>Order Now</Link>
                <div className="box flex justify-between mt-10">
                    <div className="icons text-center">
                        <i className='fa-regular fa-clock text-gray-300'></i>
                        <h4 className='text-gray-300'>Today 10:00 am - 7:00 pm</h4>
                        <h5 className='text-gray-400'>Working hours</h5>
                    </div>
                    <div className="icons text-center">
                    <i class="fa-solid fa-leaf text-gray-300"></i>
                        <h4 className='text-gray-300'>Velyka Vasylkivska 100</h4>
                        <h5 className='text-gray-400'>Get Directions</h5>
                    </div>
                    <div className="icons text-center">
                    <i class="fa-solid fa-phone-flip text-gray-300"></i>
                        <h4 className='text-gray-300'>+38 (063)833 24 15</h4>
                        <h5 className='text-gray-400'>Call Online</h5>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header