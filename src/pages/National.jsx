import React from 'react'
import { Link } from 'react-router-dom'

function National() {
  return (
    <div className='national bg-stone-900 py-32'>
      <div className="container">
        <h1 className='text-center text-white text-4xl mb-5'>National Foods</h1>
        <div className="mx-auto h-1 w-20 bg-green-500 mb-14"></div>
        <div className='flex flex-wrap justify-center gap-4'>
          <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
            <div className="h-50 w-full">
              <img className='rounded-sm' src="https://uzbekcook.files.wordpress.com/2016/02/uzbek-palov.jpg" />
            </div>
            <h3 className='text-white text-2xl py-2'>Palov</h3>
            <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
            <div className="flex justify-between">
              <h4 className='text-white'>250 000 sum</h4>
              <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
            </div>
          </div>
          <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
            <div className="h-50 w-full">
              <img className='rounded-sm' src="https://zira.uz/wp-content/uploads/2018/10/manti-s-tikvoy-5.jpg" />
            </div>
            <h3 className='text-white text-2xl py-2'>Manti</h3>
            <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
            <div className="flex justify-between">
              <h4 className='text-white'>250 000 sum</h4>
              <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
            </div>
          </div>
          <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
            <div className="h-50 w-full">
              <img className='rounded-sm' src="https://static.1000.menu/img/content/36805/samsa-s-govyadinoi-iz-sloenogo-testa_1563336739_1_max.jpg" />
            </div>
            <h3 className='text-white text-2xl py-2'>Samsa</h3>
            <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
            <div className="flex justify-between">
              <h4 className='text-white'>250 000 sum</h4>
              <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
            </div>
          </div>
          <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
            <div className="h-50 w-full">
              <img className='rounded-sm' src="https://gotovim.uz/wp-content/uploads/2021/09/sup-s-pelmenjami-images-big.jpg" />
            </div>
            <h3 className='text-white text-2xl py-2'>Pelmeni</h3>
            <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
            <div className="flex justify-between">
              <h4 className='text-white'>250 000 sum</h4>
              <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
            </div>
          </div>
          <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
            <div className="h-50 w-full">
              <img className='rounded-sm' src="https://zira.uz/wp-content/uploads/2019/10/sup-s-nutom-2.jpg" />
            </div>
            <h3 className='text-white text-2xl py-2'>Sho'rva</h3>
            <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
            <div className="flex justify-between">
              <h4 className='text-white'>250 000 sum</h4>
              <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
            </div>
          </div>
          <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
            <div className="h-50 w-full">
              <img className='rounded-sm' src="https://img.freepik.com/free-photo/flat-lay-of-tasty-kebab-on-slate-with-other-dish-and-cutlery_23-2148685478.jpg?w=2000" />
            </div>
            <h3 className='text-white text-2xl py-2'>Kabob</h3>
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

export default National