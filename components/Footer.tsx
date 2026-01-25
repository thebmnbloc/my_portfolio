import Link from "next/link";
import { FaWhatsapp, FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiCalendly } from "react-icons/si";



const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-blue-950 text-center text-slate-100 text-sm md:text-md bottom-0 right-0 min-w-full min-h-20 rounded-2xl">

      <div className="flex flex-col gap-3 py-4 px-8 md:px-16">

        <div className="flex items-center justify-between py-4 px-8 gap-3 md:gap-5">

          <div className="flex flex-col items-start space-y-2">
            <Link href='/' className="hover:opacity-75 transition duration-100 ease-in-out">Home</Link>
            <Link href='/projects' className="hover:opacity-75 transition duration-100 ease-in-out">Projects</Link>
            <Link href='/tech-stack' className="hover:opacity-75 transition duration-100 ease-in-out">Tech Stack</Link>
            <Link href='/about' className="hover:opacity-75 transition duration-100 ease-in-out"> About</Link>
            <Link href='/contact' className="hover:opacity-75 transition duration-100 ease-in-out">Contact me</Link>
          </div>
          
      
          <div className="flex flex-col items-start space-y-2">
            <Link href={'/projects'} className="hover:opacity-75">Check my work</Link>
            <Link href={'/#'} className="hover:opacity-75">Download CV</Link>
            <Link href={'/contact'} className="hover:opacity-75">Get in touch</Link>
          </div>
       

          <div className="flex flex-col gap-3">

            <h3 className="text-xl">My Socials</h3>

            <div className="grid grid-cols-2 md:flex items-center gap-6 sm:content-center">
              <Link href='https://x.com/Thebmnbloc'>
              <FaXTwitter /> </Link>

              <Link href='https://github.com/thebmnbloc'>
              <FaGithub /> </Link>

              <Link href='https://www.linkedin.com/in/bior-malual-3bb284264/'> 
              <FaLinkedin /> </Link>

              <Link href='https://calendly.com/app/personal/profile'>
              <SiCalendly /> </Link>

              <Link href='https://wa.me/qr/TQNUVODHEQFLE1'>
              <FaWhatsapp /> </Link>
            </div>

          </div>

        </div>

        <p>&copy; Bior Malual. {currentYear}</p>


      </div>

    </footer>
  )
}

export default Footer;