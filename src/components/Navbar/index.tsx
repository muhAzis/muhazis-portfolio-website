import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed flex w-[100vw] p-4 top-0 left-0 text-white items-center justify-center z-[9999]'>
      <div className='flex px-8 py-2 gap-6 bg-black rounded-lg items-center justify-center'>
        <a href="#" className='hover:font-bold transition-all'>Home</a>
        <i className="ri-triangle-line text-xs"/>
        <a href="#" className='hover:font-bold transition-all'>My Skills</a>
        <i className="ri-triangle-line text-xs"/>
        <a href="#" className='hover:font-bold transition-all'>Projects</a>
        <i className="ri-triangle-line text-xs"/>
        <a href="#" className='hover:font-bold transition-all'>Contacts</a>

      </div>
    </div>
  )
}

export default Navbar