export const Schemes = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-3 px-4">
      <div className="bg-[#EFEFEF] h-[200px] w-[80%] relative flex flex-col justify-between">
        <div className="h-full w-full border-2 border-black absolute -translate-x-2 -translate-y-2 -z-20"></div>
        <img
          src="/loyalty.svg"
          className="w-[30px] h-[30px] mx-auto mt-4"
        ></img>
        <h3 className="p-4 font-semibold text-md leading-[18px] text-center">
          Buy 5 treatments or products over £50 to get the next free
        </h3>

        <p className="px-4 font-poppins text-xs text-center mb-4">
          Our loyalty scheme rewards you for 5 purchases across our treatments
          and products
        </p>
      </div>
    </div>
  );
};
