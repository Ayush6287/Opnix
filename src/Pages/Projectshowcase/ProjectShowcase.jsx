import React from 'react';
import Primage from "../../assets/primg.png"
const ProjectShowcase = () => {
  return (
    <div className='flex flex-row justify-evenly h-max p-12 w-full bg-black text-white items-center px-20'>
        <div>
            <h2 className='text-4xl font-bold mb-4'>Projects That Demonstrate Our Capabilities</h2>
            <p className=' max-w-[500px] '>We focus on building modern, scalable digital products that combine strong engineering with thoughtful design.
From SaaS dashboards to high-performance web applications, our projects demonstrate how we turn ideas into reliable and user-friendly digital solutions..</p>
            <button className='px-6 py-3 bg-lime-400 mt-5  text-black font-bold hover:bg-lime-500'>View Project Details <span className='animate-pulse text-xl'> ↗</span></button>
        </div>
      <div>
       <img src={Primage} alt="Project Showcase" className= ' rounded-3xl w-[700px]' />
      </div>
    </div>
  );
}

export default ProjectShowcase;
