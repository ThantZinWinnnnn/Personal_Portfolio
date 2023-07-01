import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const SkillIcon = ({ icon, title, tooltip }: IconProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="overflow-hidden">
            <div className="relative w-[40px] h-[40px]">
            <Image fill src={icon} alt={title} />
            </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="transition-all duration-500 ease-out"><b>{title}:</b> {tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SkillIcon;
type IconProps = {
  icon: string;
  title: string;
  tooltip: string;
};
