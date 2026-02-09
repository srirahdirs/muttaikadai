"use client";
import React from "react";
import Countdown from "react-countdown";

const SalesCountdown = ({ endTimeInHour }) => {
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
        <div className="flex items-center  w-fit mx-auto font-medium">
          <span className="w-14 h-1 bg-gold rounded-sm block"></span>
          <div className="text-lg min-w-52 flex justify-center text-purple">
            Ends in: {hours}h {minutes}m {seconds}s
          </div>
          <span className="w-14 h-1 bg-gold rounded-sm block"></span>
        </div>
      );
    }
  };

  return (
    <div>
      <Countdown
        date={Date.now() + hoursToMilliseconds(endTimeInHour)}
        renderer={renderer}
      />
    </div>
  );
};

export default SalesCountdown;
