import React from 'react'

export default function SkillProgressComp({name, info}) {
    return (
        <div className="py-4 lg:py-0 w-5/6 mx-auto">
            <p className="text-xl font-semibold mb-2">{name}</p>
            <p className="text-xl bg-grey-light rounded-lg p-2">{info}</p>
        </div>
    )
}
