import Link from "next/link";

export const Intro = () => {
  return (
    <>
      <div className="grid smmd:grid-cols-2 grid-cols-1 gap-10 smmd:gap-4 max-w-[1200px] mx-auto px-4 smmd:py-20 py-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold border-l-4 border-black pl-2">
            Why choose Claire <br />
            for your medical <br />
            treatments
          </h3>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col justify-center">
              <img src="/loc.svg" className="w-[20px] h-[30px]"></img>
            </div>
            <p className="font-bold text-lg">
              62 Station Rd, Croston, <br />
              Preston, PR26 9RN
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-md">
            At <strong>JUST Aesthetics</strong>, I understand that as we age,
            the appearance of our skin changes and this is something we can’t
            change, but that doesn’t mean you can’t look youthful. My treatments
            can help you achieve just that.{" "}
          </p>
          <Link href="/">
            <a className="z-20">
              <p className="z-20 w-[120px] bg-black text-white text-center font-poppins font-semibold text-xs px-4 py-2 rounded-full border border-black mt-2 hover:text-black hover:bg-white">
                ABOUT US
              </p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
