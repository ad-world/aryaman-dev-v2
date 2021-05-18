import React, { useState } from 'react'
import ProjectItem from '../components/ProjectItem'
import Link from '../img/link.svg'

export default function Projects() {
    const projects = require('../info/projects.json')

    const [info, setInfo] = useState('Click on a project for more info.')
    const [stack, setStack] = useState(null)
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    return (
        <div class=" flex flex-wrap items-center align-middle">
            <div class="w-full flex flex-col p-4 sm:w-full lg:w-full justify-center content-center align-middle">
                <div class="md:w-3/4 sm:w-full flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-1/4 bg-grey-dark object-contain">
                    <p class="text-4xl">Completed Projects</p>
                    <br></br>

                    <div class="grid grid-cols-2 w-full">
                        <div>
                            <p class="text-2xl">Project Names</p>
                            <div class="space-y-2">
                                <ul class="list-disc space-y-1">
                                    {Object.entries(projects).map((key) => {
                                        return <ProjectItem
                                            name={key[0]}
                                            info={key[1].info}
                                            stack={key[1].stack}
                                            link={key[1].link}
                                            nameSetter={setName}
                                            infoSetter={setInfo}
                                            stackSetter={setStack}
                                            linkSetter={setLink}
                                        />
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div class="">
                            <p class="text-2xl">Related Information</p>
                            <br></br>
                            <p class="text-xl font-semibold">{name}</p>
                            <p class="text-xl">{info}</p>
                            <br></br>
                            {stack && (<p class="text-xl font-semibold">Stack</p>)}
                            {stack && stack.map((item) => {
                                return (
                                    <li class="text-xl list-inside">{item}</li>
                                )
                            })}
                            <br>
                            </br>
                            <div>
                                {link && (<a href={link} target="_blank" rel="noreferrer"><img src={Link} height='20' width='20'/></a>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
