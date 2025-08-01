import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-lg xs:text-lg">{type}</h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {place}
            </span>
            <p className="font-medium w-full md:text-sm">
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details 
                        type="Bachelor of Technology In Computer Science"
                        time="2023-present"
                        place="Delhi Skill and Entrepreneurship University (DSEU)"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence."
                    />
                    <Details 
                        type="Data Structures in Java"
                        time="2024"
                        place="Apna College"
                        info="Completed data-structures coursework in advanced topics such as Data Structures and Algorithms."
                    />
                    <Details 
                        type="Full Stack Web Development"
                        time="2023"
                        place="Apna College"
                        info="Completed web-development coursework in advanced topics such as ReactJS, NextJS 
                        and Database Integration."
                    />
                    <Details 
                        type="High School/Secondary Certificate Programs"
                        time="2014-2022"
                        place="Basava International School"
                        info="Completed my Secondary Program with enhancing my knowledge in Python and MySQL."
                    />
                
                </ul>
            </div>
        </div>
    )
}

export default Education