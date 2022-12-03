import React from 'react'

function Chefs() {
  return (
    <div className='chef bg-stone-900 py-40'>
        <div className="container">
            <h1 className='text-white text-4xl text-center'>This month's chefs</h1>

            <div className="h-1 w-20 mx-auto mt-14 bg-green-500"></div>

            <div className="chefs flex justify-center gap-20 py-24">
                <div className="shef">
                    <div className="top flex">
                        <img src="/img/gregory.png" />
                        <h5 className='text-gray-400'>Gregory Flores</h5>
                    </div>
                    <div className="bottom">
                        <img src="/img/george.png" />
                    </div>
                </div>
                <div className="shef">
                    <div className="top flex">
                        <img src="/img/cooper.png" />
                        <h5 className='text-gray-400'>Gregory Flores</h5>
                    </div>
                    <div className="bottom">
                        <img src="/img/annet.png" />
                    </div>
                </div>
                <div className="shef">
                    <div className="top flex">
                        <img src="/img/fox.png" />
                        <h5 className='text-gray-400'>Gregory Flores</h5>
                    </div>
                    <div className="bottom">
                        <img src="/img/greg.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chefs