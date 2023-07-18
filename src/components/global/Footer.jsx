import React from "react";
import { Link, useLocation } from "react-router-dom";
// mui
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const Footer = () => {
  // local variables
  const location = useLocation();
  return (
    <footer className=" bg-white fixed inset-x-0 bottom-0">
      <div className="p-5 max-w-[1200px] w-full mx-auto flex justify-around items-center">
        <span>
          <AccountBalanceWalletRoundedIcon
            fontSize="large"
            className={` ${
              location?.pathname !== "/" ? "text-gray-700" : "text-gray-400"
            } cursor-not-allowed transition-all`}
          />
        </span>

        <Link to="/">
          <ExploreRoundedIcon
            fontSize="large"
            className={` ${
              location?.pathname == "/" ? "text-gray-700" : "text-gray-400"
            }  transition-all`}
          />
        </Link>

        <span>
          <NotificationsRoundedIcon
            fontSize="large"
            className="text-gray-400 cursor-not-allowed"
          />
        </span>

        <span>
          <SettingsRoundedIcon
            fontSize="large"
            className="text-gray-400 cursor-not-allowed"
          />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
