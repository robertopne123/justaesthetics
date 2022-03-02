import Link from "next/link";
import { useState } from "react";

const MenuItem = (props) => {
  return (
    <Link href={props.link}>
      <a className="w-[0px] md:w-auto">
        <p className="text-white uppercase text-xs font-medium leading-[30px] hover:underline md:block hidden">
          {props.text}
        </p>
      </a>
    </Link>
  );
};

const MobileMenuItem = (props) => {
  return (
    <Link href={props.link}>
      <a className="">
        <p className="text-white uppercase text-sm font-medium leading-[30px] hover:underline px-4">
          {props.text}
        </p>
      </a>
    </Link>
  );
};

export const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="bg-white h-[80px]">
        <div className="bg-white h-[50px] flex flex-row justify-between px-4">
          <div className="flex flex-col justify-center">
            <Link href="https://g.page/JUSTClinicalAesthetics?share">
              <a className="md:block hidden">
                <div className="flex flex-row gap-3">
                  <img src="/loc.svg" className="w-[15px] h-[20px]"></img>
                  <p className="font-semibold font-poppins text-sm">
                    62 Station Rd, Croston, Preston, PR26 9RN
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row gap-4">
              <Link href="/">
                <a>
                  <p className="font-semibold font-poppins text-xs px-4 py-2 rounded-full border hover:text-white hover:bg-black hover:border-none">
                    BOOK AN APPOINTMENT
                  </p>
                </a>
              </Link>
              <div
                className="h-full flex-col justify-center cursor-pointer md:hidden flex"
                onClick={() => setActive(!active)}
              >
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="overflow-visible"
                >
                  <rect
                    width="20"
                    height="3"
                    fill="black"
                    className={`origin-top-left ${
                      active ? "rotate-45 w-[25px] translate-x-[1px]" : ""
                    }`}
                  />
                  <rect
                    y="8"
                    width="20"
                    height="3"
                    fill="black"
                    className={`origin-top-left ${active ? "hidden" : "block"}`}
                  />
                  <rect
                    y="16"
                    width="20"
                    height="3"
                    fill="black"
                    className={`origin-top-left ${
                      active
                        ? "-rotate-45 w-[25px] -translate-x-[13px] translate-y-[6px]"
                        : ""
                    }`}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black max-h-[30px] flex flex-row md:justify-center justify-start md:gap-10 px-4">
          <MenuItem text="Treatments" link="/treatments" />
          <MenuItem text="Catalogue" link="/catalogue" />
          <MenuItem text="Bookings" link="/" />
          <div className="bg-black h-[80px] w-[80px] -translate-y-[25px] rounded-full overflow-clip border-2 border-white shadow-lg z-20">
            <img src="/logo.png"></img>
          </div>
          <MenuItem text="Isagenix" link="/" />
          <MenuItem text="About" link="/about" />
          <MenuItem text="Contact" link="/contacts" />
        </div>
        <div
          className={`bg-[#181818] h-[220px] pt-[30px] w-full z-20 shadow-xl ${
            active ? "block" : "hidden"
          }`}
        >
          <MobileMenuItem text="Treatments" link="/" />
          <MobileMenuItem text="Shop" link="/" />
          <MobileMenuItem text="Bookings" link="/" />{" "}
          <MobileMenuItem text="Isagenix" link="/" />
          <MobileMenuItem text="About" link="/" />
          <MobileMenuItem text="Contact" link="/" />
        </div>
      </div>
    </>
  );
};
