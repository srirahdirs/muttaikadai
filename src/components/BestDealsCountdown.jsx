"use client";
import React from "react";
import Countdown from "react-countdown";
import { twMerge } from "tailwind-merge";

const BestDealsCountdown = ({ endTimeInHour, className }) => {
  console.log(endTimeInHour);
  function hoursToMilliseconds(hours) {
    return hours * 60 * 60 * 1000;
  }

  // Random component
  const Completionist = () => (
    <span className="text-lg font-bold text-gold">Sales Offer Ends</span>
  );

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className={twMerge("my-4 flex gap-7 items-center ", className)}>
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
      );
    }
  };

  return (
    <Countdown
      date={Date.now() + hoursToMilliseconds(endTimeInHour)}
      renderer={renderer}
    />
  );
};

export default BestDealsCountdown;
