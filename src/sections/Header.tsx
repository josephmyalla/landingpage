import {NavBar} from "@/components/NavBar"
import {Promo} from "@/components/Promo"
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <Promo />
      <div className="py-5">
        <div className="container">
       <NavBar />
        </div>
      </div>
    </header>
  );
};
