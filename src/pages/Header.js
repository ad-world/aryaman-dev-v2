import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div class="max-w-screen-xl mx-auto px-4 flex items-center lg:h-screen">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4">
                    <div class="flex-1 px-5 py-6 bg-white rounded-lg shadow-lg sm:h-1/4 md:h-full bg-grey-dark" >
                        <p class="text-4xl">About me</p>
                    </div>
                </div>
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/2">
                    <Link to="/">
                        <div class="flex-1 px-5 py-6 bg-white rounded-lg shadow-lg bg-grey-dark" >
                            <p class="text-4xl">Hi, I'm Aryaman. </p>
                            <br></br>
                            <p class="text-xl">I'm a Computer Science student at the University of Waterloo.</p>
                            <p class="text-xl">I will be going into my second year in Fall 2021.</p>
                            <p class="text-xl">Navigate through this page to learn a little bit more about me!</p>
                            <br></br>
                        </div>
                    </Link>
                </div>
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4">
                    <div class="flex-1 px-5 py-6 bg-white rounded-lg shadow-lg bg-grey-dark">
                        <p class="text-4xl">Socials</p>
                    </div>
                </div>
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4">
                    <div class="flex-1 px-5 py-6 bg-white rounded-lg shadow-lg bg-grey-dark">
                        <p class="text-4xl">Skills and Proficiencies</p>
                    </div>
                </div>
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4">
                    <div class="flex-1 px-5 py-6 bg-white rounded-lg shadow-lg sm:h-1/4 md:h-full bg-grey-dark">
                        <p class="text-4xl">Completed Projects</p>
                        <p class="text-xl">View a list + description of the projects that I have stopped working on</p>
                        <p class="text-xl"> (for now!)</p>
                    </div>
                </div>
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4">
                    <div class="flex-1 px-5 py-6 bg-white rounded-lg shadow-lg bg-grey-dark">
                        <p class="text-4xl">Currently working on...</p>
                    </div>
                </div>
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4">
                    <div class="flex-1 px-5 py-6 bg-white rounded-lg shadow-lg bg-blue-light">
                        <p class="text-4xl">Resume</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
