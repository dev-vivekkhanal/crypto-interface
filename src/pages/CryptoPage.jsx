import React, { useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { allCrypto } from "../helpers/crypToData";
// recoil
import { useRecoilState } from "recoil";
import { selectedCrptoAtom } from "../recoil/selectedCrptoAtom";
import CryptoStatsAndCommerce from "../components/cryptoPage/CryptoStatsAndCommerce";

const CryptoPage = () => {
  // global variable
  const [singleCryptoData, setSingleCryptoData] =
    useRecoilState(selectedCrptoAtom);
  const params = useParams();

  //   filter according to the url param
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
    <div className=" min-h-screen pt-20">
      <div className="p-5 max-w-[1200px] w-full mx-auto">
        <CryptoStatsAndCommerce singleCryptoData={singleCryptoData} />
      </div>
    </div>
  );
};

export default CryptoPage;
