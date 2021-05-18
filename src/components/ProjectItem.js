import React from 'react'

export default function ProjectItem({name, stack, info, link, nameSetter, stackSetter, infoSetter, linkSetter}) {
    return (
        <li class="text-xl list-inside" onClick={() => {
            infoSetter(info)
            nameSetter(name)
            stackSetter(stack)
            linkSetter(link)
        }
        }>
            {name}
        </li>
    )
}
