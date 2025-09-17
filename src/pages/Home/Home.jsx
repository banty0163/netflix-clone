import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import info_icon from '../../assets/info_icon.png'
import play_icon from '../../assets/play_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="relative">
                <img src={hero_banner} alt="hero_banner" className="w-full object-cover max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh]" />

                <div className="absolute  md:w-full left-0 bottom-0 flex flex-col items-start justify-end px-2 sm:px-8 md:pl-[6%] pb-0 sm:pb-0 md:pb-16 z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                    <img src={hero_title} alt="hero-caption" className="w-20 sm:w-60 md:w-96 mb-3 max-w-full drop-shadow-lg" />
                    <p className=" w-[50%] text-[10px] mb-4 text-xs sm:text-base md:text-lg  text-white  rounded px-2 py-1">
                        Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
                    </p>
                    <div className="flex flex-row sm:flex-row gap-2 sm:gap-4 w-auto  sm:w-auto">
                        <button className="border-0 outline-0 inline-flex items-center gap-2 font-semibold text-xs sm:text-base md:text-lg bg-white text-black px-4 sm:px-5 py-2 rounded-md cursor-pointer hover:bg-[#ffffffbf] transition">
                            <img src={play_icon} alt="" className="w-5 sm:w-6 md:w-7" />Play
                        </button>
                        <button className="border-0 outline-0 inline-flex items-center gap-2 font-semibold text-xs sm:text-base md:text-sm bg-[#6d6d6eb3] text-white px-4 sm:px-5 py-2 rounded-md cursor-pointer hover:bg-[#6d6d6e66] transition">
                            <img src={info_icon} alt="" className="w-5 sm:w-6 md:w-7" />More info
                        </button>
                    </div>
                </div>
            </div>
            <div className="ml-0 sm:ml-[6%] mt-8 space-y-8">
                <div className="mt-6 w-full">
                    <TitleCards />
                </div>
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
                <TitleCards title={"Only on netFlix"} category={"popular"} />
                <TitleCards title={"Upcoming"} category={"upcoming"} />
                <TitleCards title={"Top pics for you"} category={"now_playing"} />
            </div>

            {/* footer */}
            <div className="max-w-5xl mx-auto px-2 py-4">
                <Footer />
            </div>
        </div>
    )
}

export default Home


