"use client"

import Link from "next/link";
import Image from "next/image";
import { MenuIcon, SunDimIcon, XIcon } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
     window.removeEventListener('resize', handleResize)
    }
  }, []);

  return (
    <header className="sticky top-10 z-[50]">
      <nav className="flex flex-row items-center justify-between px-6 py-2 md:px-10 md:py-8 max-w-300 min-h-1 md:h-4 shadow-lg rounded-2xl bg-slate-50 opacity-85 mx-auto">
        
        <Link href={"/"} className="flex items-center gap-2 hover:opacity-65">
          <Image
          src={"/images/logo.svg"}

          alt="logo"
          width={24}
          height={24}
          className="rounded-full"
          />

          <div className="text-blue-950 text-sm sm:text-md md:text-lg">Bior Malual</div>
        </Link>
      
        <ul className="invisible md:visible flex gap-2 md:gap-4 text-sm md:text-md text-blue-950 ">
          <Link href={"/"} className="hover:opacity-65 transition duration-100 ease-in-out">Home</Link>
          <Link href={"/projects"} className="hover:opacity-65 transition duration-100 ease-in-out">Projects</Link>
          <Link href={"/tech-stack"} className="hover:opacity-65 transition duration-100 ease-in-out">Tech Stack</Link>
          <Link href={"/about"} className="hover:opacity-65 hover:text-blue-800 transition duration-300 ease-in-out">About</Link> 
        </ul>

        <ul className="invisible md:visible flex items-center justify-between gap-4">

          <Link href={"/contact"} className="bg-blue-500 rounded-xl md:rounded-2xl min-h-2 min-w-8 py-1 px-4 md:py-2 md:px-6 text-slate-50 cursor-pointer hover:opacity-65 transition duration-100 ease-in-out">
            Contact Me
          </Link>
          
          <button 
          className="md:hidden flex items-center gap-3 text-blue-950"
          onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen? <XIcon size={20}
            className="visible md:hidden"
            /> : <MenuIcon 
            size={20}
            className="visible md:hidden"
            />}
           
          </button>

        </ul>

        {mobileOpen && 
          <ul className="fixed top-30 left-8 right-8 flex flex-col bg-slate-50 items-start px-6 py-4 mx-auto gap-2 text-blue-950 rounded-2xl z-1000">
            <li>
              <Link href={"/"} 
              className="hover:underline"
              onClick={() => setMobileOpen(false)}
              > Home</Link>
            </li>

            <li>
              <Link href={"/projects"}
              className="hover:underline"
              onClick={() => setMobileOpen(false)}
              >Projects</Link>
            </li>

            <li>
              <Link href={"/tech-stack"}
              className="hover:underline"
              onClick={() => setMobileOpen(false)}
              >Tech Stack</Link>
            </li>

             <li>
              <Link href={"/about"}
              className="hover:underline"
              onClick={() => setMobileOpen(false)}
              >About</Link>
            </li>

             <li>
              <Link href={"/contact"}
              className="hover:underline"
              onClick={() => setMobileOpen(false)}
              >Contact</Link>
            </li>
          </ul>
        }
         
      </nav>
    </header>
  )
}
export default Navbar;