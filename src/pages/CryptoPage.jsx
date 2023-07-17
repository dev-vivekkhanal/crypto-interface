import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allCrypto } from "../helpers/crypToData";

const CryptoPage = () => {
  const [singleCryptoData, setSingleCryptoData] = useState(null);
  const params = useParams();

  useLayoutEffect(() => {
    const filtered = allCrypto?.filter(
      (filterData) => filterData?.id == params?.crypto_id
    );

    setSingleCryptoData(filtered);
    return () => {
      setSingleCryptoData(null);
    };
  }, []);

  useEffect(() => {
    console.log("singleCryptoData", singleCryptoData);
  }, [singleCryptoData]);

  return (
    <div>
      <h1>{params?.crypto_id}</h1>
    </div>
  );
};

export default CryptoPage;
