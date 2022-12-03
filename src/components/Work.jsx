import React from 'react'

function Work() {
  return (
    <div className='work w-full bg-stone-900 py-5'>
        <div className="container">
            <h1 className='text-white text-center mb-10 text-4xl'>How it Works</h1>
            <div className="h-1 w-20 mx-auto my-14 bg-green-500"></div>

            <div className="cards flex justify-center gap-10">
                <div className="card bg-stone-800 p-4 rounded-md cursor-default hover:bg-green-500">
                    <h3 className='text-white text-2xl'>Pick meals</h3>
                    <div className="line h-0.5 w-10 bg-green-500 my-2 rounded-md"></div>
                    <p className='text-gray-400'>Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.</p>
                </div>
                <div className="card bg-stone-800 p-4 rounded-md cursor-default hover:bg-green-500">
                    <h3 className='text-white text-2xl'>Choose how often</h3>
                    <div className="line h-0.5 w-10 bg-green-500 my-2 rounded-md"></div>
                    <p className='text-gray-400'>Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!</p>
                </div>
                <div className="card bg-stone-800 p-4 rounded-md cursor-default hover:bg-green-500">
                    <h3 className='text-white text-2xl'>fast deliveries</h3>
                    <div className="line h-0.5 w-10 bg-green-500 my-2 rounded-md"></div>
                    <p className='text-gray-400'>Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.</p>
                </div>
                <div className="card bg-stone-800 p-4 rounded-md cursor-default hover:bg-green-500">
                    <h3 className='text-white text-2xl'>Pick meals</h3>
                    <div className="line h-0.5 w-10 bg-green-500 my-2 rounded-md"></div>
                    <p className='text-gray-400'>Gobble makes cooking fast, so you have more time to unwind and be with family.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work