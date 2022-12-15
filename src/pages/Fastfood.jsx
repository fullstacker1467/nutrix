import React from 'react'
import { Link } from 'react-router-dom'

function Fastfood() {
  return (
    <div className='foreign bg-stone-900 py-32'>
    <div className="container">
      <h1 className='text-center text-white text-4xl mb-5'>FastFoods</h1>
      <div className="mx-auto h-1 w-20 bg-green-500 mb-14"></div>
      <div className='flex flex-wrap justify-center gap-10'>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://img.freepik.com/premium-photo/humburger_157766-32.jpg?w=2000" />
          </div>
          <h3 className='text-white text-2xl py-2'>Hamburger</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785-700x466.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Cheeseburger</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://cellones.com/wp-content/uploads/2021/02/sandwich.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Sandwich</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://static.1000.menu/img/content-v2/02/1d/53551/xot-dog-v-domashnix-usloviyax-v-bulochke-s-sosiskoi_1616347265_21_max.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Hotdog</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://mykaleidoscope.ru/en/uploads/posts/2022-09/1663378547_1-mykaleidoscope-ru-p-big-burger-yeda-krasivo-2.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Bigburger</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/birria-tacos-1648842127.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Tacos</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Fastfood