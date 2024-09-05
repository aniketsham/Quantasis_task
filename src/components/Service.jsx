import React from 'react'
import computer from "../images/computer.png"
import telescope from "../images/telescope.png";
import innovation from "../images/innovation.png";
import security from "../images/security.png";
import clock from "../images/clock.png";
import CICD from "../images/CICD.png";
import Support from "../images/Support.png";
import cloud from "../images/cloud.png";
import wheel from "../images/wheel.png"
import TechStack from './TechStack';
import Contact from './Contact';
const Service = () => {
    
  return (
    <div className="font-sans">
   
    <div className='bg-violet-800 max-h-full sm:max-w-full grid md:grid-cols-2 sm:grid-cols-1 sm:pt-[10rem] md:py-[20rem]'>
        <span className='md:pl-[10rem] w-full '>
            <h2 className='md:text-5xl sm:text-xl  font-extrabold  text-white '>
            Seamless Transition from Local to Cloud with CI/CD Integration for a Streamlined Development Pipeline
            </h2>
            <p className='md:text-2xl sm:text-md  pt-10 text-white '>
            Our cutting-edge approach leverages advanced technologies such as Terraform for infrastructure as code, harnesses the power of cloud provider resources for unparalleled scalability, and orchestrates containerized applications with Kubernetes for optimal deployment efficiency.
            </p>
        </span>
        <span className='flex items-center justify-center'>
            <img className='md:w-96 md:h-96 sm:w-40 sm:h-40 ' src={wheel} alt="computer"></img>
        </span>

    
    </div>
    <div className='bg-white md:px-[15rem] md:py-[10rem]'>
        <h2 className='text-5xl font-extrabold'>
        <span className='underline underline-offset-4 decoration-4 decoration-violet-500'>DevOps and Clou</span>d Infrastructure?
        </h2>
        <div className='text-xl md:pt-8'>
        <p>
        Automate workflows, and ensure rapid, reliable releases. Unlock the benefits of accelerated development cycles, improved resource utilization, and heightened scalability, as we guide you through the transformative journey towards a streamlined development pipeline.
        </p>
        <p className='md:pt-8'>
        To Know More Read - Our Blog
        </p>
        </div>
    </div>

    <div className='bg-violet-800 text-5xl  text-white'>
        <center> 
            <h2 className='font-extrabold text-center  md:py-[5rem] md:px-[15rem]'>
        Transforming Concepts into Striking Visual Realities
        </h2>
        </center>
        
    </div>

    <div className='flex items-center md:space-x-4 sm:py-10 md:py-[5rem]'>
        <span className="flex-shrink-0 md:px-[15rem]">
        <img class="md:w-96 md:h-96 sm:w-40 sm:h-40 rounded-full" src={computer} alt="computer"/>
        </span> 


        <span className='flex-1 min-w-0 px-6'>
        <h1 className='text-5xl font-extrabold'>
            <span className='underline underline-offset-4 decoration-4 decoration-violet-500'>Why cho</span>ose us?
        </h1>
        <ul className='py-6'>
            <li className="pb-3 sm:pb-4 w-full">
            <div className="flex items-center space-x-4 ">
            <div className="flex-shrink-0  bg-violet-700 rounded top-0 ">
            <img class="w-10 h-10 rounded-full" src={telescope} alt="telescope"/>
            </div>
            <div className="flex-1 min-w-0">
            <h2 className="text-xl  font-extrabold text-gray-900 ">
            Expertise and Experience
            </h2>
            <p className="text-xl text-gray-500  ">
            Benefit from our team's extensive expertise and industry experience. Our professionals bring a wealth of knowledge across various domains, ensuring that your project is handled by seasoned experts who understand the intricacies of your specific challenges.
            </p>
         </div>
        
      </div>
   </li>
   <li className="pb-3 sm:pb-4">
      <div className="flex items-center md:space-x-4 rtl:space-x-reverse">
         <div className="flex-shrink-0 bg-violet-700 rounded-sm ">
         <img class="w-10 h-10 rounded-full" src={innovation} alt="innovation"/>
        </div>
         <div className="flex-1 min-w-0">
            <h2 className="text-xl font-extrabold text-gray-900 ">
            Innovative Technologies
            </h2>
            <p className="text-xl text-gray-500 ">
            Stay at the forefront of technology trends with our commitment to innovation. We leverage the latest tools and technologies to ensure that your projects benefit from the most advanced solutions, driving efficiency, scalability, and competitiveness.
            </p>
         </div>
        
      </div>
   </li>
   <li className="pb-3 sm:pb-4">
      <div className="flex items-center md:space-x-4 rtl:space-x-reverse">
         <div className="flex-shrink-0 bg-violet-700 rounded ">
         <img class="w-10 h-10 rounded-full" src={clock} alt="clock"/>
        </div>
         <div className="flex-1 min-w-0">
            <h2 className="text-xl font-extrabold text-gray-900">
            Transparent Communication
            </h2>
            <p className="text-xl text-gray-500 ">
            Experience a transparent and collaborative working relationship with open lines of communication. Regular updates, progress reports, and interactive client engagements ensure that you are well-informed at every stage of the project, fostering trust and accountability.

            </p>
         </div>
        
      </div>
   </li>
   <li className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-shrink-0 bg-violet-700 rounded ">
         <img class="w-10 h-10 rounded-full" src={security} alt="security"/>
        </div>
         <div className="flex-1 min-w-0">
            <h2 className="text-xl sm:text-sm font-extrabold  text-gray-900 ">
            Robust Security Measures
            </h2>
            <p className="text-xl sm:text-sm text-gray-500 ">
               Security is a top priority. Benefit from our robust security measures that safeguard your data and applications. We adhere to industry best practices, implement encryption standards, and stay proactive in addressing potential vulnerabilities, providing you with peace of mind.
            </p>
         </div>
        
      </div>
   </li>

</ul>
<button class="flex items-center ml-auto bg-violet-800 rounded-md border border-slate-300 py-2 px-4 text-center text-lg transition-all shadow-sm hover:shadow-lg text-white hover:text-black hover:bg-white hover:border-slate-800 focus:text-black  active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                       Ask Now
                    </button>
</span>
    </div>

    <div className='text-5xl border-t-2'>
    <center> 
            <h2 className='font-extrabold text-center  md:py-[5rem] md:px-[15rem]'>
            Unleash Your Potential With Our Offerings!
        </h2>
        </center>

        <div className='grid mb-8 border border-gray-200  text-white rounded-lg shadow-sm md:mb-12 md:grid-cols-3'>
            <span className='bg-violet-600 hover:bg-violet-800 hover:translate-y-0.5  p-5'>
                <center>
                    <img className='md:w-80 md:h-64 sm:w-40 sm:h-32' src={cloud} alt="cloud"/>
                </center>
                <h2 className='md:text-4xl sm:text-lg font-extrabold p-5'>
                    Cloud
                </h2>
                <p className='md:pt-10 md:pb-[10rem] md:text-lg sm:text-sm text-gray-200'>
                Unlock unparalleled scalability, cost savings, and global accessibility, leveraging a secure and reliable infrastructure.
                Embrace agility and speed with rapid deployment of resources, fostering innovation through advanced technologies.
                Cloud computing ensures business continuity, facilitates remote collaboration, and simplifies maintenance, allowing organizations to focus on core activities. Join the cloud era to drive efficiency, enhance competitiveness, and contribute to a sustainable future
                </p>
                <button class="flex items-center ml-auto rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-black hover:bg-white hover:border-slate-800 focus:text-black  active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Read More
                    </button>
            </span>
            <span className='bg-violet-600 hover:bg-violet-800 hover:translate-y-0.5  p-5'>
            <center>
                    <img className='md:w-80 md:h-64 sm:w-40 sm:h-32' src={CICD} alt="cloud"/>
                </center>
                <h2 className='md:text-4xl sm:text-lg font-extrabold  p-5'>
                    CI/CD
                </h2>
                <p className='md:pt-10 md:pb-[10rem] md:text-lg sm:text-sm text-gray-200'>
                Docker simplifies the packaging and distribution of applications, ensuring consistency across diverse environments. Our CI/CD integration leverages powerful tools, streamlining workflows and automating processes for rapid, reliable releases. 
                Unleash the benefits of continuous integration, delivery, and deployment, empowering your team to innovate, collaborate, and stay ahead in the dynamic landscape of modern software development.
                </p>
                <button class="flex items-center ml-auto rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-black hover:bg-white hover:border-slate-800 focus:text-black  active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Read More
                    </button>
            </span>
            <span className='bg-violet-600 hover:bg-violet-800 hover:translate-y-0.5  p-5'>
            <center>
                    <img className='md:w-80 md:h-64 sm:w-40 sm:h-32 ' src={Support} alt="cloud"/>
                </center>
                <h2 className='md:text-4xl font-extrabold  sm:text-lg p-5'>Support</h2>
                <p className='md:pt-10 md:pb-[10rem] md:text-lg sm:text-sm text-gray-200'>
                Whether you're navigating on-premises or hybrid cloud environments, our Linux administration services empower your organization with stability, performance, and a proactive approach to system management.
                Trust us to navigate the complexities of your IT landscape, allowing you to focus on driving innovation and achieving your business goals.
                </p>
                <button class="flex items-center ml-auto rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-black hover:bg-white hover:border-slate-800 focus:text-black  active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Read More
                    </button>
            </span>
        </div>
    </div>

    <TechStack/>

    <div className='bg-violet-800 text-5xl  text-white'>
        <center> 
            <h2 className='font-extrabold text-center  md:py-[5rem] md:px-[15rem]'>
            Transforming Dreams Into Technological Triumphs
        </h2>
        </center>
        
    </div>

    <Contact/>
    </div>
  )
}

export default Service
