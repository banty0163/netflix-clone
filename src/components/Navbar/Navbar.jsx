import React, { useEffect, useRef, useState } from 'react'
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { logout } from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navRef = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const [shows, setShows] = useState();
    const navigate = useNavigate();

    const onTvShows = () => {
        navigate('/TvShows')
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                navRef.current.classList.add("bg-black")
            } else {
                navRef.current.classList.remove("bg-black")
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <nav
            ref={navRef}
            className="w-full px-4 sm:px-6 lg:px-10 py-3 flex justify-between items-center fixed text-sm
      text-[#e5e5e5] bg-gradient-to-b from-black/70 from-10% to-transparent z-[50] transition-all duration-300"
        >
            {/* Left Logo */}
            <div className="flex items-center gap-4">
                <img src={logo} alt="Netflix Logo" className="w-[70px] sm:w-[90px]" />
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex gap-6 lg:gap-8 text-sm">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer" onClick={onTvShows}>TV Shows</li>
                <li className="cursor-pointer">Movies</li>
                <li className="cursor-pointer">New & Popular</li>
                <li className="cursor-pointer">My List</li>
                <li className="cursor-pointer">Browse by Languages</li>
            </ul>

            {/* Right Side */}
            <div className="hidden md:flex gap-5 items-center">
                <img src={search_icon} alt="Search" className="w-[20px] cursor-pointer" />
                <p>Children</p>
                <img src={bell_icon} alt="Notifications" className="w-[20px] cursor-pointer" />

                <div className="relative group flex items-center gap-2">
                    <img src={profile_img} alt="Profile" className="w-[32px] border rounded-md cursor-pointer" />
                    <img src={caret_icon} alt="Dropdown" className="w-[14px] cursor-pointer" />
                    <div className="absolute top-full right-0 mt-1 group-hover:block hidden bg-black text-white text-sm p-2 rounded-md shadow-lg">
                        <p
                            className="cursor-pointer hover:underline"
                            onClick={() => logout()}
                        >
                            Sign Out of Netflix
                        </p>
                    </div>
                </div>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <button
                className="md:hidden flex flex-col gap-1 z-[60]"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
            </button>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="absolute top-[60px] right-0 w-[50%] bg-black text-white flex flex-col  md:hidden px-6 py-4 space-y-4 z-[59]">
                    <p className="cursor-pointer"> Home</p>
                    <p className="cursor-pointer" onClick={onTvShows}>TV Shows</p>
                    <p className="cursor-pointer"> Movies</p>
                    <p className="cursor-pointer"> New & Popular</p>
                    <p className="cursor-pointer"> My List</p>
                    <p className="cursor-pointer"> Browse by Languages</p>
                    <p
                        className="cursor-pointer hover:underline"
                        onClick={() => logout()}
                    >
                        🚪 Sign Out
                    </p>
                </div>
            )}
        </nav>
    )
}

export default Navbar
