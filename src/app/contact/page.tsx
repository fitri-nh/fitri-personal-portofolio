"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
    Select, 
    SelectContent, 
    SelectLabel, 
    SelectGroup, 
    SelectTrigger, 
    SelectItem, 
    SelectValue 
} from "@/components/ui/select";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkedAlt
} from "react-icons/fa"

import { motion } from "framer-motion";

const info = [
    {
        icon:<FaPhoneAlt />,
        title: "Phone",
        description: "(+62) 858 1634 5745",
    },
    {
        icon:<FaEnvelope />,
        title: "Email",
        description: "fitrihanday2ni@gmail.com",
    },
    {
        icon:<FaMapMarkedAlt />,
        title: "Address",
        description: "Surabaya, Jawa Timur",
    },
];



const Contact = () => {
    return (
        <motion.section 
            initial={{ opacity:0 }}
            animate={{
                opacity: 1,
                transition: { delay:2.4, duration:0.4, ease:"easeIn"},
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form email & subject */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                            <h3 className="text-4xl text-accent">
                                Team up with me!
                            </h3>
                            {/* input email */}
                            <div className="grid grid-cols-1 grid md:grid-cols-2 gap-6">
                                <Input type='firstname' placeholder="First Name" />
                                <Input type='firstname' placeholder="Last Name" />
                                <Input type='firstname' placeholder="Email address" />
                                <Input type='firstname' placeholder="Phone" />
                            </div>

                            {/* select services */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder= "Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Machine Learning</SelectItem>
                                        <SelectItem value="cst">Data Analyst</SelectItem>
                                        <SelectItem value="mst">UI/UX Design</SelectItem>
                                        <SelectItem value="kst">Website Development</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* Text area for body email */}
                            <Textarea className="h-280px" placeholder="Type your message here." />
                            {/* button send email */}
                            <Button size='md' className="max-w-40">
                                Send
                            </Button>
                        </form>
                    </div>

                    {/* info section */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-8">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[50px] h-[50px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[30px]">{item.icon}</div>
                                        </div>
                                        <div>
                                            <p>{item.title}</p>
                                            <h3>{item.description}</h3>
                                        </div>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact