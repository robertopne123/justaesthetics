import Link from "next/link";
import { CatelogueItem } from "./catelogueItem";

export const CatelogueSnippet = () => {
  return (
    <>
      <div class="bg-black mt-10">
        <div className="grid smmd:grid-cols-4 grid-cols-2 smsm:grid-cols-1 gap-4 max-w-[1200px] px-4 mx-auto py-10">
          <div className="bg-gray-800 h-[300px] flex flex-col justify-between col-span-2 smsm:col-span-1 relative p-6">
            <img
              src="/cosmed.jpg"
              className="absolute top-0 left-0 w-full h-[300px] opacity-80 object-cover"
            ></img>
            <div className="flex flex-col gap-1 z-20">
              <img src="/cosmedlogo.png" className="w-[100px]" />
              <h3 className="font-bold text-white text-xl leading-5">
                Professional
              </h3>
              <h3 className="font-bold text-white text-xl leading-5">
                Skincare Products
              </h3>
              <p className="font-poppins text-[12px] font-thin text-white">
                Top quality products to <br />
                take care of your face
              </p>
            </div>
            <Link href="/catalogue">
              <a className="z-20">
                <p className="z-20 w-[120px] bg-white text-black text-center font-poppins font-semibold text-xs px-4 py-2 rounded-full mt-2 hover:text-white hover:bg-black">
                  VIEW ALL
                </p>
              </a>
            </Link>
          </div>
          <CatelogueItem
            productImage="/productImages/men3stepkit.png"
            productTitle="Men 3 Step Kit"
            productPrice="£110.00"
            brand="Cosmed"
            enquireLink="/"
          />
          <CatelogueItem
            productImage="/productImages/vitaminserum.png"
            productTitle="Vitamin C30 Serum - 30 ml"
            productPrice="£110.00"
            brand="Cosmed"
            enquireLink="/"
          />
        </div>
      </div>
    </>
  );
};
