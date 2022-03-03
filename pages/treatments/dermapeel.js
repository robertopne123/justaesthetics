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
        title=" Dermapeel"
        description="Dermaplaning plus peel, this is a results driven professional treatment design to transform the skin. It aims to reduce the signs of ageing, improve skin quality and keep skin looking youthful. 
"
        option1="DermaPeel"
        option2="Luxury Dermapeel"
      />
    </div>
  );
}
