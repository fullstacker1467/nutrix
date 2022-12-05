import React from 'react'
import { Link } from 'react-router-dom'

function Recipe() {
    return (
        <div className='recipe bg-stone-900 py-10'>
            <div className="container">
                <h1 className='text-white text-center text-4xl mb-14'>Recipes From Our Chefs</h1>
                <div className="mx-auto h-1 w-20 bg-green-500 mb-14"></div>
                <div className="flex flexy">
                    <div className="left text-center">
                        <h5 className='text-white mb-5 br'>BREAKFAST</h5>
                        <h5 className='text-white mb-10'>05 Jul 2016</h5>
                        <h3 className='text-white mb-10 w-3/5 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        <h6 className='mb-10 text-sm text-slate-300'>Jason Keller</h6>
                        <div className="flex text-slate-400 justify-center gap-10 pb-10">
                            <i class="fa-regular fa-eye"> 275</i>
                            <i class="fa-solid fa-comments"> 12</i>
                        </div>
                    </div>
                    <div className="right">
                        <div className="card p-5 bg-stone-800">
                            <p className='text-white py-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            <d  iv className="flex justify-between items-center flexbek">
                                <div className="flex">
                                    <Link className='text-white mr-10 bg-slate-600 py-0.5 px-1 text-sm
                                    rounded-sm hover:bg-slate-700 transition-all ease-out'>LUNCH</Link>
                                    <h5 className='text-white'>07 Jan 2016</h5>
                                </div>
                                <div className="flex text-slate-400 gap-10">
                                    <i class="fa-regular fa-eye"> 275</i>
                                    <i class="fa-solid fa-comments"> 12</i>
                                </div>
                            </d>
                        </div>
                        <div className="card my-2 p-5 rasim">
                            <p className='text-white py-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            <div className="flex justify-between items-center flexbek">
                                <div className="flex">
                                    <Link className='text-white mr-10 bg-slate-600 py-0.5 px-1 text-sm
                                    rounded-sm hover:bg-slate-700 transition-all ease-out'>LUNCH</Link>
                                    <h5 className='text-white'>07 Jan 2016</h5>
                                </div>
                                <div className="flex text-slate-400 gap-10">
                                    <i class="fa-regular fa-eye"> 275</i>
                                    <i class="fa-solid fa-comments"> 12</i>
                                </div>
                            </div>
                        </div>
                        <div className="card p-5 bg-green-500">
                            <p className='text-slate-800 py-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            <div className="flex justify-between items-center flexbek">
                                <div className="flex">
                                    <Link className='text-white mr-10 bg-slate-900 py-0.5 px-1 text-sm
                                    rounded-sm'>LUNCH</Link>
                                    <h5 className='text-slate-800'>07 Jan 2016</h5>
                                </div>
                                <div className="flex text-slate-800 gap-10">
                                    <i class="fa-regular fa-eye"> 275</i>
                                    <i class="fa-solid fa-comments"> 12</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe