import React from 'react'

import Emoji from '../components/Emoji'

export default function About() {
    return (
        <div className=" flex flex-wrap items-start items-center align-middle transition duration-300">
            <div className="w-full flex flex-col p-4 sm:w-full lg:w-full justify-center content-center align-middle">
                <div className="md:w-3/4 sm:w-full flex-1 px-5 py-6 rounded-lg shadow-lg h-1/4 bg-sky-light dark:bg-grey-dark object-contain">
                    <p className="text-4xl">A little bit about me <Emoji label="about" symbol="🙋‍♂️" /></p>
                    <div className="p-4 m-4 bg-white dark:bg-grey-light rounded-lg">
                        <p className="text-xl">I'm a Computer Science student at the University of Waterloo.</p>
                        <p className="text-xl">I will be going into my second year in Fall 2021.</p>
                        <br></br>
                        <p className="text-xl">I was born and raised in the United Arab Emirates!</p>
                        <br></br>
                        <p className="text-xl">
                            I chose computer science because logic and objectivity have always been extremely appealing to me,
                            all the way through grade school, extracurriculars, and other experiences, and I felt that computer science was the
                            program that perfectly encompassed my passion for creating logical and efficient solutions to problems. </p>
                        <br></br>
                        <p className="text-xl">
                            I'm quite a big sports fan - I spend quite a bit of my free time watching soccer games and F1 races. I also
                            grew up playing soccer, but I haven't been able to play that much recently given the pandemic. I also endeavour
                            in the daily chai run and I like exploring new coffee places in Dubai. <Emoji label="coffee" symbol="☕"/> 
                        </p>
                        <br></br>
                        <p className="text-xl">
                            Anyways, I'd love to connect! Go to the "Say Hello" section to see where you can find me.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
