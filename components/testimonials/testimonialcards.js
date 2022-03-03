import Link from "next/link";

export const TestimonialCard = (props) => {
  return (
    <div className="bg-lightGrey border p-2 flex flex-col relative  drop-shadow ">
      <h3 className="text-center mt-4 font-semibold text-xl">{props.name}</h3>

      <p className="font-poppins text-md  text-center mt-4">{props.body}</p>
    </div>
  );
};
