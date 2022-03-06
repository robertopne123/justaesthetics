import Link from "next/link";
import { CatelogueItem } from "./catelogue/catelogueItem";

export const Schemes = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-10">
        <h3 className="bg-black text-white text-2xl pl-8 -translate-x-4 cutOff:translate-x-0 py-1 font-bold w-[14.5ch] pr-4">
          Offers
        </h3>
        <div className="grid md:grid-cols-4 gap-4 max-w-[1200px] px-4 mx-auto mt-12">
          <div className="col-span-2">
            <div className="flex flex-col gap-2 relative bg-[#EFEFEF] lgxl:h-[350px] p-4">
              <div className="w-full h-full border-2 border-black absolute -translate-x-6 -translate-y-6 -z-20"></div>
              <h3 className="text-3xl font-bold border-l-4 border-black pl-2">
                Ways to save money with me
              </h3>
              <p>
                At JUST Aesthetics, I offer you ways that you can save, through
                my loyalty scheme, through savings on recurring treatments and
                through referring a friend or family member. These allow you to
                save on my wide-range of services and products.
              </p>
              <img
                src="/face.png"
                className="absolute right-0 h-[300px] mx-auto mt-4  opacity-100"
              ></img>
              <div className="grid grid-rows-2 lg:w-[70%]">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col justify-center">
                    <img src="/money.svg" className="w-[60px] h-[60px]" />
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <h3 className="font-semibold text-md leading-[18px] text-left">
                      Get £10 off any recurring treatments
                    </h3>
                    <p className="font-poppins text-xs text-left">
                      If you&apos;re in need of regular treatments, then you can
                      get £10 off each subsequent treatment
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col justify-center">
                    <img src="/10pcoff.svg" className="w-[60px] h-[60px]" />
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <h3 className="font-semibold text-md leading-[18px] text-left">
                      Refer and get 10% off for both parties
                    </h3>
                    <p className="font-poppins text-xs text-left">
                      Refer a friend, colleague, family member or anyone else
                      and you&apos;ll both get 10% off your orders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 lgxl:h-[350px] min-h-[300px] flex flex-col justify-between col-span-2 smsm:col-span-2 relative p-6">
            <img
              src="/loyalty.jpg"
              className="absolute top-0 left-0 w-full h-full opacity-80 object-cover"
            ></img>
            <div className="flex flex-col z-20">
              <h3 className="font-bold text-white text-sm leading-5">
                Loyalty Scheme
              </h3>
              <h3 className="font-bold text-white text-lg leading-5">
                Buy 5 treatments or products <br />
                over £50 to get the next free
              </h3>
            </div>
            <Link href="#contact">
              <a className="z-20">
                <p className="z-20 w-[120px] uppercase bg-white text-black text-center font-poppins font-semibold text-xs px-4 py-2 rounded-full mt-2 hover:text-white hover:bg-black">
                  contact me
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
