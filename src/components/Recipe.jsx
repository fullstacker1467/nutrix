import React from 'react'
import { Link } from 'react-router-dom'

function Recipe() {
    return (
        <div className='recipe bg-stone-900'>
            <div className="container">
                <h1 className='text-white text-center text-4xl mb-14'>Recipes From Our Chefs</h1>
                <div className="mx-auto h-1 w-20 bg-green-500 mb-14"></div>
                <div className="flex">
                    <div className="left px-5">
                        <h5>BREAKFAST</h5>
                        <h5>05 Jul 2016</h5>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        <h6>Jason Keller</h6>
                        <div className="flex">
                            <i class="fa-regular fa-eye">275</i>
                            <i class="fa-solid fa-comments">12</i>
                        </div>
                    </div>
                    <div className="right px-5">
                        <div className="card">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <Link>LUNCH</Link>
                                    <h5>07 Jan 2016</h5>
                                </div>
                                <div className="flex">
                                    <i class="fa-regular fa-eye">275</i>
                                    <i class="fa-solid fa-comments">12</i>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <Link>DINNER</Link>
                                    <h5>07 Jan 2016</h5>
                                </div>
                                <div className="flex">
                                    <i class="fa-regular fa-eye">275</i>
                                    <i class="fa-solid fa-comments">12</i>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <Link>SWEETS</Link>
                                    <h5>07 Jan 2016</h5>
                                </div>
                                <div className="flex">
                                    <i class="fa-regular fa-eye">275</i>
                                    <i class="fa-solid fa-comments">12</i>
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