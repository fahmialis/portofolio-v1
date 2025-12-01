"use client";

import React, { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Portal } from "@radix-ui/react-portal";

interface CursorTooltipProps {
  children: React.ReactNode;
  tooltip: React.ReactNode;
}

export function CursorTooltip({ children, tooltip }: CursorTooltipProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <div
        onMouseMove={(e) => {
          setPos({ x: e.clientX + 12, y: e.clientY + 12 }); // slight offset
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative inline-block w-full"
      >
        {children}

        {open && (
          <Portal>
            <Tooltip open>
              <TooltipContent
                side="top"
                className="pointer-events-none fixed p-2"
                style={{ top: pos.y, left: pos.x }}
              >
                {tooltip}
              </TooltipContent>
            </Tooltip>
          </Portal>
        )}
      </div>
    </TooltipProvider>
  );
}