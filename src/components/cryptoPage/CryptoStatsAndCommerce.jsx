import { useState } from "react";
// mui
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
// components
import BigButtons from "./BigButtons";

const CryptoStatsAndCommerce = (props) => {
  const [arrowStatus, setArrowStatus] = useState(false);
  const walletValue =
    Number(props?.singleCryptoData?.[0]?.currentPrice?.split(",")?.join("")) *
    Number(props?.singleCryptoData?.[0]?.current_wallet_balance);
  return (
    <section className="bg-white p-5 rounded-xl drop-custom">
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-5 items-center">
          <img
            src={props?.singleCryptoData?.[0]?.logo}
            alt={props?.singleCryptoData?.[0]?.name}
            className="w-12"
          />

          <h1 className="font-medium">{props?.singleCryptoData?.[0]?.name}</h1>
        </div>

        <h2 className="text-gray-400 font-medium">
          {props?.singleCryptoData?.[0]?.code_name}
        </h2>
      </div>

      <div className="mb-5">
        <h1 className="text-3xl font-medium mb-1">
          {props?.singleCryptoData?.[0]?.current_wallet_balance}{" "}
          {props?.singleCryptoData?.[0]?.code_name}
        </h1>
        <div className="flex justify-between items-center">
          <h2 className="text-xl text-gray-400">
            $ {walletValue?.toFixed(2)} USD
          </h2>

          {props?.singleCryptoData?.[0]?.wallet_change_in_value > 0 ? (
            <h2 className="bg-green-500 text-white pr-5 pl-2 py-1 rounded-full flex items-center gap-1">
              <span>
                <ArrowDropUpRoundedIcon />
              </span>
              <span>
                {props?.singleCryptoData?.[0]?.wallet_change_in_value}
              </span>
            </h2>
          ) : (
            <h2 className="bg-red-500 text-white pr-5 pl-2 py-1 rounded-full flex items-center gap-1">
              <span>
                <ArrowDropDownRoundedIcon />
              </span>
              <span>
                {
                  props?.singleCryptoData?.[0]?.wallet_change_in_value
                    ?.toString()
                    ?.split("-")[1]
                }{" "}
                %
              </span>
            </h2>
          )}
        </div>
      </div>

      {/* hidden section */}
      <div
        className={` ${
          arrowStatus ? " max-h-[500px] ease-in" : " max-h-0 ease-out "
        }  transition-all duration-500 h-full  overflow-hidden`}
      >
        <div className="flex gap-5 p-5 justify-center items-center">
          <BigButtons
            type="Buy"
            code_name={props?.singleCryptoData?.[0]?.code_name}
          />
          <BigButtons
            type="Sell"
            code_name={props?.singleCryptoData?.[0]?.code_name}
          />
        </div>
      </div>

      {/* down arrow */}
      <div className="flex justify-center items-center text-gray-400">
        <button
          onClick={() => setArrowStatus(!arrowStatus)}
          className={` ${
            arrowStatus ? " rotate-90" : " -rotate-90"
          } transition-all duration-500 hover:bg-gray-100 active:bg-gray-200  w-[40px] aspect-square flex justify-center items-center rounded-full `}
        >
          <ArrowBackIosNewRoundedIcon className="" />
        </button>
      </div>
    </section>
  );
};

export default CryptoStatsAndCommerce;
