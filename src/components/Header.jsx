<<<<<<< HEAD
import { useEffect } from "react";

=======
<<<<<<< HEAD
const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header
=======
import { useEffect } from "react";

>>>>>>> 4b3cd09 (Initial commit)
const Header = () => {
  const navLinks = [
    {
      display: "Gallery",
    },
    {
      display: "Farms",
    },
    {
      display: "About Us",
    },
  ];

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 w-[100%] h-[80px] py-0 px-[100px] box-border flex justify-between items-center transition-all ease-in duration-150 delay-75 z-10 bg-white/30 brightness-60 backdrop-blur-sm"
        id="navbar"
      >
        <a href="#">Logo</a>
        <ul className="m-0 p-0 flex">
          {navLinks.map((link) => (
            <li key={link.display} className="cursor-pointer font-medium px-4">
              {link.display}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
<<<<<<< HEAD
=======
>>>>>>> 1020b7b (Initial commit)
>>>>>>> 4b3cd09 (Initial commit)
