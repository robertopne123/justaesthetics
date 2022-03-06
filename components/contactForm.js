import Image from "next/image";

export const ContactForm = () => {
  return (
    <div className="h-[500px] w-full relative" id="contact">
      <img
        src="/facebanner.png"
        alt="Banner Image"
        layout="fill"
        priority
        className="w-screen h-full object-cover object-right absolute top-0 left-0"
      />
      <div className="relative w-full bg min-h-[500px] max-w-[1200px] mx-auto px-4">
        <div className=" h-full w-full relative"></div>
        <div className="w-full px-4 absolute left-0 top-0 bottom-0 z-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="flex flex-col justify-center">
            <h3 className="bg-black text-white text-2xl pl-8 -translate-x-4 cutOff:translate-x-0 mb-2 py-1 font-bold w-[14.5ch] pr-4">
              Message Us
            </h3>
            <form
              className="flex flex-col"
              name="contactForm"
              method="POST"
              action="/success"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contactForm" />
              <input
                type="hidden"
                name="form-name"
                value="contactForm"
                className="h-[30px]"
              />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human:
                  <input name="bot-field" />
                </label>
              </p>

              <div>
                <input
                  className="border-b-2 bg-transparent border-black text-xl placeholder-black h-[50px] appearance-none mb-2 w-full pl-4 px-1"
                  id="fName"
                  type="text"
                  name="Name"
                  placeholder="Name *"
                  required
                ></input>
              </div>

              <div>
                <input
                  className="border-b-2 bg-transparent border-black text-xl placeholder-black h-[50px] appearance-none mb-2 w-full pl-4 px-1"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email Address *"
                  required
                ></input>
              </div>

              <div>
                <input
                  className="border-b-2 bg-transparent border-black text-xl placeholder-black h-[50px] appearance-none mb-2 w-full pl-4 px-1"
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                ></input>
              </div>

              <div>
                <select
                  className="border-b-2 bg-transparent border-black text-xl placeholder-black h-[50px] appearance-none mb-2 w-full pl-4 px-1"
                  id="enquiryType"
                  type="text"
                  name="enquiryType"
                  placeholder=""
                  required
                >
                  <option value="1" className="hidden">
                    Enquiry Type *
                  </option>
                  <option value="2">Bookings</option>
                  <option value="3">Treatments</option>
                  <option value="4">Services</option>
                </select>
              </div>

              <div className="col-span-2">
                <textarea
                  className="border-b-2 bg-transparent border-black text-xl placeholder-black appearance-none mb-2 w-full pl-4 px-1"
                  id="yourMessage"
                  name="yourMessage"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <button
                    className="z-20 w-[120px] bg-black text-white text-center font-poppins font-semibold text-xs px-4 py-2 rounded-full border-2 border-black mt-2 hover:text-black hover:bg-white"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
