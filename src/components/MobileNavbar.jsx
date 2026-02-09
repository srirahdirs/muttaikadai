"use client";

import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";
import "../styles/mobilemenu.css";
import useKey from "../hooks/useKey";
import ReactDOM from "react-dom";

const MobileNavbar = ({ children, close }) => {
  // This will close the menu when user pres Escape key
  useKey("Escape", close);

  return ReactDOM.createPortal(
    <>
      <RemoveScroll>
        <FocusLock returnFocus={true}>
          <div className="fixed z-50 inset-0 p-4">
            <div onClick={close} className="backdrop" />
            <div className="drawer bg-[#F9F4EE] flex flex-col ">
              <div className="flex-1 overflow-auto">{children}</div>
              <button
                className="bg-gold text-purple  focus:outline-2  focus:outline-slate-800 justify-center flex items-center gap-1 font-medium py-2 px-4 rounded"
                onClick={close}
              >
                Dismiss
              </button>
            </div>
          </div>
        </FocusLock>
      </RemoveScroll>
    </>,
    document.body
  );
};
export default MobileNavbar;
