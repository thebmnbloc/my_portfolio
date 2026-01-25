import Link from "next/link";
import { FaWhatsapp, FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiCalendly } from "react-icons/si";



const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-blue-950 text-center text-slate-100 bottom-0 right-0 min-w-full min-h-20 rounded-2xl">

      <div className="flex flex-col gap-3 py-4 px-8">

        <div className="flex items-center justify-between py-4 px-8 gap-3 md:gap-5">

          <div className="flex flex-col items-start space-y-2">
            <Link href='/'>Home</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/techstack'>Tech Stack</Link>
            <Link href='/about'> About</Link>
            <Link href='/contact'>Contact me</Link>
          </div>
          
      
          <div className="flex flex-col items-start space-y-2">
            <Link href={'/#'}>Download CV</Link>
            <Link href={'/#'}>Check my work</Link>
            <Link href={'/#'}>Get in touch</Link>
          </div>
       

          <div className="flex flex-col gap-3">

            <h3 className="text-xl">Socials</h3>

            <div className="grid grid-rows-2 md:flex items-center gap-5 sm:content-center">
              <Link href='/#'> 
              <FaXTwitter /> </Link>

              <Link href='/#'> 
              <FaGithub /> </Link>

              <Link href='/#'> 
              <FaLinkedin /> </Link>

              <Link href='/#'> 
              <SiCalendly /> </Link>

              <Link href='/#'> 
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