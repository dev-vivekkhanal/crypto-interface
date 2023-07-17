import React from "react";
import { useEffect } from "react";
// assets
import logo from "../../assets/logo.svg";
// recoil
import { useRecoilState } from "recoil";
import { searchAtom } from "../../recoil/searchAtom";
import { Link } from "react-router-dom";

const Header = () => {
  // global variables
  const [searchText, setSearchText] = useRecoilState(searchAtom);

  useEffect(() => {
    console.log("searchText", searchText);
  }, [searchText]);

  return (
    <header className="p-5 max-w-[1200px] w-full mx-auto flex justify-between items-center">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <form>
        <label
          for="default-search"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
    </header>
  );
};

export default Header;
