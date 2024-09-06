import React from "react";
import { ReactTyped } from 'react-typed';

import videobg from "../assets/videobg2.mp4";

const Main = () => {
    return (
        <div className="relative text-white h-screen overflow-hidden">
            <video
                src={videobg}
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="relative max-w-[800px] mt-[-96px] w-full h-full mx-auto text-center flex flex-col justify-center items-center">
                <p className="md:text-2xl sm:1xl text-[#89CFF0] font-bold tracking-wide p-2">
                    HELLO WORLD! 👋
                </p>
                <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold">
                    I'm Lee Anne Angeles
                </h1>
                <div className="flex justify-center items-center py-4">
                    <p className="md:text-3xl sm:text-2xl text-2xl font-bold">
                        An aspiring
                    </p>
                    <ReactTyped
                        className="text-[#89CFF0] pl-2 md:text-3xl sm:text-2xl text-2xl font-bold"
                        strings={["Web Developer", "Frontend Developer", "UI/UX Designer"]}
                        typeSpeed={120}
                        backSpeed={50}
                        loop
                    />
                </div>
                <p className="px-10 py-2 md:text-2xl sm:text-1xl font-medium text-gray-400">
                    Currently a Third-year Computer Engineering student at the Polytechnic University of the Philippines.
                </p>
                <button type="button" class="mt-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">Let's Connect</button>

            </div>
        </div>
    );
};

export default Main;
