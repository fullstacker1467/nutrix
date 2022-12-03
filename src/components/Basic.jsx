import React from 'react'
import { Link } from 'react-router-dom'

function Basic() {
    return (
        <div className='basic w-full bg-stone-900 py-36'>
            <div className="container bg-stone-800">
                <Link to="" className='py-2 px-5 my-5 rounded-sm bg-green-500 transition-all hover:bg-green-400'>ABOUT</Link>
                <h3 className='text-white text-5xl my-3 p-0'>The Basics Of Healthy Food</h3>
                <p className='lg:w-2/3 mx-auto my-4 text-gray-400'>In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.</p>
                <div className="bottom">
                    <div className="box flex flex-wrap justify-center gap-10">
                        <img className='rounded-md' src="/img/lasos.png" />
                        <img className='rounded-md' src="/img/tarelka.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basic