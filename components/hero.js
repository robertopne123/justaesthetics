import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <div className="smmd:h-[400px] bg-gray-300 relative -z-20">
        <img
          src="/header.png"
          width="100%"
          height="100%"
          className="absolute top-0 left-0 object-cover smmd:h-[400px] h-full -z-10"
        ></img>
        <div className="py-14 smmd:py-0">
          <div className="smmd:grid smmd:grid-cols-2 flex flex-col gap-4 pr-4 pl-6">
            <div className="flex smmd:justify-end justify-center">
              <div className="flex flex-col justify-center relative">
                <div className="absolute -translate-x-2 -translate-y-2 w-[300px] h-[230px] border-2 border-black"></div>
                <img
                  src="/claire.png"
                  className="w-[300px] h-[230px] object-cover z-10"
                ></img>
              </div>
            </div>
            <div className="flex smmd:justify-start justify-center">
              <div className="flex flex-col smmd:justify-center smmd:h-[400px]">
                <h3 className="text-left text-2xl font-bold z-20">
                  JUST Aesthetics
                </h3>
                <div className="w-[100px] h-0.5 bg-black z-20"></div>
                <p className="w-[300px] mt-4 text-left z-20">
                  At JUST Aesthetics, we offer a wide range of treatments and
                  services to our clients, such as non-surgical treatments,
                  results-driven skincare, and nutritional health. Our clinic is
                  located on Station Road in Croston. 
                </p>
                <Link href="/">
                  <a className="z-20">
                    <p className="z-20 w-[190px] font-poppins text-center font-semibold text-xs px-4 py-2 rounded-full border border-black mt-2 hover:text-white hover:bg-black">
                      BOOK AN APPOINTMENT
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
