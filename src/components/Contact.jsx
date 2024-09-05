import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope, faGlobe, faMobile} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div className='flex items-center justify-center space-x-32 space-y-20 pb-20 '>
<div class="max-w-xs flex-1 p-6 bg-violet-800  text-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight  ">Contact Information</h5>
    </a>
    <p class="mb-3 font-normal text-slate-300 ">Fill up the form and our Team will get Back to you within 24 hours</p>
    

    <ul className="list-none space-y-4">
      
        <li className="flex items-start text-lg">
          {/* Replace the bullet with an icon */}
          <FontAwesomeIcon
            icon={faMobile}
            className="text-white h-8 mr-2 mt-1"
          />
          {/* List item text */}
          <span>+91 81086 18611</span>
        </li>
        <li className="flex items-start text-lg">
          {/* Replace the bullet with an icon */}
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-white h-8 mr-2 mt-1"
          />
          {/* List item text */}
          <span>info@quantasis.com</span>
        </li>
        <li className="flex items-start text-lg">
          {/* Replace the bullet with an icon */}
          <FontAwesomeIcon
            icon={faGlobe}
            className="text-white h-8 mr-2 mt-1"
          />
          {/* List item text */}
          <span>www.quantasis.com</span>
        </li>
        <li className="flex items-start text-lg">
          {/* Replace the bullet with an icon */}
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-white h-8 mr-2 mt-1"
          />
          {/* List item text */}
          <span>606-607, Goldcrest Business Park, Lal Bahadur Shastri Rd, Nityanand Nagar, Ghatkopar West, Mumbai, Maharashtra 400086.</span>
        </li>
 
    </ul>

    
</div>


<form class="max-w-screen-lg flex-1 items-center">
    <h2 className='text-5xl font-extrabold'>
    Let’s Create a measurable <span className='underline underline-offset-4 decoration-4 decoration-violet-500'>
        impact on your</span> business
    </h2>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_name" id="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="emai" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone (10 Digits)</label>
    </div>
  </div>
  
<div class="relative z-0 w-full mb-5 group">
  <textarea id="message" rows="4" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""></textarea>
  <label for="floating_message" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Write your message</label>


</div>
  
  <button type="submit" class="text-white bg-violet-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


    </div>
  )
}

export default Contact
