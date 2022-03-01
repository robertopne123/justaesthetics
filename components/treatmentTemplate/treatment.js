export const Treatment = (props) => {
  return (
    <div className="relative overflow-clip bg-gray-800">
      <img
        src={props.image}
        className="w-full smsm:h-[150px] h-full object-cover opacity-80"
      ></img>
      <p className="w-full text-center px-4 text-white font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        {props.title}
      </p>
    </div>
  );
};
