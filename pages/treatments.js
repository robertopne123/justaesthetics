import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Nav } from "../components/nav";
import { Treatment } from "../components/treatmentTemplate/treatment";
import { Footer } from "../components/footer";

export default function catalogue() {
  return (
    <div className={styles.container}>
      <Nav />
      <div className="h-[450px] bg-gray-300 relative -z-20 mb-16">
        <div className="relative object-cover w-full  h-[450px] ">
          <Image
            src="/lipbanner.png"
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
            priority="true"
          />
        </div>

        <div className="absolute top-0 left-0 right-0 max-w-[1200px] h-full flex flex-col justify-center mx-auto">
          <h1 className="mt-4 text-left z-20 px-4 sm:px-8 md:px-16 text-white text-3xl font-semibold">
            Aesthetic Treatments
          </h1>
          <p className=" md:w-1/2 px-4 sm:px-8 md:px-16 mt-4 text-left  z-20 text-md sm:text-lg text-white">
            We specialise in wellbeing, aesthetic and skin treatments to bring
            value and happiness to our clients’ lives. For any questions left
            unanswered please refer to our FAQ or contact us via our form
          </p>
        </div>
      </div>

      <div className="my-16 bg-lightGrey p-8 max-w-[800px] min-mx-4 mx-auto">
        <div className="grid grid-cols-1 gap-y-5 bg-white p-8">
          <h3 className="bg-black text-white smmd:text-2xl text-xl pl-8 -translate-x-8 py-1 font-bold pr-4">
            Consultations for
          </h3>
          <Link href="/treatments/anti-wrinkletreatment" passHref>
            <a>
              <p className="font-semibold"> Anti-aging treatment</p>
            </a>
          </Link>
          <Link href="/treatments/skintox" passHref>
            <a>
              <p className="font-semibold"> Skintox</p>
            </a>
          </Link>
          <Link href="/treatments/eyelashgrowthserum" passHref>
            <a>
              <p className="font-semibold">Eyelash Growth Serum</p>
            </a>
          </Link>
          <p> Treatment From £100</p>
        </div>
        <div className="bg-white p-8 mt-8">
          <h3 className="bg-black text-white smmd:text-2xl text-xl pl-8 -translate-x-8 py-1 font-bold pr-4">
            Golden Collagen Skin Fusion Treatment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 mt-8">
            <Link href="/treatments/skinfusiontreatment" passHref>
              <a>
                <p className="font-semibold">1 Area</p>
              </a>
            </Link>
            <p className="sm:text-right">£200</p>
            <Link href="/treatments/skinfusiontreatment" passHref>
              <a>
                <p className="font-semibold">2 Areas</p>
              </a>
            </Link>
            <p className="sm:text-right">£300</p>
            <Link href="/treatments/skinfusiontreatment" passHref>
              <a>
                <p className="font-semibold">3 Areas</p>
              </a>
            </Link>
            <p className="sm:text-right">£400</p>
            <Link href="/treatments/skinfusiontreatment" passHref>
              <a>
                <p className="font-semibold">Revital-Eyes</p>
              </a>
            </Link>
            <p className="sm:text-right">£150</p>
          </div>
        </div>
        <div className="bg-white p-8 mt-8">
          <h3 className="bg-black text-white smmd:text-2xl text-xl pl-8 -translate-x-8 py-1 font-bold pr-4">
            Medical Grade Skin Care Treatments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 mt-8">
            <Link href="/treatments/chemicalpeel" passHref>
              <a>
                <p className="font-semibold">Chemical Peel</p>
              </a>
            </Link>
            <p className="sm:text-center">x1 £50</p>
            <p className="sm:text-right">x4 £160</p>
            <Link href="/treatments/chemicalpeel" passHref>
              <a>
                <p className="font-semibold">Luxury Chemical Peel</p>
              </a>
            </Link>
            <p className="sm:text-center">x1 £70</p>
            <p className="sm:text-right">x4 £240</p>
            <Link href="/treatments/dermapeel" passHref>
              <a>
                <p className="font-semibold">Dermapeel</p>
              </a>
            </Link>
            <p className="sm:text-center">x1 £60</p>
            <p className="sm:text-right">x4 £200</p>
            <Link href="/treatments/dermapeel" passHref>
              <a>
                <p className="font-semibold">Luxury Dermapeel</p>
              </a>
            </Link>
            <p className="sm:text-center">x1 £80</p>
            <p className="sm:text-right">x4 £280</p>
            <Link href="/treatments/dermaplane" passHref>
              <a>
                <p className="font-semibold">Dermaplane</p>
              </a>
            </Link>
            <p className="sm:text-center">x1 £40</p>
            <p className="sm:text-right">x4 £140</p>
            <Link href="/treatments/dermaplane" passHref>
              <a>
                <p className="font-semibold">The Ultimate dermaplane</p>
              </a>
            </Link>
            <p className="sm:text-center">x1 £50</p>
            <p className="sm:text-right">x4 £180</p>
          </div>
        </div>
        <div className="bg-white p-8 mt-8">
          <h3 className="bg-black text-white smmd:text-2xl text-xl pl-8 -translate-x-8 py-1 font-bold pr-4">
            Dermal Fillers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 mt-8">
            <Link href="/treatments/dermalfillers" passHref>
              <a>
                <p className="font-semibold">Cheeks</p>
              </a>
            </Link>
            <p className="sm:text-right ">FROM £150</p>
            <Link href="/treatments/dermalfillers" passHref>
              <a>
                <p className="font-semibold">Nose To Mouth</p>
              </a>
            </Link>
            <p className="sm:text-right">FROM £150</p>
            <Link href="/treatments/dermalfillers" passHref>
              <a>
                <p className="font-semibold">Mouth To Chin</p>
              </a>
            </Link>
            <p className="sm:text-right">FROM £150</p>
            <Link href="/treatments/dermalfillers" passHref>
              <a>
                <p className="font-semibold">Peri-Oral Lines</p>
              </a>
            </Link>
            <p className="sm:text-right">FROM £150</p>
          </div>
        </div>
        <div className="bg-white p-8 mt-8">
          <h3 className="bg-black text-white smmd:text-2xl text-xl pl-8 -translate-x-8 py-1 font-bold pr-4">
            Lips
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 mt-8">
            <Link href="/treatments/lips" passHref>
              <a>
                <p className="font-semibold">Juvederm Ultra</p>
              </a>
            </Link>
            <p className="sm:text-center">1/2ml £150</p>
            <p className="sm:text-right">1ml £200</p>
            <Link href="/treatments/lips" passHref>
              <a>
                <p className="font-semibold">Juvederm Vycross</p>
              </a>
            </Link>
            <p className="sm:text-center">1/2ml £175</p>
            <p className="sm:text-right">1ml £300</p>
            <Link href="/treatments/lips" passHref>
              <a>
                <p className="font-semibold col-span-1 sm:col-span-3">
                  Other Premium Brands Available Upon Request
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
