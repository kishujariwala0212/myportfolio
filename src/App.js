import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./views/Home";
import HeaderComponent from "./shared/ui/header";
import * as PERSONAL from "./constants/portfolio.constant";
import ThemeClock from "./views/tasks/collections/theme-clock";

const App = () => {
  const [fixed, setFixed] = useState(false);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  const viewportHeight = window.innerHeight;
  console.log(`Viewport Height: ${viewportHeight}px`);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollHeight = window.pageYOffset;
      setScrollViewHeight(newScrollHeight);
      console.log(newScrollHeight, "newScrollHeight");
      if (newScrollHeight > 500 && newScrollHeight < 30500) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeClock />
    // <>
    //   <div>
    //     <HeaderComponent />
    //     <div className="border border-rose-500 min-h-[500px] w-full bg-black flex">
    //       <div className="w-[70%] flex items-center text-white py-[30px] pl-[50px]">
    //         <div className="inner_profile_content">
    //           <div className="profile_content_collection flex flex-col mb-10 ">
    //             <label>Hello, my name is</label>
    //             <p className="flex gap-2.5 text-[55px] font-bold mb-2.5">
    //               <span>{PERSONAL.FIRST_NAME}</span>
    //               <span className="text-[#f8044e]">{PERSONAL.LAST_NAME}</span>
    //             </p>
    //             <h4 className="text-lg">I'am a {PERSONAL.OCCUPATION}.</h4>
    //           </div>
    //           <div>
    //             <div className="rounded-[20px] overflow-hidden flex">
    //               <input
    //                 className="py-2.5 px-5 min-w-[250px] rounded-tl-20 rounded-bl-20 border-none"
    //                 type="text"
    //                 placeholder="Enter Your Message"
    //               />
    //               <div className="p-[3px] w-full bg-white">
    //                 <span className="w-full h-full block rounded-[100px] overflow-hidden">
    //                   <button className="w-full h-full bg-[#f8044e] text-white border-none">
    //                     Let's Chat
    //                   </button>
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[30%] border border-rose-500"></div>
    //     </div>
    //     <div>
    //       <div className="w-full flex flex-col">
    //         <div>
    //           <div className="h-[30004px] w-full border border-rose-500">
    //             {!fixed && (
    //               <Home
    //                 scrollViewHeight={scrollViewHeight}
    //                 positionStatic={false}
    //                 fixed={fixed}
    //               />
    //             )}
    //           </div>
    //           <Home scrollViewHeight={scrollViewHeight} fixed={fixed} />
    //         </div>
    //         <div>
    //           <div className="h-[745px] w-full"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default App;

// -- create
// CREATE TABLE EMPLOYEE (
//   empId INTEGER PRIMARY KEY,
//   name TEXT NOT NULL,
//   dept TEXT NOT NULL
// );

// -- insert
// INSERT INTO EMPLOYEE VALUES (0001, 'Clark', 'Sales');
// INSERT INTO EMPLOYEE VALUES (0002, 'Dave', 'Accounting');
// INSERT INTO EMPLOYEE VALUES (0003, 'Ava', 'Sales');

// -- fetch
// SELECT * FROM EMPLOYEE WHERE dept = 'Sales';
