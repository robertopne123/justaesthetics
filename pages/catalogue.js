import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { Intro } from "../components/intro";
import { Treatments } from "../components/treatmentTemplate/treatments";
import { CatelogueSnippet } from "../components/catelogue/catelogueSnippet";
import { Schemes } from "../components/schemes";
import { CatelogueItem } from "../components/catelogue/catelogueItem";
import { Footer } from "../components/footer";
import { getFilteredData, Data } from "../components/catelogue/data";
import { useState, useEffect } from "react";

export default function Catalogue() {
  const data = [
    {
      brand: "COSMED",
      image: "/productImages/brighteningcollection.png",
      title: "Brightening Collection",
      price: "60",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/calmingcollection.png",
      title: "Calming Collection",
      price: "50",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedacnecollection.png",
      title: "Cosmed Acne Collection",
      price: "100",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedantioxidantelixir.png",
      title: "Cosmed Antioxidant Elixir",
      price: "46",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedbodyrevitalisingscrub.png",
      title: "Cosmed Body - Revitalising Scrub",
      price: "46",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedclarifyingsolution.png",
      title: "Cosmed Clarifying Solution",
      price: "30",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedcleansingmilk100.png",
      title: "Cosmed Cleansing Milk - 100ml",
      price: "27",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedcleansingmilk200.png",
      title: "Cosmed Cleansing Milk - 200ml",
      price: "38",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmeddeepcleansinggel100.png",
      title: "Cosmed Deep Cleansing Gel - 100ml",
      price: "27",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmeddeepcleansinggel.png",
      title: "Cosmed Deep Cleansing Gel - 200ml",
      price: "38",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedfacepolish.png",
      title: "Cosmed Face Polish",
      price: "46",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedformendailycleanser.png",
      title: "Cosmed For Men Daily Cleanser",
      price: "28",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedformendailymoisturiser.png",
      title: "Cosmed For Men Daily Moisturiser",
      price: "46",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedformeninvigoratingscrub.png",
      title: "Cosmed For Men Invigorating Scrub",
      price: "46",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedhairtoxconditioner.png",
      title: "Cosmed HairTox Conditioner",
      price: "41",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedhairtoxpeptideshampoo.png",
      title: "Cosmed HairTox Peptide Shampoo",
      price: "41",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedhairtoxshampooconditioner.png",
      title: "Cosmed HairTox Shampoo Conditioner",
      price: "78",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedhydrateprodaynight.png",
      title: "Cosmed Hydrate Pro Day Night",
      price: "49",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedmaskpeel20.png",
      title: "Cosmed Mask Peel - 20ml",
      price: "40",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedmen3stepkit.png",
      title: "Cosmed Men 3 Step Kit",
      price: "110",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedpropeptideeyeserum15.png",
      title: "Cosmed Pro Peptide Eye Serum",
      price: "38",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedproretinalserum.png",
      title: "Cosmed Pro Retinal Serum - 15ml",
      price: "46",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/cosmedvitaminc30serum.png",
      title: "Cosmed Vitamin C30 Serum - 30 ml",
      price: "65",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/dailyessentialscollection.png",
      title: "Daily Essential Collection",
      price: "60",
      link: "/",
    },
    {
      brand: "Hikari",
      image: "/productImages/hikarispf50.png",
      title: "Hikari SPF 50 - 30 ml",
      price: "48",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/mommacollection.png",
      title: "Momma Collection",
      price: "50",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/peelprepkit.png",
      title: "Peel Prep Kit",
      price: "125",
      link: "/",
    },
    {
      brand: "COSMED",
      image: "/productImages/thepurifyingcollection.png",
      title: "The Purifying Collection",
      price: "50",
      link: "/",
    },
  ];

  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [sortType, setSortType] = useState("bestMatch");
  const [selectedItem, setSelectedItem] = useState("");

  let sorted = [];

  const sortArray = (type) => {
    const types = {
      bestmatch: "bestMatch",
      lowtohi: "lowToHigh",
      hightolow: "highToLow",
    };

    let sortProperty = "";

    switch (type) {
      case "1":
        sortProperty = types.bestmatch;
        break;
      case "2":
        sortProperty = types.lowtohi;
        break;
      case "3":
        sortProperty = types.hightolow;
        break;
    }

    console.log(sortProperty);

    switch (sortProperty) {
      case types.bestmatch:
        sorted = [...result];
        break;
      case types.lowtohi:
        sorted = [...result].sort((a, b) => a.price - b.price);
        break;
      case types.hightolow:
        sorted = [...result].sort((a, b) => b.price - a.price);
        break;
    }

    console.log(sorted);

    setResult(sorted);
  };

  const sortArrayFilter = (type, array) => {
    const types = {
      bestmatch: "bestMatch",
      lowtohi: "lowToHigh",
      hightolow: "highToLow",
    };

    let sortProperty = "";

    switch (type) {
      case "1":
        sortProperty = types.bestmatch;
        break;
      case "2":
        sortProperty = types.lowtohi;
        break;
      case "3":
        sortProperty = types.hightolow;
        break;
    }

    console.log(array);

    switch (sortProperty) {
      case types.bestmatch:
        sorted = [...array];
        break;
      case types.lowtohi:
        sorted = [...array].sort((a, b) => a.price - b.price);
        break;
      case types.hightolow:
        sorted = [...array].sort((a, b) => b.price - a.price);
        break;
    }

    console.log(sorted);

    setResult(sorted);
  };

  useEffect(() => {
    sortArray(sortType);

    if (query === "") {
      let sort = document.getElementById("sort");
      sortArrayFilter(sort.value, data);
    }
  }, [sortType]);

  function getData() {
    return data;
  }

  function getFilteredData(e) {
    const query = e.target.value;
    setQuery(query);
    console.log(query);
    search();
  }

  function getSortedData(e) {
    let sortedData = "";
    let sortType = "";

    if (e.target.value == "1") {
      sortType = "best match";
    } else if (e.target.value == "2") {
      sortType = "low-to-high";
    } else if (e.target.value == "3") {
      sortType = "high-to-low";
    }

    setResult(sortedData);
  }

  function search() {
    const foundItems = data.filter((item) =>
      item.title
        .toString()
        .toLowerCase()
        .includes(query.toString().toLowerCase())
    );
    // const foundItems = data.filter((item) => item{2}.includes(query));
    foundData = foundItems;

    let sort = document.getElementById("sort");

    console.log(foundItems);

    // setResult(foundItems);
    sortArrayFilter(sort.value, foundItems);
  }

  let foundData = [];

  function loadData() {
    if (query === "") {
    } else {
      {
      }
    }
  }

  function getSelectedItem(data) {
    setSelectedItem(data);
    console.log(data);
  }

  return (
    <div className={styles.container}>
      <Nav />
      <div className="w-full h-[200px] sm:h-[400px] relative -z-10">
        <Image
          src="/catelogue.jpg"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          priority="true"
          className="absolute top-0 left-0 -z-50"
        />
        <div className="flex flex-col h-full justify-center gap-2 -z-40">
          <img src="/cosmedlogo.png" className="w-[100px] mx-auto -z-10" />
          <h3 className="font-bold text-black text-2xl leading-5 text-center -z-10">
            Professional
          </h3>
          <h3 className="font-bold text-black text-2xl leading-5 text-center -z-10">
            Skincare Products
          </h3>
          <p className="font-poppins text-[14px] font-thin text-black text-center -z-10">
            Top quality products to <br />
            take care of your face
          </p>
        </div>
      </div>
      <div className="bg-black w-screen h-[50px] shadow-md">
        <div className="flex flex-row justify-end max-w-[1200px] mx-auto">
          <div className="inline-block relative smmd:w-64 w-full">
            <input
              className="block appearance-none h-full w-full bg-white font-poppins text-sm hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
              id="search"
              type="text"
              name="search"
              placeholder="Search products..."
              onChange={(e) => getFilteredData(e)}
            ></input>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                fill="none"
                stroke="#BCBFC2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidt5="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <select
              className="bg-transparent text-white border-black text-sm font-poppins font-bold placeholder-black h-[50px] outline-none w-[170px] pl-4 px-1"
              id="sort"
              type="text"
              name="sort"
              placeholder=""
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="1" className="text-black">
                Best Match
              </option>
              <option value="2" className="text-black">
                Price (low to high)
              </option>
              <option value="3" className="text-black">
                Price (high to low)
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full relative inset-y-0 right-0">
        <div className="absolute right-0 top-0 w-[500px] h-[1000px]">
          <Image
            src="/face.png"
            alt=""
            layout="fill"
            priority="true"
            className="h-[1000px] object-contain ml-auto"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="my-24 max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4">
          {result.map((item) => (
            <CatelogueItem
              key={item.title}
              brand={item.brand}
              productImage={item.image}
              productTitle={item.title}
              productPrice={item.price}
              itemGrabber={getSelectedItem}
              transparent="True"
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
