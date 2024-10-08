"use client";
import React, { useState } from "react";
import { IconSend } from "@tabler/icons-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useClipboard } from "use-clipboard-copy";
import { Tooltip as Tippy } from "react-tippy";
import "react-tippy/dist/tippy.css";

const Footer = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const copyText = () => {
    const textToCopy = "thant.zin.windev@gamil.com"; // Replace with your desired text

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => setCopySuccess(true))
      .catch(() => setCopySuccess(false));
  };

  return (
    <div className="py-8 relative text-white before:w-full before:absolute before:h-[2px] before:bg-[url('/images/dash.svg')] after:absolute after:h-[2px] after:w-full after:bg-[url('/images/dash.svg')] overflow-hidden mb-1">
      <div className="flex flex-col sm:flex-row justify-between mb-4 px-8 gap-y-4 sm:gap-y-0">
        <div className="">
          <h5 className="my-4 text-center sm:text-left">Connection</h5>
          <div className="flex gap-6 justify-center sm:justify-start">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={"https://github.com/Micheal-Winn"}
                    target="_blank"
                    aria-label="github"
                    className="group"
                  >
                    <svg
                      className="h-6 2k:h-8 4k:h-11"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#00bfff]  group-active:fill-[#00bfff] "
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.3038 0C5.50795 0 0 5.50795 0 12.3038C0 17.7389 3.52435 22.3513 8.41427 23.9796C9.02982 24.0906 9.25187 23.7119 9.25187 23.3863C9.25187 23.0939 9.242 22.3192 9.2383 21.2941C5.81511 22.0367 5.09223 19.6436 5.09223 19.6436C4.53465 18.2225 3.72665 17.8438 3.72665 17.8438C2.61026 17.0802 3.81177 17.0975 3.81177 17.0975C5.04782 17.1838 5.69545 18.3656 5.69545 18.3656C6.79334 20.2456 8.5771 19.7028 9.27531 19.3882C9.38756 18.5926 9.7083 18.0498 10.0586 17.7426C7.32748 17.433 4.4557 16.377 4.4557 11.6611C4.4557 10.3202 4.93556 9.2198 5.71889 8.36122C5.5943 8.04913 5.16871 6.79704 5.84101 5.10456C5.84101 5.10456 6.87352 4.77273 9.2235 6.36405C10.2271 6.09102 11.2624 5.95166 12.3025 5.94957C13.3427 5.95126 14.378 6.09063 15.3815 6.36405C17.7327 4.7715 18.764 5.10456 18.764 5.10456C19.4363 6.79704 19.0144 8.04913 18.8861 8.36122C19.6756 9.2198 20.1493 10.3189 20.1493 11.6611C20.1493 16.3894 17.2751 17.4281 14.5341 17.7328C14.972 18.1127 15.3667 18.8627 15.3667 20.0099C15.3667 21.6555 15.3519 22.9829 15.3519 23.3863C15.3519 23.7156 15.5715 24.098 16.1994 23.9771C21.0869 22.3463 24.6075 17.7377 24.6075 12.3038C24.6075 5.50795 19.0996 0 12.3038 0Z"
                        fill="white"
                      ></path>
                    </svg>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="transition-all ease-out duration-300">
                  <p className="font-semibold">GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={"https://www.linkedin.com/in/thantzinwin/"}
                    target="_blank"
                    aria-label="github"
                    className="group"
                  >
                    <svg
                      className="h-6 2k:h-8 4k:h-11"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#00bfff]  group-active:fill-[#00bfff]"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.47327e-07 1.67091C2.47327e-07 1.22776 0.176042 0.802756 0.489398 0.4894C0.802754 0.176044 1.22776 2.22756e-06 1.67091 2.22756e-06H18.3273C18.5469 -0.000356456 18.7644 0.0426049 18.9674 0.126426C19.1704 0.210248 19.3548 0.333284 19.5102 0.48849C19.6656 0.643696 19.7888 0.828024 19.8729 1.03092C19.9569 1.23382 20.0001 1.4513 20 1.67091V18.3273C20.0002 18.5469 19.9572 18.7645 19.8732 18.9675C19.7893 19.1705 19.6662 19.3549 19.5109 19.5103C19.3556 19.6656 19.1713 19.7889 18.9683 19.8729C18.7654 19.9569 18.5478 20.0001 18.3282 20H1.67091C1.45141 20 1.23405 19.9568 1.03127 19.8727C0.828487 19.7887 0.644247 19.6655 0.489077 19.5103C0.333906 19.355 0.210847 19.1707 0.12693 18.9679C0.0430121 18.7651 -0.000119178 18.5477 2.47327e-07 18.3282V1.67091ZM7.91636 7.62546H10.6245V8.98546C11.0155 8.20364 12.0155 7.5 13.5182 7.5C16.3991 7.5 17.0818 9.05727 17.0818 11.9145V17.2073H14.1664V12.5655C14.1664 10.9382 13.7755 10.02 12.7827 10.02C11.4055 10.02 10.8327 11.01 10.8327 12.5655V17.2073H7.91636V7.62546ZM2.91636 17.0827H5.83273V7.5H2.91636V17.0818V17.0827ZM6.25 4.37455C6.2555 4.62425 6.21107 4.87254 6.11931 5.10483C6.02755 5.33713 5.89032 5.54876 5.71566 5.7273C5.54101 5.90585 5.33245 6.0477 5.10223 6.14455C4.87201 6.2414 4.62476 6.29129 4.375 6.29129C4.12524 6.29129 3.87799 6.2414 3.64777 6.14455C3.41755 6.0477 3.20899 5.90585 3.03433 5.7273C2.85968 5.54876 2.72245 5.33713 2.63069 5.10483C2.53893 4.87254 2.4945 4.62425 2.5 4.37455C2.51079 3.88441 2.71308 3.41799 3.06353 3.07517C3.41399 2.73235 3.88475 2.54038 4.375 2.54038C4.86525 2.54038 5.33601 2.73235 5.68647 3.07517C6.03692 3.41799 6.23921 3.88441 6.25 4.37455Z"
                        fill="white"
                      ></path>
                    </svg>
                  </Link>
                </TooltipTrigger>

                <TooltipContent className="transition-all ease-out duration-300">
                  <p className="font-semibold">LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={"https://discord.com/channels/@me"}
                    target="_blank"
                    aria-label="discord"
                    className="group"
                  >
                    {" "}
                    <svg
                      className="h-6 2k:h-8 4k:h-11"
                      viewBox="0 0 32 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#00bfff]  group-active:fill-[#00bfff]"
                        d="M19.8379 1.5C19.5694 1.98097 19.33 2.47768 19.1212 2.98744C17.0696 2.66298 14.9797 2.66298 12.9281 2.98744C12.7193 2.47768 12.48 1.98097 12.2114 1.5C10.2788 1.83021 8.40003 2.42159 6.62672 3.25789C3.45568 7.83419 2.01759 13.39 2.57006 18.9301C4.63657 20.4836 6.95593 21.6685 9.42582 22.4324C9.98823 21.6895 10.4902 20.9027 10.9268 20.0795C10.121 19.7824 9.34644 19.4065 8.61449 18.9572C8.81524 18.8236 9.00514 18.6744 9.18242 18.5109C11.3168 19.5391 13.6555 20.073 16.0247 20.073C18.3938 20.073 20.7325 19.5391 22.8669 18.5109C23.0562 18.6732 23.2455 18.822 23.4348 18.9572C22.6989 19.4029 21.9251 19.783 21.1225 20.093C21.5411 20.9349 22.0296 21.74 22.5829 22.5C25.0497 21.7387 27.3651 20.5536 29.4252 18.9977C29.9909 13.4566 28.5516 7.89626 25.3685 3.3255C23.6151 2.47189 21.7549 1.85789 19.8379 1.5ZM11.5353 15.7659C10.8586 15.7174 10.2271 15.4085 9.77323 14.9043C9.3194 14.4 9.07856 13.7395 9.10129 13.0615C9.07514 12.3826 9.31478 11.7202 9.7693 11.2152C10.2238 10.7102 10.8574 10.4023 11.5353 10.3571C12.2132 10.4023 12.8468 10.7102 13.3013 11.2152C13.7558 11.7202 13.9954 12.3826 13.9693 13.0615C13.9954 13.7404 13.7558 14.4028 13.3013 14.9078C12.8468 15.4128 12.2132 15.7207 11.5353 15.7659ZM20.514 15.7659C19.8374 15.7174 19.2058 15.4085 18.752 14.9043C18.2981 14.4 18.0573 13.7395 18.08 13.0615C18.0539 12.3826 18.2935 11.7202 18.7481 11.2152C19.2026 10.7102 19.8361 10.4023 20.514 10.3571C21.1932 10.3989 21.8288 10.7058 22.284 11.2116C22.7392 11.7174 22.9777 12.3817 22.948 13.0615C22.9777 13.7413 22.7392 14.4056 22.284 14.9114C21.8288 15.4172 21.1932 15.7241 20.514 15.7659Z"
                        fill="white"
                      ></path>
                    </svg>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="transition-all ease-out duration-300">
                  <p className="font-semibold">Discord</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <IconSend />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  id="email"
                  className="font-semibold font-rubik"
                  onClick={copyText}
                >
                  thant.zin.windev@gmail.com
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {copySuccess ? "Successfully copied! 😁" : "Press to Copy"}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Footer;
