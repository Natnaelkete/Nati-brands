import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a
          href="/"
          className="text-coral-red text-[25px] font-montserrat font-bold"
        >
          NATI BRANDS
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16  max-lg:hidden">
          {navLinks.map((links, index) => (
            <li key={index}>
              <a
                href={links.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {links.label}
              </a>
            </li>
          ))}
        </ul>

        <div className=" lg:hidden">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
