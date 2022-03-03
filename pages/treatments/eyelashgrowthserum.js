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
        title=" Eyelash Growth Serum"
        description="The SkinTox Facial is the perfect way to get that glowing, glass smooth skin that lasts and gets better due to it's progressive results.
The treatment is delivered using a 24 Carat gold micro-channelled needle device. Toxin is combined with hyaluronic acid, growth factors, peptides and antioxidants to tighten pores, improve oily skin, stimulate new collagen plus elastic and improve pigmentation and fine lines."
      />
    </div>
  );
}
