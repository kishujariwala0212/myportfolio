import React, { useEffect, useState } from "react";
import { days, months } from "../../../constants/theme-clock.constant";
import classNames from "classnames";
import { cs } from "../../../style-constant/theme-constant-controller";
import {
  BG_BLACK,
  BG_DARK_ROSE,
  BG_GRAY,
  BG_RED,
  BG_ROSE,
  BG_WHITE,
  TEXT_GRAY,
  TEXT_LIGHT_GRAY,
  TEXT_WHITE,
} from "../../../constants/theme-clock.color.constant";

const ThemeClock = () => {
  const [time, setTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  const hourRotation = `translate(-50%, -50%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  const minuteRotation = `translate(-50%, -50%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  const secondRotation = `translate(-50%, -50%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  return (
    <div
      className={classNames(cs("clock_main"), isDarkMode ? BG_GRAY : BG_WHITE)}
    >
      <button
        onClick={toggleDarkMode}
        className={classNames(
          cs("dark_light_btn"),
          isDarkMode ? `${TEXT_GRAY} ${BG_WHITE}` : `${TEXT_WHITE} ${BG_BLACK}`
        )}
      >
        {isDarkMode ? "Light mode" : "Dark mode"}
      </button>

      <div className={cs("clock_box_container")}>
        <div
          className={classNames(
            cs("clock_circle"),
            isDarkMode ? BG_BLACK : BG_GRAY
          )}
        >
          <div
            className={cs("clock_hours")}
            style={{ transform: `${hourRotation}` }}
          >
            <span className={cs("clock_hours_inner")}></span>
          </div>
          <div
            className={cs("clock_minutes")}
            style={{ transform: minuteRotation }}
          >
            <span className={cs("clock_minutes_inner")}></span>
          </div>
          <div
            className={cs("clock_seconds")}
            style={{ transform: secondRotation }}
          >
            <span
              className={classNames(
                cs("clock_seconds_inner"),
                isDarkMode ? BG_ROSE : BG_RED
              )}
            ></span>
          </div>
          <div
            className={classNames(
              cs("clock_outer_middle_circle"),
              isDarkMode ? BG_ROSE : BG_RED
            )}
          >
            <div className={cs("clock_inner_middle_circle")}></div>
          </div>
          <div className={cs("clock_upper_circle")}>
            <div className={cs("clock_inner_circle")}></div>
          </div>
        </div>

        <div
          className={classNames(
            cs("text_time"),
            isDarkMode ? TEXT_WHITE : TEXT_GRAY
          )}
        >
          {hoursForClock}:{minutes < 10 ? `0${minutes}` : minutes} {ampm}
        </div>
        <div className={cs("text_day_main")}>
          {days[day]}, {months[month]}
          <span
            className={classNames(
              cs("day_date"),
              day === 6 || day === 7
                ? `${BG_DARK_ROSE} ${TEXT_LIGHT_GRAY}`
                : isDarkMode
                ? `${BG_WHITE} ${TEXT_GRAY}`
                : `${BG_GRAY} ${TEXT_WHITE}`
            )}
          >
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThemeClock;
