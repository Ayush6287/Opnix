import React from 'react';
import ServicesHeading from './ServicesHeading';
import ServicesPara from './ServicesPara';
import ServicesCard from './ServicesCard';
import webdev from '../../../assets/Web Development.png'
import mobileapp from '../../../assets/mobileapp.jpg'
import webapp from '../../../assets/webapp.svg'
import saas from '../../../assets/saas.svg'
import bugfix from '../../../assets/buf.svg'
import Frontend from '../../../assets/ecom.svg'
import  Backend from '../../../assets/realtime.svg'
import FullStack from '../../../assets/landingpage.svg'
import ui from '../../../assets/ui.svg'
import server from '../../../assets/server.svg'
const ServicesSection = () => {
    return (
        <div className='h-max flex flex-col  rounded-[20px]  p-12 justify-center  bg-white   text-black bg-[repeating-linear-gradient(22.5deg,transparent,transparent_2px,rgba(75,85,99,0.06)_2px,rgba(75,85,99,0.06)_3px,transparent_3px,transparent_8px),repeating-linear-gradient(67.5deg,transparent,transparent_2px,rgba(107,114,128,0.05)_2px,rgba(107,114,128,0.05)_3px,transparent_3px,transparent_8px),repeating-linear-gradient(112.5deg,transparent,transparent_2px,rgba(55,65,81,0.04)_2px,rgba(55,65,81,0.04)_3px,transparent_3px,transparent_8px),repeating-linear-gradient(157.5deg,transparent,transparent_2px,rgba(31,41,55,0.03)_2px,rgba(31,41,55,0.03)_3px,transparent_3px,transparent_8px)]     items-center '>
            <div className='h-max px-2 py-5 mb-7 flex flex-col items-center text-center  justify-center'>
                <ServicesHeading />
                <ServicesPara />
            </div>
            
                <div className='  '>

                    <div className='sm:grid grid grid-row-4   sm:grid-cols-3 gap-6 md:grid md:grid-cols-2  w-full h-max items-center justify-center lg:grid lg:grid-cols-3 '>
                        <ServicesCard img={webdev} head='Custom Web Development Solutions ' para='We build fast, secure, and scalable websites tailored to your business goals. From landing pages to complex platforms, our solutions are optimized for performance, SEO, and user experience' />


                        <ServicesCard img={mobileapp} head='Mobile App Development Services' para='Transform your ideas into powerful mobile applications for Android and iOS. We deliver high-performance apps with intuitive design, robust architecture, and seamless user experience.' />

                        <ServicesCard head='User-Focused UI Design' para='We design clean, modern interfaces that enhance usability and engagement. Our UI solutions combine aesthetics with functionality to create memorable digital experiences.'img={ui} />
                   
                    
                        <ServicesCard head='Scalable SaaS Product Development' 
                         para='Launch and grow your Software-as-a-Service platform with confidence. We design cloud-ready SaaS solutions with multi-tenant architecture, high availability, and future-proof scalability.' img={saas} />
                       

                   
              


                    
                        <ServicesCard head='Server Setup & Cloud Deployment'

                         para='We configure secure servers and deploy your applications to the cloud with zero downtime. Our solutions ensure reliability, scalability, and smooth production performance.'img={server} />

                        <ServicesCard head='Modern Frontend Development' para='Deliver stunning user interfaces with responsive design and smooth interactions. We craft fast, accessible, and visually engaging frontends using the latest technologies.' img={Frontend} />

                   
                        <ServicesCard head='Robust Backend Development'
                         para='Power your applications with secure APIs, efficient databases, and scalable architecture. We build backend systems designed to handle real-world traffic and data.' img={Backend}  />
                        <ServicesCard head='End-to-End Full Stack Solutions' para='From UI to server infrastructure, we handle the complete development lifecycle. Our full stack expertise ensures seamless integration, performance, and scalability.'img={FullStack} />
                        
                        <ServicesCard head='Web Applications' para='We create dynamic, feature-rich web applications that run smoothly across all devices. Our web apps are secure, scalable, and built for real-world business operations.' img={webapp} />
                   
                </div>




            </div>
        </div>
    );
}

export default ServicesSection;
