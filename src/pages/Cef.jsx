import React from 'react'
import { Link } from 'react-router-dom'

function Cef() {
  return (
    <menu className='bg-stone-900 w-full'>
            <div className="container bg-stone-700">
                <h1 className='text-center text-white mb-2'>Menu</h1>
                <div className="mx-auto h-1 w-20 bg-green-500 mb-14"></div>
                <div className='flex flex-wrap justify-center gap-4'>
                    <div className='w-[300px] sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[23%] h-[250px] xl:h-[170px]'>
                        <img className='menimg' src="https://i.guim.co.uk/img/media/3cfd4dc25e5f1dbc378ab3adc817a1081264a5df/0_224_6720_4032/master/6720.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=da5554002604cbe2d539c72fe891a26c" />
                        <Link to="/national">Muhtor Ergashev - NF</Link>
                    </div>
                    <div className='w-[300px] sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[23%] h-[250px] xl:h-[170px]'>
                        <img className='menimg' src="https://ichef.bbci.co.uk/news/976/cpsprodpb/9ECB/production/_122215604_firmenichnmaire3.jpg" />
                        <Link to="/foreign">John Stivens - FF</Link>
                    </div>
                    <div className='w-[300px] sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[23%] h-[250px] xl:h-[170px]'>
                        <img className='menimg' src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-07/chef%20%281%29.jpg" />
                        <Link to="/fastfood">Lary Nelson</Link>
                    </div>
                    <div className='w-[300px] sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[23%] h-[250px] xl:h-[170px]'>
                        <img className='menimg' src="https://img.freepik.com/free-photo/male-barista-at-coffee-shop-holding-cup-by-the-counter_1303-29321.jpg?w=2000" />
                        <Link to="/drink">Anvar Abdulhodiyev</Link>
                    </div>
                </div>
            </div>
        </menu>
  )
}

export default Cef