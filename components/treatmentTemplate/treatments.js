import { Treatment } from "./treatment";

export const Treatments = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto grid smmd:grid-cols-4 grid-cols-2 smsm:grid-cols-1 gap-4 px-4">
        <Treatment
          image="/treatments/antiwrinkle.jpg"
          title="Anti-wrinkle Treatments"
          link="/treatments/anti-wrinkletreatment"
        />
        <Treatment
          image="/treatments/skintox.png"
          title="Skintox"
          link="/treatments/skintox"
        />
        <Treatment
          image="/treatments/eyelash.jpg"
          title="Eyelash Growth Serum"
          link="/treatments/eyelashgrowthserum"
        />
        <Treatment
          image="/treatments/collagen.jpg"
          title="Skin Fusion Treatment"
          link="/treatments/skinfusiontreatment"
        />
        <Treatment
          image="/treatments/chemical-peel.jpg"
          title="Chemical Peel"
          link="/treatments/chemicalpeel"
        />
        <Treatment
          image="/treatments/dermapeel.jpg"
          title="Dermapeel"
          link="/treatments/dermapeel"
        />
        <Treatment
          image="/treatments/dermaplane.jpg"
          title="Dermaplane"
          link="/treatments/dermaplane"
        />
        <Treatment
          image="/treatments/dermafiller.jpg"
          title="Dermal Fillers"
          link="/treatments/dermalfillers"
        />
        <Treatment
          image="/placeholder.png"
          title="Lips"
          link="/treatments/lips"
        />
      </div>
    </>
  );
};
