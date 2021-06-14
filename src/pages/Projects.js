import React, { useState } from 'react'
import ProjectItem from '../components/ProjectItem'
import Link from '../img/link.svg'
import Emoji from '../components/Emoji'


export default function Projects() {
    const projects = require('../info/projects.json')

    const [info, setInfo] = useState('Click on a project for more info.')
    const [stack, setStack] = useState(null)
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [activeItem, setActiveItem] = useState(null);


    return (
        <div className=" flex flex-wrap items-start xl:items-center align-middle">
            <div className="w-full flex flex-col p-4 sm:w-full lg:w-full justify-center content-center align-middle">
                <div className="md:w-3/4 sm:w-full flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-1/4 bg-sky-light dark:bg-grey-dark object-contain">
                    <p className="text-4xl"
                        onClick={() => {
                            setInfo('Click on a project for more info.');
                            setStack(null)
                            setName('')
                            setLink('')
                            setActiveItem(null)
                        }}>
                        Completed Projects <Emoji label="complete" symbol="✅" /></p>
                    <br></br>
                    <div className="grid lg:grid-cols-2 w-full grid-cols-1">
                        <div>
                            <p className="text-2xl">Project Names</p>
                            <div className="space-y-2">
                                <ul className="list-disc space-y-1">
                                    {Object.entries(projects).map((key) => {
                                        if (activeItem !== name) {
                                            return (
                                                <ProjectItem
                                                    name={key[0]}
                                                    info={key[1].info}
                                                    stack={key[1].stack}
                                                    link={key[1].link}
                                                    nameSetter={setName}
                                                    infoSetter={setInfo}
                                                    stackSetter={setStack}
                                                    linkSetter={setLink}
                                                    activeSetter={setActiveItem}
                                                    activeItem={activeItem}
                                                />
                                            )
                                        } else {
                                            return (
                                                <ProjectItem
                                                    name={key[0]}
                                                    info={key[1].info}
                                                    stack={key[1].stack}
                                                    link={key[1].link}
                                                    nameSetter={setName}
                                                    infoSetter={setInfo}
                                                    stackSetter={setStack}
                                                    linkSetter={setLink}
                                                    activeItem={activeItem}
                                                    activeSetter={setActiveItem}
                                                />
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                        <div className="py-4 lg:py-0 w-5/6 mx-auto">
                            <p className="text-xl font-semibold">{name}</p>
                            <p className="text-xl bg-white dark:bg-grey-light rounded-lg p-2">{info}</p>
                            <br></br>
                            {stack && (<p className="text-xl font-semibold">Stack</p>)}
                            {stack && stack.map((item) => {
                                return (
                                    <li className="text-xl list-inside">{item}</li>
                                )
                            })}
                            <br>
                            </br>
                            <div>
                                {link && (<a href={link} target="_blank" rel="noreferrer"><img src={Link} height='20' width='20' alt='link'/></a>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
