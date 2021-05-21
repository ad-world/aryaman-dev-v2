import React, { useState } from 'react'
import About from './About'
import Socials from './Socials'
import Skills from './Skills'
import Projects from './Projects'
import Progress from './Progress'

import Emoji from '../components/Emoji'
import Resume from './Aryaman_Dhingra_Resume.pdf'


export default function Header() {
    const [current, setCurrent] = useState(<About />);
    return (
        <div class="md:grid md:grid-cols-2 lg:divide-x md:divide-y-8 divide-none visible">
            <div class="w-3/4 mx-auto px-4 flex items-center lg:h-screen md:h-auto">
                <div class="-mx-4 flex flex-wrap">
                    <div class="w-full flex flex-col p-4 w-full nice-cursor">
                        <div class="flex-1 px-5 py-6 rounded-lg shadow-lg h-1/4 md:h-1/4 bg-grey-dark object-contain hover:bg-blue-light transition duration-300"
                            onClick={() => setCurrent(<About />)}>
                            <p class="text-4xl">Hi, I'm Aryaman. <Emoji label="wave" symbol="👋" /></p>
                            <br></br>
                            <p class="text-xl">I'm a Computer Science student at the University of Waterloo.</p>
                            <p class="text-xl">I will be going into my second year in Fall 2021.</p>
                            <br></br>
                            <p class="text-xl">Navigate through this page to learn a little bit more about me!</p>
                        </div>
                    </div>
                    <div class="w-full flex flex-col p-4 w-full xl:w-1/2 nice-cursor">
                        <div class="flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-full bg-grey-dark hover:bg-blue-light transition duration-300"
                            onClick={() => setCurrent(<Socials />)}>
                            <p class="text-4xl">Say Hello!</p>
                        </div>
                    </div>
                    <div class="w-full flex flex-col p-4 w-full xl:w-1/2 nice-cursor">
                        <div class="flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-full bg-grey-dark hover:bg-blue-light transition duration-300"
                            onClick={() => setCurrent(<Progress />)}>
                            <p class="text-4xl">
                                Currently working on...
                            </p>
                        </div>
                    </div>
                    <div class="w-full flex flex-col p-4 w-full xl:w-1/2 nice-cursor">
                        <div class="flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-full bg-grey-dark hover:bg-blue-light transition duration-300"
                            onClick={() => setCurrent(<Skills />)}>
                            <p class="text-4xl">Tech Stack</p>
                        </div>
                    </div>
                    <div class="w-full flex flex-col p-4 w-full xl:w-1/2 nice-cursor">
                        <div class="flex-1 px-5 py-6  rounded-lg shadow-lg sm:h-1/4 md:h-full bg-grey-dark hover:bg-blue-light transition duration-300"
                            onClick={() => setCurrent(<Projects />)}>
                            <p class="text-4xl">Completed Projects</p>
                            <br></br>
                            <p class="text-xl">View a list + description of the projects that I have completed (for now!)</p>
                        </div>

                    </div>
                    <div class="w-full flex flex-col p-4 w-full xl:w-1/2 nice-cursor">
                        <a href="https://github.com/ad-world" target="_blank" rel="noreferrer" class="h-full">
                            <div class="flex-1 px-5 py-6 rounded-lg shadow-lg h-full bg-blue-light hover:bg-blue-dark transition duration-300">
                                <p class="text-4xl">Github</p>
                            </div>
                        </a>
                    </div>
                    <div class="w-full flex flex-col p-4 w-full xl:w-1/2 nice-cursor">
                        <a href={Resume} target="_blank" rel="noreferrer" class="">
                            <div class="flex-1 px-5 py-6 rounded-lg shadow-lg h-full bg-blue-light hover:bg-blue-dark transition duration-300">
                                <p class="text-4xl">Resume</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {current}
        </div>

    )
}
