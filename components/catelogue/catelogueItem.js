import Link from "next/link";

export const CatelogueItem = (props) => {
  return (
    <div className="border p-2 flex flex-col gap-4 relative h-[300px]">
      <p className="absolute left-2 top-2 font-poppins py-[3px] px-[5px] rounded bg-black text-white text-[9px]">
        {props.brand}
      </p>
      <img
        src={props.productImage}
        className="w-full h-[160px] object-contain mt-5"
      ></img>
      <p className="font-poppins text-xs font-semibold text-center">
        {props.productTitle}
      </p>
      <div className="flex flex-row divide-x divide-solid mx-auto">
        <div className="h-[20px] flex flex-col justify-center">
          <p className="font-poppins text-[10px] inline pr-2">
            {props.productPrice}
          </p>
        </div>
        <Link href={props.enquireLink}>
          <a className="h-[20px] flex flex-col justify-center">
            <p className="text-sky-400 font-poppins text-[10px] inline pl-2">
              Message Me
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};
