import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  Icon,
  description,
  href,
  cta,
  img,
}: {
  name: string;
  className: string;
  Icon: React.ComponentType<{ className: string }>;
  description: string;
  href: string;
  cta: string;
  img?: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl",
      // dark styles
      "bg-black/[.05] [border:1px_solid_rgba(255,255,255,.1)]",
      "[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]",
      className,
    )}
  >
    {img && <Image src={img} alt={name} fill className="object-cover object-center opacity-60 transition-opacity duration-300 group-hover:opacity-100" />}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <div className="flex items-center justify-between">
        <Icon className="h-12 w-12 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75" />
        {cta === "Coming Soon" && (
          <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
            {cta}
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-white">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-200">{description}</p>
    </div>

    {cta !== "Coming Soon" && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >

      </div>
    )}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.2]" />
  </div>
);

export { BentoCard, BentoGrid };