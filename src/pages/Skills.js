import React, { useState } from 'react'

import Emoji from '../components/Emoji'
import InfoItem from '../components/InfoItem'
import SkillProgressComp from '../components/SkillProgressComp'

export default function Socials() {
    const skills = require('../info/skills.json')
    const tools = require('../info/tools.json')

    const [info, setInfo] = useState('Click on a skill for more info.')
    const [name, setName] = useState('');
    const [activeItem, setActiveItem] = useState(null);
    return (
        <div class=" flex flex-wrap items-center align-middle">
            <div class="w-full flex flex-col p-4 sm:w-full lg:w-full justify-center content-center align-middle">
                <div class="md:w-3/4 sm:w-full flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-1/4 bg-grey-dark object-contain">
                    <p class="text-4xl"
                        onClick={() => {
                            setInfo('Click on a skill for more info.')
                            setName('');
                            setActiveItem(null);
                        }}>Tech Stack <Emoji label="burger" symbol="🍔" /></p>
                    <br></br>

                    <div class="grid lg:grid-cols-2 w-full grid-cols-1">
                        <div>
                            <p class="text-2xl">Languages</p>
                            <div class="space-y-2">
                                <ul class="list-disc space-y-1">
                                    {Object.entries(skills).map((key) => {
                                        return <InfoItem
                                            name={key[0]}
                                            info={key[1]}
                                            nameSetter={setName}
                                            infoSetter={setInfo}
                                            activeSetter={setActiveItem}
                                            activeItem={activeItem}
                                        />
                                    })}
                                </ul>
                            </div>
                            <br></br>
                            <p class="text-2xl">Tools</p>
                            <div class="space-y-2">
                                <ul class="list-disc space-y-1">
                                    {Object.entries(tools).map((key) => {
                                        return <InfoItem
                                            name={key[0]}
                                            info={key[1]}
                                            nameSetter={setName}
                                            infoSetter={setInfo}
                                            activeSetter={setActiveItem}
                                            activeItem={activeItem}
                                        />
                                    })}
                                </ul>
                            </div>
                        </div>
                        <SkillProgressComp name={name} info={info} />
                    </div>
                </div>
            </div>
        </div>
    )
}
