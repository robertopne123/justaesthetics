import Link from "next/link";

export const TestimonialCard = (props) => {
  return (
    <div className="bg-lightGrey border-2 border-black p-4 flex flex-col relative min-h-[200px] drop-shadow ">
      <h3 className="text-center font-semibold text-xl">{props.name}</h3>

      <p className="font-poppins text-sm text-center mt-4 line-clamp-7 text-ellipsis">
        {props.body}
      </p>
    </div>
  );
};
