import React from "react";
import service1 from "../assets/services/service1.webp";

const Home = ({ scrollViewHeight, positionStatic = true, fixed }) => {
  let rotate = 0;
  let serviceImage = service1;
  if (scrollViewHeight > 700 && scrollViewHeight < 900) {
    rotate = (scrollViewHeight - 700) / 20;
  }
  if (scrollViewHeight > 900) {
    rotate = 10;
  }
  let translate = "";
  let scale = 1;
  if (scrollViewHeight > 900 && scrollViewHeight < 3000) {
    translate = ` translate(${
      ((scrollViewHeight - 900) / 20 - ((scrollViewHeight - 900) / 20) * 2) *
      2.2
    }%, ${
      ((scrollViewHeight - 900) / 20 - ((scrollViewHeight - 900) / 20) * 2) *
      2.2
    }%)`;
    scale = (scrollViewHeight - 900) / 1000 / 2 + scale;
    console.log(scrollViewHeight, "height=====>");
  }
  if (scrollViewHeight > 2998) {
    translate = "translate(-200.16%, -200.16%)";
  }
  scale = `scale(${scale})`;
  let page_content_left_width = 40;

  if (scrollViewHeight > 3700 && scrollViewHeight < 4100) {
    page_content_left_width =
      page_content_left_width > 0 && 40 - (scrollViewHeight - 3700) / 10;
  }
  if (scrollViewHeight > 4098) {
    page_content_left_width = 0;
  }
  let servicesImagePosition = 200;
  if (scrollViewHeight > 4200 && scrollViewHeight < 6000) {
    servicesImagePosition =
      servicesImagePosition -
      (scrollViewHeight - 4200) / 9 -
      (servicesImagePosition - (scrollViewHeight - 4200) / 9) * 2;
  }
  if (scrollViewHeight > 6000) {
    servicesImagePosition = 0;
  }

  let serviceImageHeight = 0;
  if (scrollViewHeight > 6500 && scrollViewHeight < 7640) {
    serviceImageHeight = (scrollViewHeight - 6500) / 11;
  }
  if(scrollViewHeight > 7638){
    serviceImageHeight = 95;
  }

  return (
    <div
    className="h-screen w-full top-0 bg-black text-white"
      style={{
        position: fixed && positionStatic ? "fixed" : "static",
      }}
    >
      <div className="border border-orange-400 py-[150px] px-[50px] relative">
        <div className="mb-5">
          <div className="overflow-hidden">
            <div className="page_title font-bold tracking-[0.15rem] word-[2px] text-3xl mb-[7px]">
              <span>About Me</span>
            </div>
            <div>
              <p className="page_inner_sub_title flex gap-[7px]">
                <span>Web Developer</span>
                <span className="text-[#f8044e]">& Web Designer</span>
              </p>
            </div>
          </div>
          <div className="hidden">
            <div className="page_title">
              <span>Services</span>
            </div>
            <div>
              <p className="page_inner_sub_title">
                <span>Web Developer</span>
                <span>& Web Designer</span>
              </p>
            </div>
          </div>
        </div>
        <div className="page_content flex gap-[50px] h-[420px] border border-rose-500">
          {page_content_left_width !== 0 && (
            <div
              className="page_content_right"
              style={{ width: `${page_content_left_width}%` }}
            >
              {console.log(translate.length > 0 && translate, rotate, "rotate")}
              <div
                className="inner_left_content absolute border-2 border-[#ccc] h-full w-full rounded-[4px] p-5 bg-black"
                style={{
                  transform: `rotate(${rotate}deg) ${translate} ${scale}`,
                }}
              >
                <div className="bg_fe_be w-full h-[380px] "></div>
              </div>
            </div>
          )}
          <div className="page_content_left relative w-[60%]">
            <div className="inner_right_content border-2 border-[#ccc] h-full w-full rounded-[4px] p-5 bg-black">
              <p className="mb-[30px] leading-[25px]">
                I am a front-end web developer. I can provide clean code and
                pixel perfect design. I also make the website more & more
                interactive with web animations. A responsive designs makes your
                website accessible to all users, regardless of their device.
              </p>
              <p className="mb-[30px] leading-[25px]">
                As a front-end and back-end developer, I excel at creating
                seamless web experiences. I craft visually stunning user
                interfaces using HTML, CSS, and JavaScript while also building
                robust server-side logic with technologies like Node.js. My
                skills range from responsive design to database management, API
                integration, and security implementation.
              </p>
            </div>
          </div>
          {page_content_left_width === 0 && (
            <div style={{ width: "40%", height: "100%" }}>
              <div
                className="border-2 border-[#ccc] h-full w-full rounded-[4px] flex items-center justify-center bg-black"
                style={{ transform: `translateY(${servicesImagePosition}%)` }}
              >
                <img
                  src={serviceImage}
                  style={{ height: `${serviceImageHeight}%` }}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
