"use client";

import React from "react";
import Countdown from "react-countdown";
import { twMerge } from "tailwind-merge";

const BestDealsCountdown = ({ endTimeInHour, className }) => {
  function hoursToMilliseconds(hours) {
    return hours * 60 * 60 * 1000;
  }

  const Completionist = () => (
    <span className="text-lg font-bold text-orange">Sales Offer Ends</span>
  );

  const pad = (n) => String(n).padStart(2, "0");

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    }
    return (
      <div className={twMerge("flex gap-1 md:gap-2 items-baseline", className)}>
        <span>{pad(hours)}</span>
        <span className="opacity-60">:</span>
        <span>{pad(minutes)}</span>
        <span className="opacity-60">:</span>
        <span>{pad(seconds)}</span>
      </div>
    );
  };

  return (
    <Countdown
      date={Date.now() + hoursToMilliseconds(endTimeInHour)}
      renderer={renderer}
    />
  );
};

export default BestDealsCountdown;
