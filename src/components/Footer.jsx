import React from 'react'
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div>
     <div class="relative flex overflow-x-hidden bg-violet-800 text-white">
     <div class="py-2 animate-marquee whitespace-nowrap">
      <ul className='inline-flex space-x-4'>
        <li class="mx-4 text-2xl">
        Web Development
        </li>
        <li class="mx-4 text-2xl">
        Cloud Infrastructure
        </li>
        <li class="mx-4 text-2xl">
        Cloud Solutions

        </li>
        <li class="mx-4 text-2xl">
        Digital marketing
        </li>
        <li class="mx-4 text-2xl">
        Mobile Application Development

        </li>
        <li class="mx-4 text-2xl">
        Artificial Intelligence
        </li>

      </ul>

  </div>

  <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
  <ul className='inline-flex space-x-4'>
        <li class="mx-4 text-2xl">
        Web Development
        </li>
        <li class="mx-4 text-2xl">
        Cloud Infrastructure
        </li>
        <li class="mx-4 text-2xl">
        Cloud Solutions

        </li>
        <li class="mx-4 text-2xl">
        Digital marketing
        </li>
        <li class="mx-4 text-2xl">
        Mobile Application Development

        </li>
        <li class="mx-4 text-2xl">
        Artificial Intelligence
        </li>

      </ul>
  </div>
</div>
      <footer class="bg-white border-t-2">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="text-teal-600">
          <img className='w-56' src={logo} alt="logo"></img>
        </div>

        <p className="mt-4 max-w-xs text-gray-500">
        We Code Your Future
        </p>

        <ul className="mt-8 flex gap-6">
          
          <li>
            <a
              href="www.instagram.com"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Instagram</span>

              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="www.linkedin.com"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Linkedin</span>

              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg>
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-500 py-6">&copy; 2024. Quantasis Pvt Ltd. All rights reserved.</p>

        <p className="text-sm text-gray-500">
        Privacy Policy Disclaimer Terms of Service
        </p>
    
        
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
        <div>
          <p className="font-medium text-gray-900">Quick Links</p>

          <ul className="mt-6 space-y-4 text-lg">
            <li>
              <a href="/" className="text-gray-700 transition hover:opacity-75"> Home </a>
            </li>

            <li>
              <a href="/" className="text-gray-700 transition hover:opacity-75"> Services </a>
            </li>

            <li>
              <a href="/" className="text-gray-700 transition hover:opacity-75"> Blogs </a>
            </li>

            <li>
              <a href="/" className="text-gray-700 transition hover:opacity-75"> Carrers </a>
            </li>

            <li>
              <a href="/" className="text-gray-700 transition hover:opacity-75"> Contact us </a>
            </li>
          </ul>
        </div>

        <div>
            <div>
          <p className="font-medium text-gray-900">Call Us</p>

          <ul className="text-lg">
            <li>
              <a href="/" className="text-gray-700 transition hover:opacity-75"> +91 81086 18611  </a>
            </li>
          </ul>
          </div>

          <div className="py-4">
          <p className="font-medium text-gray-900">Project Inquiries</p>

          <ul className=" text-lg">
            <li>
              <a href="/" className="text-gray-700 transition hover:opacity-75"> info@quantasis.com </a>
            </li>
          </ul>
          </div>
          <div>
          <p className="font-medium text-gray-900">Careers</p>

          <ul className="text-lg">
            <li>
              <a href="/" className="text-gray-700 transition hover:opacity-75"> hr@quantasis.com </a>
            </li>
          </ul>
          </div>
        </div>
        

        <div>
          <p className="font-medium text-gray-900">Address</p>

          <ul className="mt-6 space-y-4 text-lg">
            <li>
              <a href="/" className="text-gray-700 transition hover:opacity-75">606-607, Goldcrest Business Park, Lal Bahadur Shastri Rd, Nityanand Nagar, Ghatkopar West, Mumbai, Maharashtra 400086.</a>
            </li>
          </ul>
        </div>

      
      </div>
    </div>

  </div>
</footer>
    </div>
  )
}

export default Footer
