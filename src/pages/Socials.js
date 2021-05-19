import React from 'react'
import Emoji from '../components/Emoji'

import Github from '../img/github.svg'
import Mail from '../img/email.svg'
import Linkedin from '../img/linkedin.svg'

export default function Socials() {
    return (
        <div class=" flex flex-wrap items-center align-middle">
            <div class="w-full flex flex-col p-4 sm:w-full lg:w-full justify-center content-center align-middle">
                <div class="md:w-3/4 sm:w-full flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-1/4 bg-grey-dark object-contain">
                    <p class="text-4xl">I'd love to get in touch! <Emoji label="collision" symbol="💥" /></p>
                    <br></br>
                    <p class="text-2xl">You can find me on:</p>
                    <br></br>
                    <br></br>
                    <div class="grid grid-cols-1 lg:grid-cols-3 text-center bg-white rounded-lg items-center justify-center">
                        <div class="w-1/2 h-1/2 mx-auto">
                            <a href="mailto:a23dhing@uwaterloo.ca" target="_blank" rel="noreferrer">
                                <img src={Mail} class="w-full h-full" alt="email"/>
                            </a>
                        </div>
                        <div class="w-1/2 h-1/2 mx-auto">
                            <a href="https://github.com/ad-world" target="_blank" rel="noreferrer">
                                <img src={Github} class="w-full h-full"  alt="github"/>
                            </a>
                        </div>
                        <div class="w-1/2 h-1/2 mx-auto align-middle">
                            <a href="https://github.com/ad-world" target="_blank" rel="noreferrer">
                                <img src={Linkedin} class="w-full h-full" alt="linkedin"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
