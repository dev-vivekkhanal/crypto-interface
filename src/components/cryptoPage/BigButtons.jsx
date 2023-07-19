import React from "react";

const BigButtons = (props) => {
  return (
    <button className=" w-full max-w-[200px] space-y-5 rounded-xl bg-white  drop-custom  transition-all p-5 active:scale-95">
      <div
        className={`mx-auto ${
          props?.type === "Buy" ? "bg-blue-500 " : "bg-pink-500 "
        } flex justify-center aspect-square w-[5rem] rounded-full p-5 text-3xl font-semibold text-white`}
      >
        $
      </div>
      <h1 className="text-lg font-medium">
        <span>{props?.type}</span> <span>{props?.code_name}</span>
      </h1>
    </button>
  );
};

export default BigButtons;
