import { Treatment } from "./treatment";

export const Treatments = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto grid smmd:grid-cols-4 grid-cols-2 smsm:grid-cols-1 gap-4 px-4">
        <Treatment
          image="/placeholder.png"
          title="Anti-Aging Treatments"
        ></Treatment>
        <Treatment image="/placeholder.png" title="Skintox"></Treatment>
        <Treatment
          image="/placeholder.png"
          title="Eyelash Growth Serum"
        ></Treatment>
        <Treatment
          image="/treatments/chemical-peel.jpg"
          title="Chemical Peel"
        ></Treatment>
        <Treatment
          image="/treatments/dermaplane.jpg"
          title="Dermaplane"
        ></Treatment>
        <Treatment image="/placeholder.png" title="Dermal Fillers"></Treatment>
        <Treatment image="/placeholder.png" title="Lips"></Treatment>
      </div>
    </>
  );
};
