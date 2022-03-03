import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Nav } from "../../components/nav";
import { Hero } from "../../components/hero";
import { Intro } from "../../components/intro";
import { CatelogueSnippet } from "../../components/catelogue/catelogueSnippet";
import { Schemes } from "../../components/schemes";
import { Testimonials } from "../../components/testimonials";
import { Treatments } from "../../components/treatmentTemplate/treatments";
import { TreatmentPageTemplate } from "../../components/treatmentpagetemplate";

export default function Home() {
  return (
    <div className={styles.container}>
      <TreatmentPageTemplate
        title=" Lips"
        product1="Juvenderm Ultra"
        description="Juvéderm®️ ULTRA 3 is a range of fillers that's dedicated to providing full, soft, natural looking lips which smooth's fine lines and enhances the mouth area. Last's 6 - 9 months."
        product2="Juvenderm Vycross"
        description2="Juvederm Vycross is Allergan’s most recent released range of dermal filler products which are longer-lasting, smoother to inject, biodegradable, and reversible. They represent the latest technology in dermal fillers."
        option1="Juvenderm Ultra 1/2ml"
        option2="Juvenderm Ultra 1ml"
        option3="Juvenderm Vycross 1/2ml"
        option4="Juvenderm Vycross 1ml"
        option5="Other"
      />
    </div>
  );
}
