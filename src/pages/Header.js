import React from 'react'
import { Link } from 'react-router-dom'
import Github from '../img/github.svg';

export default function Header() {
    return (
        <div class="max-w-screen-xl mx-auto px-4 flex items-center lg:h-screen ">
            <div class="-mx-4 flex flex-wrap">

                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/2">
                    <div class="flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-full bg-grey-dark">
                        <p class="text-4xl">Hi, I'm Aryaman. </p>
                        <br></br>
                        <p class="text-xl">I'm a Computer Science student at the University of Waterloo.</p>
                        <p class="text-xl">I will be going into my second year in Fall 2021.</p>
                        <br></br>
                        <p class="text-xl">Navigate through this page to learn a little bit more about me!</p>
                        <br></br>
                    </div>
                </div>
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4 ">
                    <Link to="/socials" class="w-full flex flex-col h-full">
                        <div class="flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-full bg-grey-dark hover:bg-blue-light transition duration-300">
                            <p class="text-4xl">Say Hello</p>
                        </div>
                    </Link>
                </div>
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4">
                    <a href="https://github.com/ad-world" target="_blank" rel="noreferrer" class="w-full flex flex-col h-full">
                        <div class="flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-full bg-blue-light hover:bg-blue-dark transition duration-300 align-middle my">
                            <div class="h-3/4 w-3/4 flex justify-center mx-auto align-middle inline-block">
                                <img src={Github} class="mx-auto" />
                            </div>
                        </div>
                    </a>
                </div>
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4">
                    <Link to="/skills" class="w-full flex flex-col h-full">
                        <div class="flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-full bg-grey-dark hover:bg-blue-light transition duration-300">
                            <p class="text-4xl">Skills</p>
                        </div>
                    </Link>
                </div>
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4">
                    <Link to="/projects" class="w-full flex flex-col h-full">
                        <div class="flex-1 px-5 py-6  rounded-lg shadow-lg sm:h-1/4 md:h-full bg-grey-dark hover:bg-blue-light transition duration-300">
                            <p class="text-4xl">Completed Projects</p>
                            <br></br>
                            <p class="text-xl">View a list + description of the projects that I have completed (for now!)</p>
                        </div>
                    </Link>
                </div>
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4">
                    <Link to="/progress" class="w-full flex flex-col h-full">
                        <div class="flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-full bg-grey-dark hover:bg-blue-light transition duration-300">
                            <p class="text-4xl">Currently working on...</p>
                        </div>
                    </Link>
                </div>
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4">
                    <Link to="/resume" class="w-full flex flex-col h-full">
                        <div class="flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-full bg-blue-light hover:bg-blue-dark transition duration-300">
                            <p class="text-4xl">Resume</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
