"use client";

import { FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTensorflow, SiAdobephotoshop, SiMysql} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area'; 
import { motion } from 'framer-motion';


{/*about/identity */}

const about = {
    title: 'About me',
    description: '',
    info: [
        {
            fieldName: "Name",
            fieldValue: "Fitri Nur Handayani"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indonesian"
        },
        {
            fieldName: "Line",
            fieldValue: "handayanifn"
        },
        {
            fieldName: "Domicili",
            fieldValue: "Surabaya, Jawa Timur"
        },
        {
            fieldName: "Telegram",
            fieldValue: "@fitrii03"
        },
        {
            fieldName: "Email",
            fieldValue: "fitrihanday2ni@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languange",
            fieldValue: "Indonesia, English"
        },
    ],
};

{/*education*/}
const education = {
    title: 'My education',
    description: '',
    items: [
        {
            institution: "Airlangga University",
            degree: "Bachelor of Science in Physics",
            duration: "Sep 2020 - Jun 2024",
        },
        {
            institution: "Microsoft Indonesia",
            degree: "Data Scientist",
            duration: "Apr 2024",
        },
        {
            institution: "Bangkit Academy",
            degree: "Machine Learning Cohort",
            duration: "Feb 2023 - Jul 2023",
        },
        {
            institution: "TensorFlow",
            degree: "Certified TensorFlow Professional Developer",
            duration: "Oct 2023",
        },
        {
            institution: "Digimind Id.",
            degree: "BNSP Certified Digital Marketing",
            duration: "Oct 2023",
        },
        {
            institution: "Coursera",
            degree: "Deeplearning Specialization",
            duration: "May 2023",
        },
        {
            institution: "Coursera",
            degree: "Machine Learning Specialization",
            duration: "Apr 2023",
        },
        {
            institution: "Google Inc.",
            degree: "Data Analyst",
            duration: "Feb 2023",
        },
    ],
};

{/*experience*/}
const experience = {
    title: 'My Experience',
    description: '',
    items: [
        {
            company: "Airlangga University",
            position: "Assitant Lecturer",
            duration: "Feb 2024 - Jun 2024",
        },
        {
            company: "Airlangga University",
            position: "Website Developer",
            duration: "Feb 2024 - May 2024",
        },
        {
            company: "Bangkit Academy",
            position: "Internship Machine Learning Engineer",
            duration: "Feb 2023 - Jul 2023",
        },
        {
            company: "Airlangga University",
            position: "Head of Event Division Dakwah Visual",
            duration: "Apr 2023 - Aug 2023",
        },
        {
            company: "Digimind Id.",
            position: "Digital Marketing Trainee",
            duration: "May 2023 - Oct 2023",
        },
        {
            company: "BMKG Surabaya",
            position: "Internship",
            duration: "Nov 2022 - Feb 2023",
        },
        {
            company: "ISEF JIMM-FST UNAIR",
            position: "General Secretary",
            duration: "Feb 2022 - Oct 2022",
        },
    ],
};

{/*skills*/}
const skills = { 
    title: 'My Skills',
    description: '',
    skilllist: [
        {
            icon:<FaPython />,
            name: "Python",
        },
        {
            icon:<SiTensorflow />,
            name: "TensFlow",
        },
        {
            icon:<FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon:<FaCss3 />,
            name: "CSS 3",
        },
        {
            icon:<FaNodeJs />,
            name: "NodeJs",
        },
        {
            icon:<FaJs />,
            name: "JavaScript",
        },
        {
            icon:<SiNextdotjs />,
            name: "Next.Js",
        },
        {
            icon:<SiTailwindcss />,
            name: "Tailwind.CSS",
        },
        {
            icon:<FaReact />,
            name: "React",
        },
        {
            icon:<SiMysql />,
            name: "MySQL",
        },
        {
            icon:<FaFigma />,
            name: "Figma",
        },
        {
            icon:<SiAdobephotoshop />,
            name: "Adobe Photoshop",
        },
    ],
};



const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delae:2.4, duration:0.4, ease:"easeIn"},
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container mx-auto">
                <Tabs defaultValue='education' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='experience'>Experience</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about'>About Me</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* education container */}
                        <TabsContent value='education' className='w-full h-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-5xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/65 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-8 px-12 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-9l max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p>{item.institution}</p>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* experience container */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-5xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/65 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-8 px-12 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-9l max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p>{item.company}</p>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills container */}
                        <TabsContent value='skills' className='w-full h-full'>
                            <div className='flex flex-col gap-[60px]'>
                                <div className='flex gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-5xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/65 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                                    {skills.skilllist.map((skill, index) =>{
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center gap-[30px] group'>
                                                        <div className='text-5xl group-hover:text-accent transition-all duration-300'>
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>

                                            </TooltipProvider>
                                        </li>;
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about container */}
                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-5xl font-bold'>
                                    {about.title}
                                </h3>
                                <p className='max-w-[600px] text-white/65 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/65'>{item.fieldName}</span>
                                                <span className='text-5l'>{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume