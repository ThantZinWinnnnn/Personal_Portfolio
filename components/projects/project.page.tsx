"use client"
import React from 'react'
import Project from './Project'
import Container from '../utils/Container';
import {projectsData} from '../utils/data';

const pjArr = Array.from({length: 4}, (_, i) => i);
import {motion} from "framer-motion";
import {projectContainer} from "@/components/utils/anim";

const ProjectsPage = () => {
    return (
        <Container>
            <h2 className='text-2xl font-semibold text-white text-center mt-4 mb-12 uppercase font-poppins'>Featured
                Projects</h2>
            <motion.div initial={"hidden"}
                        whileInView={"visible"}
                        variants={projectContainer}
                        className='flex flex-wrap gap-y-14 lg:gap-x-10 w-full flex-col lg:flex-row overflow-hidden'>
                {
                    projectsData.map((p, i) => (
                        <Project key={i} indx={i} project={p}/>
                    ))
                }
            </motion.div>
        </Container>
    )
}

export default ProjectsPage