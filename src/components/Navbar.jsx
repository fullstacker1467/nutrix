import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const [active, setActive] = useState(true)

  let handelNav = () => {
    setActive(!active)
  }

  return (
    
    <>
      <nav className={`${!active? "active": null}`}>
        <div className='container flex h-full items-center justify-between'>
          <Link to='/' className='flex gap-2 text-white logo'>Healthy Food</Link>
          <i onClick={handelNav} class="fa-solid fa-bars"></i>
          <div className="menu flex gap-8">
            <Link to='' className='text-white py-1'>Menu</Link>
            <Link to='' className='text-white py-1'>Recipes</Link>
            <Link to='' className='text-white py-1'>Chefs</Link>
            <Link to='' className='text-white py-1'>Contacts</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar