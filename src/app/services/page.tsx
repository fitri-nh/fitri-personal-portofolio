"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';


const services = [
    {
        num: '01',
        title: "Machine Learning Engineer",
        description: 'Professional TensorFlow Developer Certified.',
        href: ""
    },
    {
        num: '02',
        title: "Data Analyst",
        description: 'Data analyzing, data preprocessing, and data processing.',
        href: ""
    },
    {
        num: '03',
        title: "UI/UX Designer",
        description: 'Design responsive and creative UI/UX.',
        href: ""
    },
    {
        num: '04',
        title: "Website Development",
        description: 'Build responsive and creative Website',
        href: ""
    },
]

import { motion } from "framer-motion";
    

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className='container mx-auto'>
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index)=> {
                        return (
                            <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                                    <Link href={service.href} className='w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                        <BsArrowDownRight className='text-primary text-3xl'/>
                                    </Link>
                                </div>
                                {/* Title */}
                                <h2 className='text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                                {/* Descript */}
                                <p className='text-white/65'>{service.description}</p>
                                {/* border */}
                                <div className='border-b border-white/20 w-full'></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services