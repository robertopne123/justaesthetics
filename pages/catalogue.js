import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { Intro } from "../components/intro";
import { Treatments } from "../components/treatments";
import { CatelogueSnippet } from "../components/catelogue/catelogueSnippet";
import { Schemes } from "../components/schemes";
import { CatelogueItem } from "../components/catelogue/catelogueItem";

export default function catalogue() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="w-full h-[200px] sm:h-[400px] relative ">
        <Image
          src="/facecream.png"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          priority="true"
        />
      </div>
      <div className="w-full relative inset-y-0 right-0">
        <div className="absolute w-full h-[1000px]">
          <Image
            src="/face.png"
            alt=""
            layout="fill"
            objectFit="cover"
            priority="true"
          />
        </div>
      </div>
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-4 sm:mx-8 md:mx-16 ">
        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/brighteningcollection.jpg"
          productTitle=" Brightening Collection"
          productPrice="£60"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/calmingcollection.jpg"
          productTitle=" Calming Collection"
          productPrice="£50"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedacnecollection.jpg"
          productTitle=" Cosmed Acne Collection"
          productPrice="£100"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedantioxidantelixir.jpg"
          productTitle=" Cosmed Antioxidant Elixir"
          productPrice="£46"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedbodyrevitalisingscrub.jpg"
          productTitle=" Cosmed Body - Revitalising Scrub"
          productPrice="£46"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedbodyskinrescuebodyoil.jpg"
          productTitle=" Cosmed Body - Skin Rescue Body Oil"
          productPrice="£46"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedclarifyingsolution.jpg"
          productTitle=" Cosmed Clarifying Solution"
          productPrice="£30"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedcleansingmilk100.jpg"
          productTitle=" Cosmed Cleansing Milk - 100ml"
          productPrice="£27"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedcleansingmilk200.jpg"
          productTitle=" Cosmed Cleansing Milk - 200ml"
          productPrice="£38"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmeddeepcleansinggel100.jpg"
          productTitle=" Cosmed Deep Cleansing Gel - 100ml"
          productPrice="£27"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmeddeepcleansinggel.jpg"
          productTitle=" Cosmed Deep Cleansing Gel - 200ml"
          productPrice="£38"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedfacepolish.jpg"
          productTitle=" Cosmed Face Polish"
          productPrice="£46"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedformendailycleanser.jpg"
          productTitle=" Cosmed For Men Daily Cleanser"
          productPrice="£28"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedformendailymoisturiser.jpg"
          productTitle=" Cosmed For Men Daily Moisturiser"
          productPrice="£46"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedformeninvigoratingscrub.jpg"
          productTitle=" Cosmed For Men Invigorating Scrub"
          productPrice="£46"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedhairtoxconditioner.jpg"
          productTitle=" Cosmed HairTox Conditioner"
          productPrice="£41"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedhairtoxpeptideshampoo.jpg"
          productTitle=" Cosmed HairTox Peptide Shampoo"
          productPrice="£41"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedhairtoxshampooconditioner.jpg"
          productTitle=" Cosmed HairTox Shampoo Conditioner"
          productPrice="£78"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedhydrateprodaynight.jpg"
          productTitle=" Cosmed Hydrate Pro Day Night"
          productPrice="£49"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedmaskpeel20.jpg"
          productTitle=" Cosmed Mask Peel - 20ml"
          productPrice="£40"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedmen3stepkit.jpg"
          productTitle=" Cosmed Men 3 Step Kit"
          productPrice="£110"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedpropeptideeyeserum15.jpg"
          productTitle=" Cosmed Pro Peptide Eye Serum"
          productPrice="£38"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedproretinalserum.jpg"
          productTitle=" Cosmed Pro Retinal Serum - 15ml"
          productPrice="£46"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/cosmedvitaminc30serum.jpg"
          productTitle=" Cosmed Vitamin C30 Serum - 30 ml"
          productPrice="£65"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/dailyessentialscollection.jpg"
          productTitle=" Daily Essential Collection"
          productPrice="£60"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/hikarispf50.jpg"
          productTitle="Hikari SPF 50 - 30 ml"
          productPrice="£48"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/mommacollection.jpg"
          productTitle="Momma Collection"
          productPrice="£50"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/peelprepkit.jpg"
          productTitle="Peel Prep Kit"
          productPrice="£125"
          enquireLink="/"
        />

        <CatelogueItem
          brand="COSMED"
          productImage="/productImages/thepurifyingcollection.jpg"
          productTitle="The Purifying Collection"
          productPrice="£50"
          enquireLink="/"
        />
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
