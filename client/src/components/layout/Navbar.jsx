import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/pinaki-logo.jpeg.png";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
  {
    name: "Home",
    path: "/education",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Courses",
    path: "/courses",
  },
  {
    name: "Training",
    path: "/training",
  },
  {
    name: "Industries",
    path: "/industries",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  // {
  //   name: "Careers",
  //   path: "/careers",
  // },
  {
    name: "Contact",
    path: "/contact",
  },
];

    return (
  <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
    

      <div className="max-w-7xl mx-auto h-20 px-8 flex justify-between items-center">

        {/* Logo */}

        {/* Logo */}

<NavLink
  to="/education"
  className="flex items-center gap-3"
>
  <img
    src={logo}
    alt="Pinaki"
    className="h-14 object-contain"
  />

  <div>
    <h2 className="font-bold text-lg text-slate-800">
      PINAKI
    </h2>

    <p className="text-xs text-gray-500">
      IT Consultant
    </p>
  </div>
</NavLink>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

  {/* Offerings */}

  <div className="relative group">

    <button className="flex items-center gap-2 font-medium text-slate-700 hover:text-emerald-600 transition">

      Offerings

      <span className="text-xs">▼</span>

    </button>

    <div className="absolute left-0 hidden group-hover:block">
      <MegaMenu />
    </div>

  </div>

  {navItems.map((item) => (

    <NavLink
      key={item.name}
      to={item.path}
      className={({ isActive }) =>
        isActive
          ? "font-semibold text-emerald-600"
          : "font-medium text-slate-700 hover:text-emerald-600 transition"
      }
    >
      {item.name}
    </NavLink>

  ))}

</nav>

        {/* Button */}

       <button
  className="hidden lg:flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
>
  Get Started
</button>

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

    </header>
  );
};

export default Navbar;