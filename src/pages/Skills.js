import React, { useState } from 'react'
import InfoItem from '../components/InfoItem'

export default function Socials() {

    const python = ['Python', `Learning python was my first real programming experience. 
    I started to learn it after a friend recommended that I check it out.
    The first thing I built was a GPA calculator in the 9th grade.`]

    const c = ['C', `I learnt the basics and some advanced concepts of C in a course at the University of Waterloo
    titled: Elementary Algorithm Design and Data Abstraction. I had a lot of fun doing an assignment that involed
    created a calculator for Big Ints.`]

    const skills = require('../info/skills.json')

    const tools = require('../info/tools.json')


    const [info, setInfo] = useState('Click on a skill for more info.')
    const [name, setName] = useState('');
    return (
        <div class=" flex flex-wrap items-center align-middle">
            <div class="w-full flex flex-col p-4 sm:w-full lg:w-full justify-center content-center align-middle">
                <div class="md:w-3/4 sm:w-full flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-1/4 bg-grey-dark object-contain">
                    <p class="text-4xl">Skills + Proficiencies</p>
                    <br></br>

                    <div class="grid grid-cols-2 w-full">
                        <div>
                            <p class="text-2xl">Languages</p>
                            <div class="space-y-2">
                                <ul class="list-disc">
                                    {Object.entries(skills).map((key) => {
                                        return <InfoItem
                                            name={key[0]}
                                            info={key[1]}
                                            nameSetter={setName}
                                            infoSetter={setInfo}
                                        />
                                    })}
                                </ul>
                            </div>
                            <br></br>
                            <p class="text-2xl">Tools</p>
                            <div class="space-y-2">
                                <ul class="list-disc">
                                    {Object.entries(tools).map((key) => {
                                        return <InfoItem
                                            name={key[0]}
                                            info={key[1]}
                                            nameSetter={setName}
                                            infoSetter={setInfo}
                                        />
                                </ul>
                            </div>
                        </div>
                        <div class="">
                            <p class="text-2xl">Related Information</p>
                            <br></br>
                            <p class="text-xl font-semibold">{name}</p>
                            <p class="text-xl">{info}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
