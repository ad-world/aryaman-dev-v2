import React from 'react'

export default function SkillProgressComp({name, info}) {
    return (
        <div class="py-4 lg:py-0 w-5/6 mx-auto">
            <p class="text-2xl">Related Information</p>
            <br></br>
            <p class="text-xl font-semibold mb-2">{name}</p>
            <p class="text-xl bg-grey-light rounded-lg p-2 ">{info}</p>
        </div>
    )
}
