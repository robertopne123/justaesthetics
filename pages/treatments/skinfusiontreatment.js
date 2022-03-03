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
        title=" Golden Collagen Skin Fusion Treatment"
        description="A personalised and innovative treatment combining a bespoke Meso-Cocktail of hyaluronic acid and antioxidants via micro-infusion. The benefits of this treatment include:
- Stimulation of new collagen and elastin
- Brightens dull skin
- Targets fine lines
- Improves Post acne scarring
- Mature skin
- Pigmentation
- Skin Firming
- Wrinkle Prevention
- Facial Contouring"
        option1="1 Area"
        option2="2 Areas"
        option3="3 Areas"
        option4="Revital-Eyes"
      />
    </div>
  );
}
