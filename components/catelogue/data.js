import { useState } from "react";

const data = [
  [
    "COSMED",
    "/productImages/brighteningcollection.jpg",
    "Brightening Collection",
    "£60",
    "/",
  ],
  [
    "COSMED",
    "/productImages/calmingcollection.jpg",
    "Calming Collection",
    "£50",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedacnecollection.jpg",
    "Cosmed Acne Collection",
    "£100",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedantioxidantelixir.jpg",
    "Cosmed Antioxidant Elixir",
    "£46",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedbodyrevitalisingscrub.jpg",
    "Cosmed Body - Revitalising Scrub",
    "£46",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedclarifyingsolution.jpg",
    "Cosmed Clarifying Solution",
    "£30",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedcleansingmilk100.jpg",
    "Cosmed Cleansing Milk - 100ml",
    "£27",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedcleansingmilk200.jpg",
    "Cosmed Cleansing Milk - 200ml",
    "£38",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmeddeepcleansinggel100.jpg",
    "Cosmed Deep Cleansing Gel - 100ml",
    "£27",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmeddeepcleansinggel.jpg",
    "Cosmed Deep Cleansing Gel - 200ml",
    "£38",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedfacepolish.jpg",
    "Cosmed Face Polish",
    "£46",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedformendailycleanser.jpg",
    "Cosmed For Men Daily Cleanser",
    "£28",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedformendailymoisturiser.jpg",
    "Cosmed For Men Daily Moisturiser",
    "£46",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedformeninvigoratingscrub.jpg",
    " Cosmed For Men Invigorating Scrub",
    "£46",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedhairtoxconditioner.jpg",
    "Cosmed HairTox Conditioner",
    "£41",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedhairtoxpeptideshampoo.jpg",
    "Cosmed HairTox Peptide Shampoo",
    "£41",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedhairtoxshampooconditioner.jpg",
    " Cosmed HairTox Shampoo Conditioner",
    "£78",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedhydrateprodaynight.jpg",
    "Cosmed Hydrate Pro Day Night",
    "£49",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedmaskpeel20.jpg",
    "Cosmed Mask Peel - 20ml",
    "£40",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedmen3stepkit.jpg",
    "Cosmed Men 3 Step Kit",
    "£110",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedpropeptideeyeserum15.jpg",
    "Cosmed Pro Peptide Eye Serum",
    "£38",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedproretinalserum.jpg",
    "Cosmed Pro Retinal Serum - 15ml",
    "£46",
    "/",
  ],
  [
    "COSMED",
    "/productImages/cosmedvitaminc30serum.jpg",
    "Cosmed Vitamin C30 Serum - 30 ml",
    "£65",
    "/",
  ],
  [
    "COSMED",
    "/productImages/dailyessentialscollection.jpg",
    "Daily Essential Collection",
    "£60",
    "/",
  ],
  [
    "Hikari",
    "/productImages/hikarispf50.jpg",
    "Hikari SPF 50 - 30 ml",
    "£48",
    "/",
  ],
  [
    "COSMED",
    "/productImages/mommacollection.jpg",
    "Momma Collection",
    "£50",
    "/",
  ],
  ["COSMED", "/productImages/peelprepkit.jpg", "Peel Prep Kit", "£125", "/"],
  [
    "COSMED",
    "/productImages/thepurifyingcollection.jpg",
    "The Purifying Collection",
    "£50",
    "/",
  ],
];

export function getFilteredData(e) {
  const query = e.target.value;
  setQuery(query);
  console.log(query);
  search();
}

export const Data = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(data | undefined);

  function getData() {
    return data;
  }

  function search() {
    const foundItems = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResult(foundItems);
  }
};
