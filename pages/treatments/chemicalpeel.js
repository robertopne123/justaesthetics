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
        title=" Chemical Peel"
        description="A chemical peel involves the use of acid to break down layers of skin to improve a variety of skin problems including: Hyperpigmentation (uneven skin tone); dull, dry and oily skin; minimise the appearance of fine lines and wrinkles; blocked pores and Acne. 
"
        option1="Chemical Peel"
        option2="Luxury Chemical Peel"
      />
    </div>
  );
}
