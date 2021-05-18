import React from 'react'

export default function ProjectItem({ name, stack, info, link, nameSetter, stackSetter, infoSetter, linkSetter, activeSetter, activeItem }) {

    if (activeItem === name) {
        return (
            <li class="text-xl list-inside bg-grey-light mx-2 px-2 rounded-lg" onClick={() => {
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
            <li class="text-xl list-inside hover:underline" onClick={() => {
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
