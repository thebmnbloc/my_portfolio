import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="sticky top-10 z-[50]">
      <nav className="flex flex-row items-center justify-between px-6 py-4 sm:px-10 py-8 w-300 h-4 shadow-lg rounded-2xl bg-slate-200 opacity-85 mx-auto">
        
        <Link href={"/"}>
          <Image
          src={"/images/logo.svg"}
          alt="logo"
          width={24}
          height={24}

          className="rounded-full"
          />
        </Link>

        <ul className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/myprojects"}>My Projects</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"contact"}>Contact</Link>
        </ul>

      </nav>
    </header>
  )
}
export default Navbar;