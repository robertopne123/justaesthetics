import Link from "next/link";

export const TestimonialCard = (props) => {
  return (
    <div className="bg-lightGrey border p-2 flex flex-col relative h-[250px] drop-shadow ">
      <h3 className="text-center mt-4 font-medium text-lg">{props.name}</h3>

      <p className="font-poppins text-xs  text-center mt-4">{props.body}</p>
    </div>
  );
};
