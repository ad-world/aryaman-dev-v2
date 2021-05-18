import React from 'react'

export default function Socials() {
    return (
        <div class=" flex flex-wrap items-center align-middle">
            <div class="w-full flex flex-col p-4 sm:w-full lg:w-full justify-center content-center align-middle">
                <div class="md:w-3/4 sm:w-full flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-1/4 bg-grey-dark object-contain">
                    <p class="text-4xl">Get in touch</p>
                    <br></br>
                    <p class="text-2xl">You can find me on:</p>
                    <br></br>
                    <br></br>
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 space-x-4 px-4 text-center">
                        <div>
                            Email
                        </div>
                        <div>
                            Github
                        </div>
                        <div>
                            LinkedIn
                        </div>
                        <div>
                            Instagram
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
