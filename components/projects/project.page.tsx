"use client"
import React from 'react'
import Project from './Project'

const pjArr = Array.from({length: 4}, (_, i) => i);

const ProjectsPage = () => {
  return (
    <section className='h-[calc(100vh-48px)]  max-w-[80rem] mx-auto'>
       <h2 className='text-2xl font-semibold text-white text-center my-4'>Featured Projects</h2>
       <div className='flex flex-wrap gap-10 w-full'>
       {
            pjArr.map((p,i)=>(
                <Project key={i} indx={i}/>
            ))
        }
       </div>
    </section>
  )
}

export default ProjectsPage