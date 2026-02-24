import React from 'react';
import CaseStudiesCard from './CaseStudiesCard';
import CasestudyHero from './CasestudyHero';
import CasestudyPara from './CasestudyPara';

const Casestudies = () => {
  return (
    <div className='h-full p-2  items-center  flex flex-col  text-white  bg-emerald-950'>
           <CasestudyHero />
           <CasestudyPara />
        <div className='grid grid-cols-3 gap-8   w-[90%]'>
             <CaseStudiesCard head=' Multi-Tenant SaaS Platform' para='Designed and developed a scalable SaaS dashboard with secure authentication, role-based access, and real-time analytics. Built using modern cloud architecture to support thousands of users simultaneously.' />
             <CaseStudiesCard head=' High-Conversion E-Commerce Store' para='Built a fast, SEO-optimized online store with seamless checkout, payment integration, and mobile-first design. Focused on performance and conversion optimization.' />
              <CaseStudiesCard head='📱 Cross-Platform Mobile Application' para='Developed a user-friendly mobile app for Android and iOS with smooth performance, intuitive UI, and scalable backend APIs for future growth.' />
               <CaseStudiesCard head='Custom Business Web Application
' para='Created a feature-rich web application to streamline business operations, automate workflows, and improve productivity through centralized data management.' />
                  <CaseStudiesCard head='' para='' />
                     <CaseStudiesCard head='' para='' />
                        <CaseStudiesCard head='' para='' />
        </div>
     
     
    </div>
  );
}

export default Casestudies;
