import React, { useState } from 'react'

import Emoji from '../components/Emoji'
import InfoItem from '../components/InfoItem'
import SkillProgressComp from '../components/SkillProgressComp'

export default function Progress() {
    const progress = require('../info/progress.json')
    
    const [info, setInfo] = useState('Click on an item for more info.')
    const [name, setName] = useState('');
    const [activeItem, setActiveItem] = useState(null);
    return (
        <div className=" flex flex-wrap items-start items-center align-middle transition duration-300">
            <div className="w-full flex flex-col p-4 sm:w-full lg:w-full justify-center content-center align-middle">
                <div className="md:w-3/4 sm:w-full flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-1/4 bg-sky-light dark:bg-grey-dark object-contain">
                    <p className="text-4xl" onClick={() => {
                        setInfo('Click on an item for more info');
                        setActiveItem(null);
                        setName('');
                    }}
                    >In Progress <Emoji label="though" symbol="💭"/></p>
                    <br></br>

                    <div className="grid lg:grid-cols-2 w-full grid-cols-1">
                        <div>
                            <p className="text-2xl">These are some things that I am currently doing or working on.</p>
                            <div className="space-y-2">
                                <ul className="list-disc space-y-1">
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
