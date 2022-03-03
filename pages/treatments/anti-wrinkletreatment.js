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
        title=" Anti-Wrinkle Treatment"
        description="Combat the signs of ageing caused through expression in the safe hands of a qualified and registered aesthetics practitioner.
Treatments available for forehead lines / frown lines / brow lift / crows feet lines."
      />
    </div>
  );
}
