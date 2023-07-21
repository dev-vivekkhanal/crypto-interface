import React, { useState, useEffect } from "react";
// recharts
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
// mock data
import { allCrypto } from "../../helpers/crypToData";
// assets
import activeDot from "../../assets/activeDot.svg";

const CryptoGraph = (props) => {
  // local variables
  const options = ["Day", "Week", "Month", "Year"];
  const [priceArray, setPriceArray] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  //find max function
  function max(input) {
    if (toString.call(input) !== "[object Array]") return false;
    return Math.max.apply(null, input);
  }

  //find min function
  function min(input) {
    if (toString.call(input) !== "[object Array]") return false;
    return Math.min.apply(null, input);
  }

  // set default active index value on viiting the page
  useEffect(() => {
    setPriceArray(
      allCrypto[activeIndex]?.graph_data?.map((data) => data?.price)
    );

    if (props?.singleCryptoData) {
      setActiveIndex(
        allCrypto
          ?.map((object) => object.id)
          .indexOf(props?.singleCryptoData[0]?.id)
      );
    }
  }, [props]);

  return (
    <section>
      {/* day/week/month/year selection */}
      <div className="flex justify-around  p-5">
        {options?.map((data, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setPriceArray(
                  allCrypto[index]?.graph_data?.map((data) => data?.price)
                );
              }}
              className={` ${
                activeIndex === index
                  ? "text-gray-100 bg-gray-400"
                  : "text-gray-500 bg-transparent"
              }   rounded-full px-3 py-2 transition-all `}
            >
              {data}
            </button>
          );
        })}
      </div>

      {/* graph container */}
      <div className="bg-white  rounded-xl">
        {/* lower and higher */}
        <div className=" flex justify-between gap-5 p-5 text-gray-400  font-medium">
          <div className="flex items-center justify-between gap-2">
            <span className="w-2 aspect-square rounded-full bg-red-500 block"></span>{" "}
            <span>Lower: ${min(priceArray)}</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="w-2 aspect-square rounded-full bg-green-500 block"></span>{" "}
            <span>Higher: ${max(priceArray)}</span>
          </div>
        </div>

        {/* graph */}
        <div className="relative mb-20 overflow-hidden  rounded-b-xl">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              key={props?.singleCryptoData?.[0]?.code_name}
              data={allCrypto[activeIndex]?.graph_data}
              margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
            >
              {/* custom gradients */}
              <defs>
                <linearGradient
                  id="customGradient1"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="5%" stopColor="#FF9018" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#FFAE2F" stopOpacity={0.05} />
                </linearGradient>

                <linearGradient
                  id="customGradient2"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="50%" stopColor="#FFAE2F" stopOpacity={1} />
                  <stop offset="60%" stopColor="#FFC843" stopOpacity={1} />
                </linearGradient>

                <linearGradient
                  id="customGradient3"
                  x1="50.0001"
                  y1="16.6666"
                  x2="50.0001"
                  y2="83.3333"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF9018" />
                  <stop offset="1" stopColor="#FFC03D" stopOpacity={0.42} />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={false}
                horizontal={false}
                opacity={0.5}
              />

              <Legend
                verticalAlign="top"
                wrapperStyle={{ bottom: 20, left: 25 }}
                height={36}
                content={
                  <CustomLegend singleCryptoData={props?.singleCryptoData} />
                }
              />

              <Tooltip cursor={false} content={<CustomTooltip />} />

              <Area
                type="monotone"
                name={allCrypto[activeIndex]?.code_name}
                dataKey="price"
                stroke="url(#customGradient2)"
                dot={<CustomDot />}
                activeDot={<CustomActiveDot />}
                strokeWidth={6}
                fill="url(#customGradient1)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default CryptoGraph;

// custom components for graph
export const CustomDot = (props) => {
  if (props?.index === 6)
    return (
      <svg>
        <circle
          cx={props?.cx}
          cy={props?.cy}
          r={12}
          stroke={"url(#customGradient3)"}
          fill={"url(#customGradient3)"}
        />

        <circle
          cx={props?.cx}
          cy={props?.cy}
          r={20}
          fill="#FF9018"
          fillOpacity="0.17"
        />
      </svg>
    );
};

export const CustomActiveDot = (props) => {
  return (
    <svg>
      <circle
        cx={props?.cx}
        cy={props?.cy}
        r={5}
        stroke={"#FF9018"}
        fill={"#FF9018"}
      />
    </svg>
  );
};

function CustomTooltip(props) {
  if (props?.active) {
    return (
      <div className="rounded-md bg-[#ffffff] text-[#1a1a1a] p-[1rem] shadow-2xl shadow-[#000000]">
        <h1 className="capitalize mr-2 text-base mb-2 font-bold ">
          {props?.payload?.[0]?.payload?.date}
        </h1>
        {props?.payload?.map((data) => (
          <div key={Math?.random()} className="">
            <div className="flex justify-start items-center ">
              <div
                style={{ background: "#FF9018" }}
                className={`h-[8px] aspect-square rounded-full mr-2 `}
              ></div>
              <div className="flex justify-between items-center  w-full text-sm">
                <span className="capitalize mr-2  font-semibold">
                  {data?.name}:
                </span>
                <span className=" font-semibold">${data?.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

function CustomLegend(props) {
  return (
    <div className="rounded-md  text-gray-600  flex gap-2 items-center font-semibold text-xl ">
      <div>
        <img src={activeDot} alt="active dot" className="w-5" />
      </div>
      <div>
        <h1>
          1 {props.payload[0]?.payload?.name} ={" "}
          {props?.singleCryptoData?.[0]?.currentPrice}{" "}
        </h1>
      </div>
    </div>
  );
}
