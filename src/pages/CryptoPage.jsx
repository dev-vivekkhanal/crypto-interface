import React, { useEffect, useLayoutEffect } from "react";
// react router
import { useParams } from "react-router-dom";
// mock data
import { allCrypto } from "../helpers/crypToData";
// recoil
import { useRecoilState } from "recoil";
import { selectedCrptoAtom } from "../recoil/selectedCrptoAtom";
// components
import CryptoStatsAndCommerce from "../components/cryptoPage/CryptoStatsAndCommerce";
import CryptoGraph from "../components/cryptoPage/CryptoGraph";

const CryptoPage = () => {
  // global variable
  const [singleCryptoData, setSingleCryptoData] =
    useRecoilState(selectedCrptoAtom);
  // local variable
  const params = useParams();

  // filter according to the url param
  useLayoutEffect(() => {
    const filtered = allCrypto?.filter(
      (filterData) => filterData?.id == params?.crypto_id
    );

    setSingleCryptoData(filtered);
    return () => {
      setSingleCryptoData(null);
    };
  }, []);

  return (
    <div className=" min-h-screen pt-20 relative z-0">
      <div className="p-5 max-w-[1200px] w-full mx-auto ">
        <CryptoStatsAndCommerce singleCryptoData={singleCryptoData} />
        <CryptoGraph singleCryptoData={singleCryptoData} />
      </div>
    </div>
  );
};

export default CryptoPage;
