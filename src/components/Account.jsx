"use client";

import { GoPerson } from "react-icons/go";

const Account = ({ onClose }) => {
  return (
    <button
      onSelect={() => {
        onClose?.();
      }}
      className="flex uppercase gap-2 items-center"
    >
      <GoPerson />
      <span>Account</span>
    </button>
  );
};
export default Account;
