import React from 'react'
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div>
      

<nav className="bg-white  fixed w-full z-20 top-0 start-0 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 ">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-8" alt="Flowbite Logo" />
    </a>
    <div className="hidden h-auto w-full md:block md:w-auto" id="navbar-default">
      <ul className="text-lg flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
        <li className="relative group">
            <a href="/" className=" block py-2 px-10 md:border-0 md:text-white md:bg-violet-800  md:p-4">
              Services
            </a>
         
            <ul className="absolute left-0 mt-2 md:w-72 md:text-sm font-medium bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
              <li className="px-4 py-2 m-4 hover:bg-violet-800 hover:text-white">
                <a href="/">Cloud Infrastructure and Dev Ops</a>
              </li>
              <li className="px-4 py-2 m-4 hover:bg-violet-800 hover:text-white">
                <a href="/">Mobile Application</a>
              </li>
              <li className="px-4 py-2 m-4 hover:bg-violet-800 hover:text-white">
                <a href="/">Artifical Intelligence</a>
              </li>
              <li className="px-4 py-2 m-4 hover:bg-violet-800 hover:text-white">
                <a href="/">Web Application</a>
              </li>
            </ul>
          </li>

        
        <li >
          <a href="/" className=" transition ease-in duration-500 block py-2 px-10 text-gray-900  md:border-0 md:hover:text-white md:hover:bg-violet-600  md:p-4">Blogs</a>
        </li>
        <li >
          <a href="/" className=" transition ease-in duration-500 block py-2 px-10 text-gray-900 md:border-0 md:hover:text-white md:hover:bg-violet-600 md:p-4 ">Careers</a>
        </li>
        <li >
          <a href="/" className=" transition ease-in duration-500 block py-2 px-10 text-gray-900  md:border-0 md:hover:text-white md:hover:bg-violet-600  md:p-4 ">Contact us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar
