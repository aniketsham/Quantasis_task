import React from 'react'
import google from "../images/google.png";
import helm from "../images/helm.png";
import ansible from "../images/ansible.png";
import kubernetes from "../images/kubernetes.png";
import digitalOcean from "../images/digitalocean.png";
import terraform from "../images/terraform.png";
import docker from "../images/docker.png";
import azure from "../images/azure.png";
import AWS from "../images/AWS.png";
import openVpn from "../images/openvpn.png";
import L from "../images/L.png";
import github from "../images/github.png";

const TechStack = () => {

    const techStack=[
        docker,
        ansible,
        kubernetes,
        github,
        azure,
        AWS,
        L,
        digitalOcean,
        openVpn,
        terraform,
        helm,
        google,
    ]
    
  return (
    <div className=''>
        <center>
            <h2 className='text-violet-600 md:text-5xl sm:text-xl font-extrabold'>
                Technology Stack
            </h2>

            </center>

            <div class="grid grid-cols-7 gap-4 p-4 md:px-[10rem] md:py-[10rem]">
                {
                    techStack.map((imgSrc,index)=>(
                     <div key={index} className='border-2 border-violet-600 transition-all duration-200 hover:outline hover:outline-2 hover:outline-violet-600 rounded-lg p-2 flex justify-center items-center'>
                     <img src={imgSrc} className='h-16' alt=""/>
                 </div>
                    ))
                }
                
</div>


        
    </div>
  )
}

export default TechStack
