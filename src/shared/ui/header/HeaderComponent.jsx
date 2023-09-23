import React from "react";
import NavGroup from "./components/NavGroup";
import { BTN_DOWNLOAD_RESUME } from "../../../constants/common.constant";
import BrandTag from "./components/BrandTag";

const HeaderComponent = () => {
  return (
    <div className="header bg-[rgba(0,0,0,0.7)] flex items-center px-[60px] z-20 fixed h-16 w-full justify-between border-b-4 border-[#252525]">
      <BrandTag />
      <NavGroup />
      <div>
        <button className="border-none bg-[#f8044e] py-2 px-5 text-sm text-white rounded-lg font-semibold">
          {BTN_DOWNLOAD_RESUME}
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
