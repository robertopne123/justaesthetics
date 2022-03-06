import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  function bookAppointment() {
    const msg = document.getElementById("yourMessage");
    const eType = document.getElementById("enquiryType");

    msg.value = "Hi, I'm interested in booking an appointment";
    eType.value = "2";
  }

  return (
    <>
      <div className="bg-gray-300 relative -z-20">
        <img
          src="/header.png"
          width="100%"
          height="100%"
          className="absolute top-0 left-0 object-cover h-full"
        ></img>
        <div className="py-14 smmd:py-0 px-4 max-w-[1200px] min-h-[400px] flex flex-col justify-center mx-auto">
          <div className="smmd:grid smmd:grid-cols-2 flex flex-col gap-4">
            <div className="flex smmd:justify-end justify-center">
              <div className="flex flex-col justify-center relative">
                <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 grid-cols-2 smsm:grid-cols-1 -translate-x-2 -translate-y-2" />
                <img src="/claire.png" className="h-[230px] object-cover"></img>
              </div>
            </div>
            <div className="flex smmd:justify-start justify-center z-20">
              <div className="flex flex-col smmd:justify-center">
                <h3 className="text-left text-2xl font-bold">
                  JUST Aesthetics
                </h3>
                <div className="w-[100px] h-0.5 bg-black"></div>
                <p className="mt-4 text-left">
                  At JUST Aesthetics, we offer a wide range of treatments and
                  services to our clients, such as non-surgical treatments,
                  results-driven skincare, and nutritional health. Our clinic is
                  located on Station Road in Croston. 
                </p>
                <Link href="#contact" passHref>
                  <a className="">
                    <p
                      className="w-[190px] font-poppins text-center font-semibold text-xs px-4 py-2 rounded-full border-2 border-black mt-2 hover:text-white hover:bg-black"
                      onClick={() => bookAppointment()}
                    >
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
