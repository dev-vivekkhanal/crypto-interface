import React, { useLayoutEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
// assets
import logo from "../../assets/logo.svg";
// mui icons
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
// recoil
import { useRecoilState } from "recoil";
import { searchAtom } from "../../recoil/searchAtom";
import { selectedCrptoAtom } from "../../recoil/selectedCrptoAtom";
import { allCrypto } from "../../helpers/crypToData";

const Header = () => {
  // global variables
  const [searchText, setSearchText] = useRecoilState(searchAtom);
  const [singleCryptoData, setSingleCryptoData] =
    useRecoilState(selectedCrptoAtom);
  // local variables
  const location = useLocation();
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
    <>
      {location?.pathname == "/" ? (
        <header className=" bg-white fixed inset-x-0 top-0">
          <div className=" p-5 max-w-[1200px] w-full mx-auto flex flex-col sm:flex-row  gap-5 justify-between sm:items-center">
            <div>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 bg- rounded-lg bg-gray-100 placeholder:font-semibold "
                  placeholder="Search..."
                  value={searchText}
                  onChange={(e) => setSearchText(e?.target?.value)}
                  required
                />
              </div>
            </form>
          </div>
        </header>
      ) : (
        <header className=" bg-white fixed inset-x-0 top-0">
          <div className="p-5 max-w-[1200px] w-full mx-auto flex justify-between items-center">
            <Link
              to="/"
              className=" transition-all  active:bg-gray-200 hover:bg-gray-100 aspect-square rounded-full w-[35px] flex justify-center items-center"
            >
              <ArrowBackIosNewRoundedIcon className="text-gray-500" />
            </Link>
            <h1 className="text-2xl font-medium">
              {singleCryptoData && singleCryptoData[0]?.name + " Wallet"}
            </h1>

            <button className=" transition-all  active:bg-gray-200 hover:bg-gray-100 aspect-square rounded-full w-[35px] flex justify-center items-center">
              <MoreVertRoundedIcon className="text-gray-500" />
            </button>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
