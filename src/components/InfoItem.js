import React from 'react'

export default function InfoItem({name, info, nameSetter, infoSetter}) {
    return (
        <li class="text-xl list-inside" onClick={() => {
            infoSetter(info)
            nameSetter(name)}
        }>
            {name}
        </li>
    )
}
