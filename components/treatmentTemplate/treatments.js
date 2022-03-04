import { Treatment } from "./treatment";

export const Treatments = () => {
  return (
    <>
      <div className="border-2 border-black max-w-[1200px] mx-4 -translate-x-2 -translate-y-2 lgxl:mx-auto">
        <div className="gap-4 max-w-[1200px] mx-auto grid md:grid-cols-4 grid-cols-2 smsm:grid-cols-1 translate-x-2 translate-y-2">
          <Treatment
            image="/treatments/antiwrinkle.jpg"
            title="Anti-aging Treatments"
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
        </div>
      </div>
    </>
  );
};
