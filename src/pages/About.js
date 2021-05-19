import React from 'react'

import Emoji from '../components/Emoji'

export default function About() {
    return (
        <div class=" flex flex-wrap items-center align-middle">
            <div class="w-full flex flex-col p-4 sm:w-full lg:w-full justify-center content-center align-middle">
                <div class="md:w-3/4 sm:w-full flex-1 px-5 py-6 rounded-lg shadow-lg sm:h-1/4 md:h-1/4 bg-grey-dark object-contain">
                    <p class="text-4xl">A little bit about me <Emoji label="about" symbol="🙋‍♂️" /></p>
                    <div class="p-4 m-4 bg-grey-light rounded-lg">
                        <p class="text-xl">I'm a Computer Science student at the University of Waterloo.</p>
                        <p class="text-xl">I will be going into my second year in Fall 2021.</p>
                        <br></br>
                        <p class="text-xl">I was born in raised in the United Arab Emirates!</p>
                        <br></br>
                        <p class="text-xl">
                            I chose computer science because logic and objectivity have always been extremely appealing to me,
                            all the way through grade school, extracurriculars, and other experiences, and I felt that computer science was the
                            program that perfectly encompassed my passion for creating logical and efficient solutions to problems. </p>
                        <br></br>
                        <p class="text-xl">
                            I'm quite a big sports fan - I spend quite a bit of my free time watching soccer games and F1 races. I also
                            grew up playing soccer, but I haven't been able to play that much recently given the pandemic. I also endeavour
                            in the daily chai run and I like exploring new coffee places in Dubai. <Emoji label="coffee" symbol="☕"/> 
                        </p>
                        <br></br>
                        <p class="text-xl">
                            Anyways, I'd love to connect! Go to the "Say Hello" section to see where you can find me.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
