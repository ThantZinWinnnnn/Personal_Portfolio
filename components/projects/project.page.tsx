"use client"
import React from 'react'
import Project from './Project'
import Container from '../utils/Container';

const pjArr = Array.from({length: 4}, (_, i) => i);

const ProjectsPage = () => {
  return (
  <Container>
      <h2 className='text-2xl font-semibold text-white text-center mt-4 mb-12 uppercase'>Featured Projects</h2>
       <div className='flex flex-wrap gap-y-14 lg:gap-x-10 w-full flex-col lg:flex-row'>
       {
            pjArr.map((p,i)=>(
                <Project key={i} indx={i}/>
            ))
        }
       </div>
    </Container>
  )
}

export default ProjectsPage