import React from 'react'

export default function ProjectItem({ name, stack, info, link, nameSetter, stackSetter, infoSetter, linkSetter, activeSetter, activeItem }) {

    if (activeItem === name) {
        return (
            <li className="text-xl list-inside bg-sky-dark dark:bg-grey-light px-2 rounded-lg" key={name} onClick={() => {
                infoSetter(info)
                nameSetter(name)
                stackSetter(stack)
                linkSetter(link)
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
                stackSetter(stack)
                linkSetter(link)
                activeSetter(name)
            }
            }>
                {name}
            </li>
        )
    }
}
