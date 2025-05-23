import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const NavBar =()=>(
    <div className="flex items-center justify-between">
    <Image src={Logo} alt="Saas Logo" height={40} width={40} />
    <MenuIcon className="h-5 w-5 md:hidden" />
    <nav className="hidden md:flex gap-6 text-black/60 items-center">
      <a href="#">About</a>
      <a href="#">Features</a>
      <a href="#">Customers</a>
      <a href="#">Updates</a>
      <a href="#">Help</a>
      <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
        Get for free
      </button>
    </nav>
  </div>
)