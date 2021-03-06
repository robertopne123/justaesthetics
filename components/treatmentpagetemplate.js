import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { Intro } from "../components/intro";
import { CatelogueSnippet } from "../components/catelogue/catelogueSnippet";
import { Schemes } from "../components/schemes";
import { Testimonials } from "../components/testimonials";
import { Treatments } from "../components/treatmentTemplate/treatments";
import { Footer } from "./footer";

export const TreatmentPageTemplate = (props) => {
  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />
        {props.image !== undefined ? (
          <div className="smmd:h-[400px] bg-gray-300 relative -z-20">
            <div className="absolute top-0 left-0 object-cover w-full smmd:h-[400px] h-full -z-10">
              <Image
                src={props.image}
                alt="Banner Image"
                layout="fill"
                objectFit="cover"
                priority="true"
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[800px] mx-4 sm:mx-16 md:mx-auto gap-x-12">
          <h1 className="col-span-1 md:col-span-2 text-3xl text-center my-16">
            {" "}
            {props.title}
          </h1>
          <div>
            {props.description2 === undefined ? (
              <h2 className="md:pl-4 mb-8 mt-12 text-3xl text-center md:text-start">
                Description
              </h2>
            ) : (
              <>
                {" "}
                <h2 className="md:pl-4 mb-8 mt-12 text-3xl text-center md:text-start">
                  {props.product1}
                </h2>
              </>
            )}

            <p>{props.description}</p>

            {props.description2 !== undefined ? (
              <div>
                <h2 className="md:pl-4 mb-8 mt-12 text-3xl text-center md:text-start">
                  {props.product2}
                </h2>
                <p>{props.description2}</p>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="w-full px-4  left-0 top-0 z-10 mx-auto">
            <div className="flex flex-col justify-center">
              <h3 className=" md:pl-4 mb-8 mt-12 text-3xl text-center md:text-start">
                Ask about bookings
              </h3>
              <form
                className="flex flex-col"
                name={`${props.title}${"form"}`}
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
                    className="border-b-4 bg-transparent border-black text-2xl placeholder-black h-[55px] appearance-none   mb-2 w-full pl-4 py-4 px-1 my-6"
                    id="fName"
                    type="text"
                    name="Name"
                    placeholder="Name *"
                    required
                  ></input>
                </div>

                <div>
                  <input
                    className="border-b-4 bg-transparent border-black text-2xl placeholder-black h-[55px] appearance-none   mb-2 w-full pl-4 py-2 px-1 my-6"
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email Address *"
                    required
                  ></input>
                </div>

                {props.option5 !== undefined ? (
                  <div>
                    <select
                      className="border-b-4 bg-transparent border-black text-2xl placeholder-black h-[55px] appearance-none   mb-2 w-full pl-4 py-2 px-1 my-6"
                      id="enquirytype"
                      type="text"
                      name="enquirytype"
                      placeholder=""
                      required
                    >
                      <option value="1" className="hidden">
                        Options
                      </option>
                      <option value="2">{props.option1}</option>
                      <option value="3">{props.option2}</option>
                      <option value="4">{props.option3}</option>
                      <option value="5">{props.option4}</option>
                      <option value="5">{props.option5}</option>
                    </select>
                  </div>
                ) : props.option4 !== undefined ? (
                  <div>
                    <select
                      className="border-b-4 bg-transparent border-black text-2xl placeholder-black h-[55px] appearance-none   mb-2 w-full pl-4 py-2 px-1 my-6"
                      id="enquirytype"
                      type="text"
                      name="enquirytype"
                      placeholder=""
                      required
                    >
                      <option value="1" className="hidden">
                        Options
                      </option>
                      <option value="2">{props.option1}</option>
                      <option value="3">{props.option2}</option>
                      <option value="4">{props.option3}</option>
                      <option value="5">{props.option4}</option>
                    </select>
                  </div>
                ) : props.option2 !== undefined ? (
                  <div>
                    <select
                      className="border-b-4 bg-transparent border-black text-2xl placeholder-black h-[55px] appearance-none   mb-2 w-full pl-4 py-2 px-1 my-6"
                      id="enquirytype"
                      type="text"
                      name="enquirytype"
                      placeholder=""
                      required
                    >
                      <option value="1" className="hidden">
                        Options
                      </option>
                      <option value="2">{props.option1}</option>
                      <option value="3">{props.option2}</option>
                    </select>
                  </div>
                ) : props.option1 !== undefined ? (
                  <p className="border-b-4 bg-transparent border-black text-2xl placeholder-black h-[55px] appearance-none   mb-2 w-full pl-4 py-2 px-1 my-6">
                    {props.option1}
                  </p>
                ) : (
                  <></>
                )}
                <div className="col-span-2">
                  <textarea
                    className="border-b-4 bg-transparent border-black text-2xl placeholder-black appearance-none   mb-2 w-full pl-4 py-2 px-1 my-6"
                    id="companyDescription"
                    name="companyDescription"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 mb-5">
                  <div>
                    <button
                      className="font-semibold bg-black text-white font-poppins text-md px-8 py-2 rounded-full border hover:text-black hover:bg-transparent hover:border hover:border-black"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
