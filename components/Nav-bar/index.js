import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Use the Next.js router

const Navbar = () => {
    const router = useRouter(); // Access the router to get the current path
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [topScroll, setIsScroll] = useState(false); // Store the navbar bg color dynamically

    useEffect(() => {
        setIsScroll(false)
        const handleScroll = () => {
            // Check if we are not on the About page
            if (router.pathname !== "/about") {
                if (window.scrollY > 50) {
                    setIsScroll(true); // Change to light grey when scrolled
                } else {
                    setIsScroll(false); // Reset to transparent
                }
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [router.pathname]); // Re-run when the page changes

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className={`navbar fixed top-0 left-0 w-full flex justify-between items-center z-10 transition-all duration-300 ${
                router.pathname === "/about" ? "bg-blue-500 text-white" : topScroll ? "bg-[#ddd] text-white" : "bg-none text-white"}`}
                >  
            <div className="header flex justify-between w-full px-5 py-3 items-center">
                <div className="nav-logo">
                    <h3 className="text-2xl font-semibold">
                    <Link href="/">
                    StoryPlus </Link></h3>
                </div>
                <div className="nav-menu lg:hidden">
                    <button
                        className="text-3xl focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        ☰
                    </button>
                </div>
                <div
                    className={`nav-links lg:flex ${
                        isMenuOpen ? "block" : "hidden"
                    } absolute lg:static top-full left-0 w-full bg-[#333] lg:bg-transparent lg:w-auto lg:mt-0 mt-2 lg:py-0 py-3 z-10`}
                >
                    <ul className="flex flex-col lg:flex-row lg:items-center list-none m-0 p-0">
                        <li className="mx-5 my-2 lg:my-0">
                            <Link
                                href="/"
                                className="text-lg font-medium hover:text-[#ff7e5f] transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="mx-5 my-2 lg:my-0">
                            <Link
                                href="/about"
                                className="text-lg font-medium hover:text-[#ff7e5f] transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li className="mx-5 my-2 lg:my-0">
                            <Link
                                href="/popular-stories"
                                className="text-lg font-medium hover:text-[#ff7e5f] transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Popular Stories
                            </Link>
                        </li>
                        <li className="mx-5 my-2 lg:my-0">
                            <Link
                                href="/archives"
                                className="text-lg font-medium hover:text-[#ff7e5f] transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Archives
                            </Link>
                        </li>
                        <li className="mx-5 my-2 lg:my-0">
                            <Link
                                href="/profile"
                                className="text-lg font-medium hover:text-[#ff7e5f] transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
