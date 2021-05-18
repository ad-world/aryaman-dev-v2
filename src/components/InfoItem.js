import React from 'react'

export default function InfoItem({ name, info, nameSetter, infoSetter, activeSetter, activeItem }) {

    if (activeItem === name) {
        return (
            <li class="text-xl list-inside bg-grey-light mx-2 px-2 rounded-lg" onClick={() => {
                infoSetter(info)
                nameSetter(name)
                activeSetter(name)
            }
            }>
                {name}
            </li>
        )
    } else {
        return (
            <li class="text-xl list-inside hover:underline" onClick={() => {
                infoSetter(info)
                nameSetter(name)
                activeSetter(name)
            }
            }>
                {name}
            </li>
        )
    }

}
