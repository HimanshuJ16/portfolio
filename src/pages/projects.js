import AnimatedText from "@/components/AnimatedText";
import GithubIcon from "@/components/Githubicon";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/5.jpg"
import project2 from "../../public/images/projects/2.jpg"
import project3 from "../../public/images/projects/3.jpg"
import project4 from "../../public/images/projects/4.jpg"
import project5 from "../../public/images/projects/6.jpg"
import project6 from "../../public/images/projects/7.jpg"
import project7 from "../../public/images/projects/8.jpg"
import project8 from "../../public/images/projects/9.jpg"
import project9 from "../../public/images/projects/10.jpg"
import project10 from "../../public/images/projects/11.jpg"
import project11 from "../../public/images/projects/12.jpg"
import project12 from "../../public/images/projects/13.jpg"
import project13 from "../../public/images/projects/14.jpg"
import project14 from "../../public/images/projects/15.jpg"
import project15 from "../../public/images/projects/16.jpg"
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}/>
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">Visit</Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6"><GithubIcon /></Link>                 
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                    <title>Himanshu's | Projects Page</title>
                    <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout classname="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                            title="SaaS Website Builder"
                            img={project12}
                            summary="A Full Enterprise Level website using NextJs14, Tailwind CSS, Stripe Connect, Prisma & MySQL including features like
                            🏢 Agency and Sub accounts,
                            🌐 Unlimited funnel hosting,
                            🚀 Full Website & Funnel builder,
                            💰 Custom Dashboards,
                            📊 Media Storage,
                            📂 Project management system,
                            ☀️ Light & Dark mode,
                            📄 Functioning landing page."
                            link="https://himanshuj16.github.io/comingsoon/"
                            github="https://github.com/HimanshuJ16/plura"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                            title="Spotlight Portfoiio Project"
                            img={project15}
                            summary="A MERN Stack website Using ReactJs, Node Js, ExpressJs, MongoDB, JWT and Stripe payment gateway with modern UI/UX design. "
                            link="https://test-profile-virid-rho.vercel.app/"
                            github="https://github.com/HimanshuJ16/test-profile"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                            title="Video Conferencing App"
                            img={project14}
                            summary="A MERN Stack website Using ReactJs, Node Js, ExpressJs, MongoDB, JWT and Stripe payment gateway with modern UI/UX design. "
                            link="https://yoom-six.vercel.app/"
                            github="https://github.com/HimanshuJ16/yoom"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                            title="IPhone 15 Pro Project"
                            img={project13}
                            summary="A MERN Stack website Using ReactJs, Node Js, ExpressJs, MongoDB, JWT and Stripe payment gateway with modern UI/UX design. "
                            link="https://iphone15pro-hazel.vercel.app/"
                            github="https://github.com/HimanshuJ16/iphone15pro"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                            title="Doctor Appointment Booking Website"
                            img={project11}
                            summary="A MERN Stack website Using ReactJs, Node Js, ExpressJs, MongoDB, JWT and Stripe payment gateway with modern UI/UX design. "
                            link="https://clinic-frontend-theta.vercel.app/"
                            github="https://github.com/HimanshuJ16/clinic-latest"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                            title="Apple Vision Pro Project"
                            img={project5}
                            summary="A animation-rich website using HTML, CSS, Gsap Library, Locomotive JS, Scroll Trigger & Canvas. 
                            It use canvas and locomotive scroll trigger which gives a website a 3D look. (For best experience view in Desktop mode only)"
                            link="https://himanshuj16.github.io/apple-vision-clone/"
                            github="https://github.com/HimanshuJ16/apple-vision-clone"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                            title="NodeJs Project (Login System)"
                            img={project9}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="https://intellicity.onrender.com/"
                            github="https://github.com/HimanshuJ16/intellicity"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                            title="ReactJS Project"
                            img={project10}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="https://himanshuj16.github.io/ochi/"
                            github="https://github.com/HimanshuJ16/ochi"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                            title="Animation Project"
                            img={project6}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="https://himanshuj16.github.io/animation-project/"
                            github="https://github.com/HimanshuJ16/animation-project"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                            title="UI/UX Project"
                            img={project7}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="https://himanshuj16.github.io/duo-studio/"
                            github="https://github.com/HimanshuJ16/duo-studio"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-12">
                        <FeaturedProject
                            title="Animated Website Project"
                            img={project4}
                            summary="A animation-rich website using HTML, CSS, Gsap Library. It uses cursor animation and scroll-trigger function for best user experience. (For best experience view in Desktop mode only)"
                            link="https://himanshuj16.github.io/gsap-project/"
                            github="https://github.com/HimanshuJ16/gsap-project"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                            title="Loader Page Project"
                            img={project8}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="https://himanshuj16.github.io/abc-agency/"
                            github="https://github.com/HimanshuJ16/abc-agency"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                            title="Canvas Project"
                            img={project1}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="https://himanshuj16.github.io/canvas-project/"
                            github="https://github.com/HimanshuJ16/canvas-project"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                            title="Amazon Clone"
                            img={project2}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="https://himanshuj16.github.io/amazon-clone/"
                            github="https://github.com/HimanshuJ16/amazon-clone"
                            type="Featured Project" 
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                            title="Pricing Page Project"
                            img={project3}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="https://himanshuj16.github.io/pricing/"
                            github="https://github.com/HimanshuJ16/pricing"
                            type="Featured Project" 
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects