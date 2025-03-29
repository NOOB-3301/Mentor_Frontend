import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { IoArrowForwardSharp } from "react-icons/io5";

const Section1 = () => {
  return (
    <>
            <section
            className="relative flex min-h-[100vh] hero-section w-full max-w-[100vw] flex-col overflow-hidden max-md:mt-[50px]"
            id="hero-section"
        >
            <div
                className="hero-bg-gradient flex h-full min-h-[100vh] w-full flex-col place-content-center gap-6 p-[5%] max-lg:p-4  max-xl:place-items-center"
            >
                <div
                    className="flex flex-col place-content-center items-center"
                >
                    <div
                        className="reveal-up text-center gradient-text text-6xl font-semibold uppercase leading-[80px] max-lg:text-4xl max-md:leading-snug"
                    >
                        <span className=""> Ai powered </span>
                        <br />
                        <span className=""> Mentor Simplified </span>
                    </div>
                    <div
                        className="reveal-up mt-10 max-w-[450px] p-2 text-center max-lg:max-w-full"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Error adipisci corrupti accusamus reiciendis
                        similique assumenda nostrum fuga dicta vitae ipsum.
                    </div>

                    <div
                        className="reveal-up mt-4 flex place-items-center gap-4 overflow-hidden p-2"
                    >
                        <a
                            className="btn transition-transform duration-[0.3s] hover:scale-x-[1.03]"
                            href=""
                        >
                            <span className='flex gap-2 items-center '>
                            Get started
                            <IoArrowForwardSharp/>
                            </span>
                        </a>
                    </div>

                </div>

                <div
                    className="reveal-up flex w-full place-content-center place-items-center"
                    id="dashboard-container">
                    
                    <div
                        className="flex max-h-[750px] min-h-[450px] w-full min-w-[350px] max-w-[950px] rounded-2xl 
                                    overflow-hidden shadow-xl shadow-[#443e437c]
                                    max-lg:h-fit max-lg:max-h-[320px] max-lg:min-h-[150px] max-lg:w-[320px]"
                    id="dashboard">
                        <img
                            src="../../assets/images/home/dashboard.png"
                            alt="dashboard"
                            className="h-full w-full object-cover  max-lg:object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section
            className="relative flex w-full min-h-[80vh] max-w-[100vw] flex-col place-content-center 
            place-items-center overflow-hidden p-6"
        >
            
            <div
                className="reveal-up flex min-h-[60vh] place-content-center place-items-center
                        gap-[10%] max-lg:flex-col max-lg:gap-10"
            >
                <div className="flex">
                    <div className="max-h-[650px] max-w-[850px] overflow-hidden rounded-lg 
                                shadow-lg shadow-[rgba(170,49,233,0.44021358543417366)]">
                        <img
                            src="../../assets/images/home/coding.png"
                            alt="coding"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
                <div
                    className="mt-6 flex max-w-[450px] flex-col gap-4"
                >
                    <h3 className="text-4xl max-md:text-2xl font-medium">Your Personalised Mentor</h3>

                    <div className="mt-4 flex flex-col gap-3">
                        <h4 className="text-xl font-medium">
                            <i className="bi bi-check-all !text-2xl"></i>
                            AI powered
                        </h4>
                        <span className="text-lg text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis commodi temporibus at? Aspernatur,
                            a necessitatibus?
                        </span>
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                        <h4 className="text-xl font-medium">
                            <i className="bi bi-check-all !text-2xl"></i>
                            Auto Apply Job
                        </h4>
                        <span className="text-lg text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis commodi temporibus at? Aspernatur,
                            a necessitatibus?
                        </span>
                    </div>
                </div>
            </div>
        
        </section>

        <section
            className="relative flex w-full min-h-[80vh] max-w-[100vw] flex-col place-content-center 
            place-items-center overflow-hidden p-6"
        >
            
            <div
                className="reveal-up flex min-h-[60vh] place-content-center place-items-center
                        gap-[10%] max-lg:flex-col max-lg:gap-10"
            >
                
                <div
                    className="mt-6 flex max-w-[450px] flex-col gap-4"
                >
                    <h3 className="text-4xl max-md:text-2xl font-medium">Skillgap Analyzer Tool</h3>

                    <div className="mt-4 flex flex-col gap-3">
                        <h4 className="text-xl font-medium">
                            <i className="bi bi-check-all !text-2xl"></i>
                            Git
                        </h4>
                        <span className="text-lg text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis commodi temporibus at? Aspernatur,
                            a necessitatibus?
                        </span>
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                        <h4 className="text-xl font-medium">
                            <i className="bi bi-check-all !text-2xl"></i>
                            Github
                        </h4>
                        <span className="text-lg text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis commodi temporibus at? Aspernatur,
                            a necessitatibus?
                        </span>
                    </div>
                </div>

                <div className="flex">
                    <div className="max-h-[650px] max-w-[850px] overflow-hidden rounded-lg 
                                shadow-lg shadow-[rgba(170,49,233,0.44021358543417366)]">
                        <img
                            src="../../assets/images/home/git.png"
                            alt="coding"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

            </div>
        
        </section>

        <section
            className="relative flex w-full max-w-[100vw] min-h-[100vh] flex-col place-content-center place-items-center overflow-hidden p-6"
        >
            <div
                className="mt-8 flex flex-col place-items-center gap-5"
            >
                <div
                    className="reveal-up  flex flex-col gap-3 text-center"
                >
                    {/* <h3 className="text-xl text-primary">
                        Features loved by our clients
                    </h3> */}
                    <h2 className="text-4xl font-semibold">Core features</h2>
                </div>
                <div
                    className="mt-6 flex max-w-[60%] flex-wrap place-content-center gap-2 max-lg:flex-col"
                >
                    <div
                        className="reveal-up flex h-[250px] w-[350px] flex-col gap-2 p-4 text-center"
                    >
                        <i
                            className="bi bi-boombox-fill text-5xl text-primary"
                        ></i>
                        <h3 className="text-2xl font-semibold">Feature 1</h3>
                        <div className="text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quos, voluptates numquam quam expedita
                            mollitia possimus. Quos tempora placeat pariatur
                            est!
                        </div>
                    </div>
                    <div
                        className="reveal-up flex h-[250px] w-[350px] flex-col gap-2 p-4 text-center"
                    >
                        <i
                            className="bi bi-award-fill text-5xl text-primary"
                        ></i>
                        <h3 className="text-2xl font-semibold">Feature 2</h3>
                        <div className="text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quos, voluptates numquam quam expedita
                            mollitia possimus. Quos tempora placeat pariatur
                            est!
                        </div>
                    </div>
                    <div
                        className="reveal-up flex h-[250px] w-[350px] flex-col gap-2 p-4 text-center"
                    >
                        <i
                            className="bi bi-book-fill text-5xl text-primary"
                        ></i>
                        <h3 className="text-2xl font-semibold">Feature 3</h3>
                        <div className="text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quos, voluptates numquam quam expedita
                            mollitia possimus. Quos tempora placeat pariatur
                            est!
                        </div>
                    </div>
                    <div
                        className="reveal-up flex h-[250px] w-[350px] flex-col gap-2 p-4 text-center"
                    >
                        <i
                            className="bi bi-briefcase-fill text-5xl text-primary"
                        ></i>
                        <h3 className="text-2xl font-semibold">Feature 4</h3>
                        <div className="text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quos, voluptates numquam quam expedita
                            mollitia possimus. Quos tempora placeat pariatur
                            est!
                        </div>
                    </div>
                    <div
                        className="reveal-up flex h-[250px] w-[350px] flex-col gap-2 p-4 text-center"
                    >
                        <i
                            className="bi bi-credit-card-2-front-fill text-5xl text-primary"
                        ></i>
                        <h3 className="text-2xl font-semibold">Feature 5</h3>
                        <div className="text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quos, voluptates numquam quam expedita
                            mollitia possimus. Quos tempora placeat pariatur
                            est!
                        </div>
                    </div>
                    <div
                        className="reveal-up flex h-[250px] w-[350px] flex-col gap-2 p-4 text-center"
                    >
                        <i className="bi bi-fire text-5xl text-primary"></i>
                        <h3 className="text-2xl font-semibold">Feature 6</h3>
                        <div className="text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quos, voluptates numquam quam expedita
                            mollitia possimus. Quos tempora placeat pariatur
                            est!
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>
)
}

export default Section1