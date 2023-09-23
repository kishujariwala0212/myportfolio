import React from "react";
import { APP_NAME } from "../../../../constants/app.constant";

const BrandTag = () => {
  return (
    <div>
      <div className="brand_title text-white">
        <span>{APP_NAME.slice(0, -2)}</span>
        <span className="text-[#f8044e]">{APP_NAME.slice(-3)}</span>
      </div>
    </div>
  );
};

export default BrandTag;
