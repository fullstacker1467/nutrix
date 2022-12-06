import React from 'react'
import { Link } from 'react-router-dom'


function Menular() {
    return (
        <menu className='bg-stone-900 w-full'>
            <div className="container">
                <h1 className='text-center text-white mb-2'>Menu</h1>
                <div className="mx-auto h-1 w-20 bg-green-500 mb-14"></div>
                <div className='flex flex-wrap justify-center gap-4'>
                    <div className='w-[300px] sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[23%] h-[250px] xl:h-[170px]'>
                        <img className='menimg' src="https://www.lacademie.com/wp-content/uploads/2022/03/uzbek-foods.jpg" />
                        <Link to="/national">National foods</Link>
                    </div>
                    <div className='w-[300px] sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[23%] h-[250px] xl:h-[170px]'>
                        <img className='menimg' src="https://thewanderlustkitchen.com/wp-content/uploads/2014/07/20-minute-greek-pasta-chicken-recipe-3.jpg" />
                        <Link to="/foreign">Foreign Foods</Link>
                    </div>
                    <div className='w-[300px] sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[23%] h-[250px] xl:h-[170px]'>
                        <img className='menimg' src="https://www.tastingtable.com/img/gallery/12-low-carb-fast-food-options-that-wont-ruin-your-diet/l-intro-1651501665.jpg" />
                        <Link to="/fastfood">FastFoods</Link>
                    </div>
                    <div className='w-[300px] sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[23%] h-[250px] xl:h-[170px]'>
                        <img className='menimg' src="https://fusedbyfionauyema.com/wp-content/uploads/2021/02/Fused-by-Fiona-Uyema-Sushi-Q-A-how-to-make-sushi-at-home.jpg" />
                        <Link to="/sushi">Sushi</Link>
                    </div>
                </div>
            </div>
        </menu>
    )
}

export default Menular