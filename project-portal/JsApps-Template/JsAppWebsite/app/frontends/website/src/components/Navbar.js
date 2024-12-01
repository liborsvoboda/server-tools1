import React from "react";
import { useState } from "react";
import { LuX, LuMenu } from "react-icons/lu";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navlinks = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Current Initiatives",
            link: "/Initiatives",
        },
        {
            title: "Give a Talk",
            link: "/Talks",
        },
        {
            title: "Communities",
            link: "/Communities",
        },
        {
            title: "Organize a Workshop",
            link: "/Workshops",
        },
        {
            title: "Important Event Documents",
            link: "/Eventdocs",
        },
        {
            title: "Become a Sponsor",
            link: "/Sponsor",
        },
        {
            title: "Donate",
            link: "/Donate",
        },
    ];

    return (
        <nav className="h-auto shadow-lg bg-fuchsia-100 shadow-purple-500/50">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="hidden lg:block">
                        <div className="flex items-center ml-10 space-x-4">
                           {navlinks.map((link, index) => (
                              <a
                                 key={index}
                                 className="px-3 py-2 font-medium text-purple-400 transition-all duration-500 rounded hover:bg-purple-500 hover:text-white text-md"
                                 href={link.link}
                              >
                                 {link.title}
                              </a>
                           ))}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a href='/'>                         
                           <img
                              className="w-auto h-20 mb-1"
                              src="images/cleargblogo.png"
                              alt="Logo"
                           />
                        </a>
                    </div>
                    <div className="flex mr-2 lg:hidden">
                        <button type = "button" onClick={toggleMenu} className="inline-flex items-center justify-center p-2 text-purple-400 bg-purple-600 rounded-md outline-none hover:text-white hover:bg-purple-500 focus:outline-none focus: ring-2 focus:ring-offset-2 focus:ring-offset-purple-700 focus:ring-white"
                        >
                           <span className="sr-only"> Open Main Menu</span>
                           {menuOpen === true ? <LuX/> : <LuMenu />}
                        </button>
                    </div>
                </div>
            </div>
            {menuOpen ? (
               <div className="lg:hidden">
                  <div className="pt-2 pb-3 space-y-1 ox-2 sm:px-3">
                     {navlinks.map((link, index) => (
                              <a
                                 key={index}
                                 className="block px-3 py-2 text-base font-medium text-purple-400 rounded-md hover:bg-purple-300 hover:text-white"
                                 href={link.link}
                              >
                                 {link.title}
                              </a>
                     ))}
                     
                  </div>
                  
               </div>
            ) : null }
        </nav>
    );
};

export default Navbar;
