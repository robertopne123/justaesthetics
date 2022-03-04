import Link from "next/link";

export const Footer = () => {
  function bookAppointment() {
    const msg = document.getElementById("yourMessage");
    const eType = document.getElementById("enquiryType");

    msg.value = "Hi, I'm interested in booking an appointment";
    eType.value = "2";
  }

  return (
    <div className="w-screen bg-black px-4 py-8">
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-10">
        <div className="flex flex-col gap-4">
          <img src="/logo.png" className="w-[100px] h-[100px] mx-auto" />
          <Link href="#contact">
            <a>
              <p
                className="font-semibold text-white text-center font-poppins w-[200px] mx-auto text-xs px-4 py-2 rounded-full border-2 border-white hover:text-black hover:bg-white"
                onClick={() => bookAppointment()}
              >
                BOOK AN APPOINTMENT
              </p>
            </a>
          </Link>
          <div className="flex flex-row gap-10 mx-auto">
            <Link href="https://www.facebook.com/JUSTClinicalAesthetics/">
              <a>
                <div className="bg-white p-2 rounded-full group border-2 border-white hover:bg-black">
                  <img
                    src="/fb.svg"
                    className="h-[20px] w-[20px] invert group-hover:invert-0"
                  />
                </div>
              </a>
            </Link>
            <Link href="https://www.instagram.com/justaesthetics_cj/">
              <a>
                <div className="bg-white p-2 rounded-full group border-2 border-white hover:bg-black">
                  <img
                    src="/ig.svg"
                    className="h-[20px] w-[20px] invert group-hover:invert-0"
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray-300 text-sm uppercase md:text-left text-center">
            Links
          </p>
          <Link href="/treatments">
            <a>
              <p className="text-white text-lg md:text-left text-center hover:underline">
                Treatments
              </p>
            </a>
          </Link>
          <Link href="/catalogue">
            <a>
              <p className="text-white text-lg md:text-left text-center hover:underline">
                Catalogue
              </p>
            </a>
          </Link>
          <Link href="https://justaesthetics.isagenix1.com/en-gb/">
            <a>
              <p className="text-white text-lg md:text-left text-center hover:underline">
                Isagenix
              </p>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <p className="text-white text-lg md:text-left text-center hover:underline">
                Contact
              </p>
            </a>
          </Link>
        </div>
        <div className="lg:flex hidden"></div>
        <div className="flex flex-col justify-center mx-auto gap-1">
          <p className="text-white text-lg text-center">Address</p>
          <Link href="https://g.page/JUSTClinicalAesthetics?share">
            <a>
              <p className="text-white font-poppins text-sm text-center hover:underline">
                62 Station Rd, Croston, <br />
                Preston, PR26 9RN
              </p>
            </a>
          </Link>

          <p className="text-white text-lg text-center">Phone</p>
          <Link href="tel:07919282994">
            <a>
              <p className="text-white font-poppins text-sm text-center hover:underline">
                07919 282994
              </p>
            </a>
          </Link>
          <p className="text-white text-lg text-center">Email</p>
          <Link href="mailto:hello@justaesthetics.co.uk">
            <a>
              <p className="text-white font-poppins text-sm text-center hover:underline">
                hello@justaesthetics.co.uk
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
