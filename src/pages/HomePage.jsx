import React, { useLayoutEffect, useState } from "react";
// mock data
import { allCrypto } from "../helpers/crypToData";
// assets
import btc from "../assets/btc.png";
import eth from "../assets/eth.png";
import sol from "../assets/sol.png";
import bnb from "../assets/bnb.png";
// mui
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import { Link } from "react-router-dom";

// recoil
import { useRecoilState } from "recoil";
import { searchAtom } from "../recoil/searchAtom";
import { useEffect } from "react";

const HomePage = () => {
  // global variables
  const [searchText, setSearchText] = useRecoilState(searchAtom);
  // local variables
  const [allCryptos, setALlCryptos] = useState(null);
  // setting page data
  useLayoutEffect(() => {
    setALlCryptos(allCrypto);

    return () => {
      setALlCryptos(null);
    };
  }, []);

  // search filter logic
  useEffect(() => {
    const filtered = allCrypto?.filter((filterData) => {
      if (searchText === "") {
        return filterData;
      } else if (
        filterData?.name?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
        filterData?.code_name
          ?.toLowerCase()
          ?.includes(searchText?.toLowerCase())
      ) {
        return filterData;
      }
    });

    setALlCryptos(filtered);
  }, [searchText]);

  return (
    <div className="py-40 pb-24 sm:py-28 sm:pb-24">
      <div className=" max-w-[1200px] w-full mx-auto  p-5 bg-white min-h-[77vh] ">
        <div className="mb-5">
          <h1 className="text-xl sm:text-2xl font-semibold mb-1">
            Today's Cryptocurrency Prices by Market Cap
          </h1>

          <p className="text-gray-500 text-sm sm:text-base">
            The global crypto market cap is{" "}
            <span className=" font-semibold">$1.2T</span>, a
            <span className="text-red-500 font-semibold">
              <ArrowDropDownRoundedIcon />
            </span>
            <span className="text-red-500 font-semibold">1.03%</span> decrease
            over the last day.
          </p>
        </div>
        {/* titles */}
        <div className="hidden lg:grid grid-cols-8 gap-5 items-center py-5 border-b font-semibold text-sm">
          <h1 className="col-span-2">Name</h1>
          <h1>Price</h1>
          <h1>1hr%</h1>
          <h1>24h%</h1>
          <h1>7d%</h1>
          <h1>Market Cap</h1>
          <h1>Volume</h1>
          {/* <h1>Circulating</h1> */}
        </div>
        {/* values */}
        {allCryptos?.map((data, index) => {
          return (
            <React.Fragment key={data?.id}>
              {/* desktop view */}
              <div className="hidden lg:grid grid-cols-8 gap-5 items-center py-5 border-b hover:bg-gray-50 transition-all">
                {/* Name */}
                <div className="flex gap-5 items-center col-span-2">
                  <div className="font-medium">
                    <h2>{index + 1}</h2>
                  </div>
                  <div className=" flex-none">
                    <img
                      src={data?.logo}
                      alt={data?.code_name}
                      className="aspect-square  w-10 bg-gray-100 rounded-full"
                    />
                  </div>
                  {/* name */}
                  <div className=" ">
                    <Link
                      to={"crypto/" + data?.id}
                      className="font-semibold text-lg hover:underline-offset-4 hover:underline transition-all cursor-pointer"
                    >
                      {data?.name}
                    </Link>
                    <h2 className="text-sm text-gray-500">{data?.code_name}</h2>
                  </div>
                </div>

                {/* price */}
                <h1 className="font-medium ">$ {data?.currentPrice}</h1>

                {/* 1hr% */}
                {data?.stats?.map((statsData, index) => {
                  return (
                    <div key={index} className="font-medium">
                      {" "}
                      {statsData > 0 ? (
                        <h1 className="text-green-500 flex items-center gap-1">
                          <span>
                            <ArrowDropUpRoundedIcon />
                          </span>
                          <span>{statsData}</span>
                        </h1>
                      ) : (
                        <h1 className="text-red-500 flex items-center gap-1">
                          <span>
                            <ArrowDropDownRoundedIcon />
                          </span>
                          <span>{statsData?.toString()?.split("-")[1]}</span>
                        </h1>
                      )}{" "}
                    </div>
                  );
                })}

                {/* Market Cap */}
                <h1 className="font-medium">$ {data?.marketCap}</h1>
                {/*Volume*/}
                <div className="font-medium">
                  <h1>$ {data?.volume}</h1>
                  <h1 className="text-xs text-gray-500 mt-1">
                    {data?.volume_in_code}
                  </h1>
                </div>
                {/*Circulating*/}
                {/* <h1 className="font-medium">$ {data?.circulating}</h1> */}
              </div>
              {/* mobile view */}
              <div className="lg:hidden bg-gray-50 p-5  border border-gray-100 mb-5 rounded-lg ">
                <div className="flex justify-between">
                  {/* Name */}
                  <div className="flex gap-5 items-center ">
                    <div className="font-medium">
                      <h2>{index + 1}</h2>
                    </div>
                    <div className=" flex-none">
                      <img
                        src={data?.logo}
                        alt={data?.code_name}
                        className="aspect-square  w-10 bg-gray-100 rounded-full"
                      />
                    </div>
                    {/* name */}
                    <div className=" ">
                      <Link
                        to={"crypto/" + data?.id}
                        className="font-semibold text-lg hover:underline-offset-4 hover:underline transition-all cursor-pointer"
                      >
                        {data?.name}
                      </Link>
                      <h2 className="text-sm text-gray-500">
                        {data?.code_name}
                      </h2>
                    </div>
                  </div>

                  {/* price */}
                  <h1 className="font-semibold text-lg">
                    $ {data?.currentPrice}
                  </h1>
                </div>
                <div className="w-[92%] ml-auto mt-5">
                  <div className="flex justify-between items-center text-gray-500 text-sm ">
                    <h1 className="text-center  flex-1">1hr%</h1>
                    <h1 className="text-center  flex-1">24h%</h1>
                    <h1 className="text-center  flex-1">7d%</h1>
                  </div>
                  <div className="flex justify-between items-center">
                    {/* 1hr% */}
                    {data?.stats?.map((statsData, index) => {
                      return (
                        <div
                          key={index}
                          className="font-medium flex-1 flex justify-center items-center"
                        >
                          {statsData > 0 ? (
                            <h1 className="text-green-500 flex items-center gap-1">
                              <span>
                                <ArrowDropUpRoundedIcon />
                              </span>
                              <span>{statsData}</span>
                            </h1>
                          ) : (
                            <h1 className="text-red-500 flex items-center gap-1">
                              <span>
                                <ArrowDropDownRoundedIcon />
                              </span>
                              <span>
                                {statsData?.toString()?.split("-")[1]}
                              </span>
                            </h1>
                          )}{" "}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between mt-5">
                    {/* Market Cap */}
                    <div>
                      <h2 className="text-xs text-gray-500 mt-1">Market Cap</h2>
                      <h1 className="font-medium">$ {data?.marketCap}</h1>
                    </div>
                    {/*Volume*/}
                    <div className="font-medium">
                      <h2 className="text-xs text-gray-500 mt-1">Volume</h2>
                      <h1>$ {data?.volume}</h1>
                      <h2 className="text-xs text-gray-500 mt-1">
                        {data?.volume_in_code}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
