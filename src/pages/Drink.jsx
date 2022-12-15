import React from 'react'
import { Link } from 'react-router-dom'

function Drink() {
  return (
    <div className='foreign bg-stone-900 py-32'>
    <div className="container">
      <h1 className='text-center text-white text-4xl mb-5'>Drinks</h1>
      <div className="mx-auto h-1 w-20 bg-green-500 mb-14"></div>
      <div className='flex flex-wrap justify-center gap-10'>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://www.shkolazhizni.ru/img/content/i239/239102_or.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Capuchino</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://s3.eu-central-1.amazonaws.com/cdn-eu.jowi.club/jowi.club/ckeditor_assets/pictures/412/content_7-1.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Latte</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://media.istockphoto.com/id/639140452/photo/coffee.jpg?s=612x612&w=0&k=20&c=tqz5T__wBIvGQanLSMeuv7ZLY4rpXY3R1n748wKiKNo=" />
          </div>
          <h3 className='text-white text-2xl py-2'>Exspresso</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://www.roastmarket.de/magazin/wp-content/uploads/2016/05/Caffe-Americano-in-Tasse-1200x799.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Americano</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://images.aws.nestle.recipes/original/81e5f1b34a3e0dc78cb793ba62b07377_creamy_chocolate_frappe.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Frappe</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://www.yummytemple.com/wp-content/uploads/2022/09/Make-frappe-coffee-with-milk-yourself.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Coffee ( with ice ) </h3>
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

export default Drink