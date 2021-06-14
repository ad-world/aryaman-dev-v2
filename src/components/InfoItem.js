import React from 'react'

export default function InfoItem({ name, info, nameSetter, infoSetter, activeSetter, activeItem }) {

    if (activeItem === name) {
        return (
            <li className="text-xl list-inside bg-grey-light px-2 rounded-lg" onClick={() => {
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
            <li className="text-xl list-inside hover:underline" onClick={() => {
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
