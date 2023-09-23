import React from "react";
import * as NAV_ITEM from "../../../../constants/common.constant";

let navGroupJson = [
  {
    itemName: NAV_ITEM.NAV_HOME,
    to: "",
    icon: "",
  },
  {
    itemName: NAV_ITEM.NAV_VISION,
    to: "",
    icon: "",
  },
  {
    itemName: NAV_ITEM.NAV_SERVICE,
    to: "",
    icon: "",
  },
  {
    itemName: NAV_ITEM.NAV_SKILLS,
    to: "",
    icon: "",
  },
  {
    itemName: NAV_ITEM.NAV_ABOUT,
    to: "",
    icon: "",
  },
  {
    itemName: NAV_ITEM.NAV_CONTACT,
    to: "",
    icon: "",
  },
];

const NavGroup = () => {
  return (
    <div>
      <ul className="nav_group flex list-none gap-[5px]">
        {navGroupJson.map((e) => (
          <li>
            <a
              href={e.to}
              className="nav-list py-[7py] px-[14px] no-underline transition-colors duration-300 ease-in-out text-white capitalize text-base hover:text-[#f8044e]"
            >
              <span>{e.itemName}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavGroup;
