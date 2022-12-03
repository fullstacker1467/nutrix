import React from 'react'
import { Link } from 'react-router-dom'

function Topsale() {
  return (
    <div className="topsale bg-stone-900 py-10">
        <div className="container">
            <h1 className='text-center text-4xl text-white mt-20 mb-10'>Dish Of The Day</h1>
            <div className="h-1 w-20 mx-auto my-14 bg-green-500"></div>

            <div className="cards flex justify-center gap-10">
                <div className="card">
                    <div className="top">
                        <img src="/img/soap.png" />
                    </div>
                    <div className="bottom p-3">
                        <h1 className='text-white text-2xl'>Featured Meal</h1>
                        <h5 className='text-gray-400 my-3'>Served with french fries + drink</h5>
                        <p className='text-gray-500 text-sm'>Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
                        <div className="box flex justify-between">
                            <img src="/img/stars.png" />
                            <Link className='text-white py-1 px-3'>Book</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src="/img/garoh.png" />
                    </div>
                    <div className="bottom p-3">
                        <h1 className='text-white text-2xl'>Featured Meal</h1>
                        <h5 className='text-gray-400 my-3'>Served with french fries + drink</h5>
                        <p className='text-gray-500 text-sm'>Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
                        <div className="box flex justify-between">
                            <img src="/img/starsgrey.png" />
                            <Link className='text-white py-1 px-3'>Book</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src="/img/egg.png" />
                    </div>
                    <div className="bottom p-3">
                        <h1 className='text-white text-2xl'>Featured Meal</h1>
                        <h5 className='text-gray-400 my-3'>Served with french fries + drink</h5>
                        <p className='text-gray-500 text-sm'>Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
                        <div className="box flex justify-between">
                            <img src="/img/starsgrey.png" />
                            <Link className='text-white py-1 px-3'>Book</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cards flex mt-11 justify-center gap-10">
                <div className="card">
                    <div className="top">
                        <img src="/img/lasosc.png" />
                    </div>
                    <div className="bottom p-3">
                        <h1 className='text-white text-2xl'>Featured Meal</h1>
                        <h5 className='text-gray-400 my-3'>Served with french fries + drink</h5>
                        <p className='text-gray-500 text-sm'>Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
                        <div className="box flex justify-between">
                            <img src="/img/stars.png" />
                            <Link className='text-white py-1 px-3'>Book</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src="/img/avakado.png" />
                    </div>
                    <div className="bottom p-3">
                        <h1 className='text-white text-2xl'>Featured Meal</h1>
                        <h5 className='text-gray-400 my-3'>Served with french fries + drink</h5>
                        <p className='text-gray-500 text-sm'>Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
                        <div className="box flex justify-between">
                            <img src="/img/starsgrey.png" />
                            <Link className='text-white py-1 px-3'>Book</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src="/img/fruit.png" />
                    </div>
                    <div className="bottom p-3">
                        <h1 className='text-white text-2xl'>Featured Meal</h1>
                        <h5 className='text-gray-400 my-3'>Served with french fries + drink</h5>
                        <p className='text-gray-500 text-sm'>Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
                        <div className="box flex justify-between">
                            <img src="/img/stars.png" />
                            <Link className='text-white py-1 px-3'>Book</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topsale