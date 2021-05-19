import React, { useState } from 'react'

import Emoji from '../components/Emoji'
import InfoItem from '../components/InfoItem'
import SkillProgressComp from '../components/SkillProgressComp'

export default function Socials() {
    const progress = require('../info/progress.json')
    
    const [info, setInfo] = useState('Click on an item for more info.')
    const [name, setName] = useState('');
    const [activeItem, setActiveItem] = useState(null);
    return (
        <div class=" flex flex-wrap items-center align-middle">
            <div class="w-full flex flex-col p-4 sm:w-full lg:w-full justify-center content-center align-middle">
                <div class="md:w-3/4 sm:w-full flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-1/4 bg-grey-dark object-contain">
                    <p class="text-4xl" onClick={() => {
                        setInfo('Click on an item for more info');
                        setActiveItem(null);
                        setName('');
                    }}
                    >In Progress <Emoji label="burger" symbol="🍔"/></p>
                    <br></br>

                    <div class="grid lg:grid-cols-2 w-full grid-cols-1">
                        <div>
                            <p class="text-2xl">These are some things that I am currently doing or working on.</p>
                            <div class="space-y-2">
                                <ul class="list-disc space-y-1">
                                    {Object.entries(progress).map((key) => {
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
                        </div>
                        <SkillProgressComp name={name} info={info}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
