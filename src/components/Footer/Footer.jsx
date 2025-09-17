import React from "react";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 mt-10 text-gray-300">
            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-6 mb-8">
                <img
                    src={facebook_icon}
                    alt="Facebook"
                    className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
                />
                <img
                    src={youtube_icon}
                    alt="YouTube"
                    className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
                />
                <img
                    src={twitter_icon}
                    alt="Twitter"
                    className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
                />
                <img
                    src={instagram_icon}
                    alt="Instagram"
                    className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
                />
            </div>

            {/* Footer Links */}
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 text-sm">
                <li className="hover:underline cursor-pointer">Audio Description</li>
                <li className="hover:underline cursor-pointer">Help Center</li>
                <li className="hover:underline cursor-pointer">Gift Cards</li>
                <li className="hover:underline cursor-pointer">Media Center</li>
                <li className="hover:underline cursor-pointer">Investor Relations</li>
                <li className="hover:underline cursor-pointer">Jobs</li>
                <li className="hover:underline cursor-pointer">Terms of Use</li>
                <li className="hover:underline cursor-pointer">Privacy</li>
                <li className="hover:underline cursor-pointer">Legal Notices</li>
                <li className="hover:underline cursor-pointer">Cookie Preferences</li>
                <li className="hover:underline cursor-pointer">Corporate Information</li>
                <li className="hover:underline cursor-pointer">Contact Us</li>
            </ul>

            {/* Footer Bottom */}
            <p className="mt-8 text-xs text-gray-500 text-center sm:text-left">
                &copy; {currentYear} Your Company Name. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;

