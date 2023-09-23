export const classesController = {
  clock_main: "h-screen flex w-full justify-center",
  clock_inner_circle: "border border-gray-50 h-full rounded-full",
  clock_upper_circle:
    "absolute top-0 left-0 w-full h-full border border-green-500 rounded-full p-8",
  dark_light_btn:
    "cursor-pointer border-none rounded py-2 px-3 absolute top-[100px] focus:outline-none",
  clock_box_container: "flex items-center justify-center flex-col",
  clock_circle:
    "relative w-[287px] h-[287px] rounded-full border border-rose-500",
  clock_hours:
    "absolute top-2/4 left-2/4 h-[130px] w-[3px] transition-all duration-500 ease-in -translate-x-2/4 -translate-y-2/4 rotate-[0deg]",
  clock_hours_inner: "w-full block h-2/4 rounded-full bg-white",
  clock_minutes:
    "absolute top-2/4 left-2/4 w-[3px] transition-all duration-500 ease-in -translate-x-2/4 -translate-y-full rotate-[0deg] h-[200px]",
  clock_minutes_inner: "w-full block h-2/4 rounded-full bg-white",
  clock_seconds:
    "absolute top-2/4 left-2/4 w-[3px] transition-all duration-500 ease-in -translate-x-2/4 -translate-y-full rotate-[0deg] h-[200px]",
  clock_seconds_inner: " w-full h-2/4 block rounded-full",
  clock_outer_middle_circle:
    "h-2.5 w-2.5 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full",
  clock_inner_middle_circle:
    "bg-white h-[5px] w-[5px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full",
  text_time: "text-[60px]",
  text_day_main: "text-[#aaa] text-sm uppercase flex items-center gap-2",
  day_date: "w-7 h-7 font-bold flex justify-center items-center rounded-sm",
};
