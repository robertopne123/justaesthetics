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
import { ContactForm } from "../components/contactForm";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Nav />
      <Hero />
      <Intro />
      <Treatments />
      <Schemes />
      <Testimonials />
      <CatelogueSnippet />
      <ContactForm />
      <Footer />
    </div>
  );
}
