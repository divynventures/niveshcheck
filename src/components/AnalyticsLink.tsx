"use client";

import { AnchorHTMLAttributes } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";

type AnalyticsLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventParameters?: Record<string, string | number | boolean>;
};

export default function AnalyticsLink({
  eventName,
  eventParameters,
  onClick,
  ...props
}: AnalyticsLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          trackAnalyticsEvent(eventName, eventParameters);
        }
      }}
    />
  );
}
