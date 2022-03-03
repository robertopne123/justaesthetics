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
        title=" Dermal Fillers"
        description="Needs description
         
"
        option1="Cheeks"
        option2="Nose To Mouth"
        option3="Mouth To Chin"
        option4="Peri-Oral Lines"
      />
    </div>
  );
}
