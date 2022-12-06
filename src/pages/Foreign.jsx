import React from 'react'
import { Link } from 'react-router-dom'

function Foreign() {
  return (
    <div className='foreign bg-stone-900 py-32'>
    <div className="container">
      <h1 className='text-center text-white text-4xl mb-5'>Foreign Foods</h1>
      <div className="mx-auto h-1 w-20 bg-green-500 mb-14"></div>
      <div className='flex flex-wrap justify-center gap-4'>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://www.simplyrecipes.com/thmb/hnp3KnKkEJL8N9J6RWWOR1QMqVU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2009__08__ceviche-horiz-a-1800-744540f98fd2402cbd78f74b20a44ee6.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Ceviche</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://assets.bonappetit.com/photos/624f3dc73a6e981591892a9d/master/pass/0407-bibimbap-at-home-lede.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Bibimbap</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://www.cookforindia.com/wp-content/uploads/2015/12/chole-bhature-cover.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Chole Bhature</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://www.savoryexperiments.com/wp-content/uploads/2020/04/Butter-Tarts-4.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Butter Tart</h3>
          <p className='my-3 text-slate-300'>Медовый бисквит, медовый крем, медовый мусс. Торт рассчитан на 10 - 12 персон.</p>
          <div className="flex justify-between">
            <h4 className='text-white'>250 000 sum</h4>
            <Link className='py-1 px-3 bg-red-600 rounded-sm text-white' to="">Book</Link>
          </div>
        </div>
        <div className='w-[300px] p-2 rounded-lg sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[30%] bg-stone-800'>
          <div className="h-50 w-full">
            <img className='rounded-sm' src="https://www.allrecipes.com/thmb/OIjVKwc6QqYOM4gRbv4KvpjBbjU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/IMG_7877_chef-johns-one-bite-thai-flavor-bomb-salad-wraps_chef-john-2000-11be814fc1894737be5d9b6764789240.jpg" />
          </div>
          <h3 className='text-white text-2xl py-2'>Miang Kham</h3>
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

export default Foreign