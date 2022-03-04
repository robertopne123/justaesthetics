import Link from "next/link";
export const Treatment = (props) => {
  return (
    <div className="relative overflow-clip bg-gray-800 max-h-[250px] min-h-[150px] group">
      <Link href={props.link} passherf>
        <a>
          <img
            src={props.image}
            className="w-full h-[150px] h-full object-cover opacity-60 group-hover:opacity-80"
          ></img>
          <p className="w-full text-center text-lg px-4 text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            {props.title}
          </p>
        </a>
      </Link>
    </div>
  );
};
