import React from 'react'

export default function InfoItem({ name, info, nameSetter, infoSetter, activeSetter, activeItem }) {

    if (activeItem === name) {
        return (
            <li className="text-xl list-inside bg-sky-dark dark:bg-grey-light px-2 rounded-lg" key={name} onClick={() => {
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
            <li className="text-xl list-inside hover:underline" key={name} onClick={() => {
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
