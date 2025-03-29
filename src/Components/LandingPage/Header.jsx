import React from 'react'
import { useEffect, useState } from "react";
// import "bootstrap-icons/font/bootstrap-icons.css";


const Header = () => {
    const RESPONSIVE_WIDTH = 1024;
    const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(window.innerWidth < RESPONSIVE_WIDTH);
    const [headerWhiteBg, setHeaderWhiteBg] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > RESPONSIVE_WIDTH) {
                setIsHeaderCollapsed(false);
            } else {
                setIsHeaderCollapsed(true);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleHeader = () => {
        setIsHeaderCollapsed(!isHeaderCollapsed);
    };
    return (

        <>
            <header
                className="lg:justify-around max-w-lg:px-4 max-w-lg:mr-auto absolute top-0 z-20 flex h-[60px] w-full bg-opacity-0 px-[5%] 
                    text-white"
            >
                <a className="h-[50px] w-[50px] p-[4px]" href="">
                    <img
                        src="../../../public/assets/logo/logo.png"
                        alt="logo"
                        className="object h-full w-full"
                    />
                </a>
                <div
                    className="collapsible-header animated-collapse max-lg:shadow-md"
                    id="collapsed-header-items"
                >
                    <div
                        className="flex h-full w-max gap-5 text-base text-white max-lg:mt-[30px] max-lg:flex-col max-lg:place-items-end max-lg:gap-5 lg:mx-auto lg:place-items-center"
                    >   
                        <a className="header-links" href=""> About us </a>
                        <a className="header-links" href=""> Features </a>
                        <a className="header-links" href=""> Team </a>
                    </div>
                    <div
                        className="mx-4 flex place-items-center gap-[20px] text-base max-md:w-full max-md:flex-col max-md:place-content-center"
                    >
                        <a
                            href=""
                            aria-label="signup"
                            className="rounded-full bg-secondary px-3 py-2 text-white transition-transform duration-[0.3s] hover:translate-x-2"
                        >
                            <span>Get started</span>
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <button
                className="bi bi-list absolute right-3 top-3 z-50 text-3xl text-white lg:hidden" 
                aria-label="menu"
                >clcik</button>
            </header>
        </>
    )
}

export default Header