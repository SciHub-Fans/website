import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import Link from "next/link";

const TIMELINE_ITEMS = [
  {
    status: "completed",
    time: "November 16th, 2024",
    supply: "100M $scihub ($6.72M, 10% of the total supply)",
    href: "https://solscan.io/tx/3xRdf7voPP3VKiuxhd88QUe6TGwCrc1wc2nApDoBDtwrvAWjdumR2G4USoEdF15cHqPEWWtysSixdBi7SQ3B8WCz"
  },
  {
    status: "completed",
    time: "November 16th, 2024",
    supply: "10M $scihub (1% of the total supply)",
    href: "https://solscan.io/tx/bU78q5M3qBLeCYHjdpEdQK1GqiuEreNT2PS6bGLphfscYffe2GRmD2deYz7upB71HCxa9RkK6eYDLKhLLKDh6pv"
  },
  {
    status: "completed",
    time: "December 16th, 2024",
    supply: "10M $scihub (1% of the total supply)",
    href: "https://solscan.io/tx/5Vk1afKAKCvP35AdJJKHEsZdXRoeUK1QcNgKavQ1BA1NxfvirQNGFkyhKBgyDYbN4dYhLXEdE3v4khG5ZafqY6x2"
  },
  {
    status: "completed",
    time: "January 16th, 2025",
    supply: "10M $scihub (1% of the total supply)",
    href: "https://solscan.io/tx/uYceHVxcR3ChoLkaafvGCW71ukEmoB87MJhrzEDBeonwgNocKRFFmi2YJn3V1oARbgnCBxFKTFLgzveshzBa1Gw"
  },
  {
    status: "completed",
    time: "February 16, 2025",
    supply: "10M $scihub (1% of the total supply)",
    href: "https://solscan.io/tx/2nZX9MV37teiBd1LypZtwd3iCNpbVNZpheUXRC84JmMTujiPXvByAx4mxADiK1iCUk4sndP4YqXk5uExAB2Fp9zj"
  },
  {
    status: "pending",
    time: "March 16, 2025",
    supply: "10M $scihub (1% of the total supply)",
  },
  {
    status: "pending",
    time: "April 16, 2025",
    supply: "10M $scihub (1% of the total supply)",
  },
  {
    status: "pending",
    time: "May 16, 2025",
    supply: "10M $scihub (1% of the total supply)",
  },
  {
    status: "pending",
    time: "June 16, 2025",
    supply: "10M $scihub (1% of the total supply)",
  },
  {
    status: "pending",
    time: "July 16, 2025",
    supply: "10M $scihub (1% of the total supply)",
  },
  {
    status: "pending",
    time: "August 16, 2025",
    supply: "10M $scihub (1% of the total supply)",
  },
];

const TimelineItem = ({
  status,
  time,
  supply,
  href,
}: {
  status: string;
  time: string;
  supply: string;
  href?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col md:flex-row md:justify-between gap-4 px-5 py-4 rounded-[8px]",
        status === "completed" && "[background:rgba(9,195,39,0.08)]",
        status === "upcoming" &&
          "[background:rgba(227,45,45,0.08)] [border:1px_solid_rgba(227,45,45,0.16)]",
        status === "pending" &&
          "[background:rgba(227,45,45,0.04)] [border:1px_solid_rgba(227,45,45,0.08)]"
      )}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {status === "completed" && <Icons.check className="text-[#09C327]" />}
        {status === "upcoming" && <Icons.circle className="text-[#E32D2D4D]" />}
        {status === "pending" && <Icons.circle className="text-[#E32D2D4D]" />}

        <span className={cn(status === "pending" && "opacity-50")}>{time}</span>
        <Icons.rightArrow
          className={cn(
            status === "upcoming" && "text-[#FFFFFF]",
            status === "completed" && "text-[#09C327]",
            status === "pending" && "text-white opacity-50"
          )}
        />

        <span className={cn(status === "pending" && "opacity-50")}>
          {supply}
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {status === "completed" && (
          <>
            <Link
              href={href!}
              target="_blank"
              className="text-[rgba(9,195,39,0.60)] text-base font-medium leading-[140%] underline decoration-solid [text-decoration-skip-ink:none] decoration-auto underline-offset-auto [text-underline-position:from-font]"
            >
              VIEW
            </Link>
            <span className="text-[#09C327] [font-family:'SF_Mono'] text-base font-medium leading-[140%]">
              COMPLETED
            </span>
          </>
        )}

        {status === "upcoming" && (
          <span className="text-[#E72D2D] [font-family:'SF_Mono'] text-base font-medium leading-[140%]">
            UPCOMING
          </span>
        )}
      </div>
    </div>
  );
};

export const Timeline = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const items = TIMELINE_ITEMS;

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsExpanded(true);
    }, 500); // 500ms 的延迟
    setTimeoutId(timeout);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsExpanded(false);
  };

  const getVisibleItems = () => {
    if (items.length <= 6 || isExpanded) return items;

    // 显示前2个和后2个
    return [
      ...items.slice(0, 4),
      { isEllipsis: true, id: "ellipsis" } as any,
      ...items.slice(-2),
    ];
  };

  const visibleItems = getVisibleItems();

  return (
    <div
      className="w-full flex flex-col gap-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence initial={false} mode="sync">
        {visibleItems.map((item, index) => {
          if (item.isEllipsis) {
            return (
              <div
                key="ellipsis"
                className="text-white/50 text-center text-lg py-2 cursor-pointer"
              >
                •••
              </div>
            );
          }

          return (
            <motion.div
              key={`${item.time}-${item.status}-${index}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.2,
                delay: index * 0.05,
              }}
              className="overflow-hidden"
            >
              <TimelineItem {...item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
