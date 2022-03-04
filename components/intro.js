import Link from "next/link";

export const Intro = () => {
  return (
    <>
      <div className="grid smmd:grid-cols-2 grid-cols-1 gap-10 smmd:gap-4 max-w-[1200px] mx-auto px-4 smmd:py-20 py-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold border-l-4 border-black pl-2">
            Why choose Claire <br />
            for your medical <br />
            treatments
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg">
            At <strong>JUST Aesthetics</strong>, I understand that as we age,
            the appearance of our skin changes and this is something we can’t
            change, but that doesn’t mean you can’t look youthful. My treatments
            can help you achieve just that.{" "}
          </p>
          <div className="flex flex-row gap-4">
            <Link href="#contact">
              <a className="z-20">
                <p className="z-20 w-[120px] bg-black text-white text-center font-poppins font-semibold text-xs px-4 py-2 rounded-full border-2 border-black mt-2 hover:text-black hover:bg-white">
                  CONTACT ME
                </p>
              </a>
            </Link>
            <Link href="https://g.page/JUSTClinicalAesthetics?share">
              <a className="z-20">
                <p className="z-20 w-[150px] bg-transparent text-black text-center font-poppins font-semibold text-xs px-4 py-2 rounded-full border-2 border-black mt-2 hover:text-white hover:bg-black">
                  FIND MY CLINIC
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
