import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const NavigationMenu = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-4">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={32} height={32} className="flex-shrink-0" />
        <span className="text-lg font-semibold">betterpipes</span>
      </div>
      <div className="flex items-center gap-4">
        <Button size="sm">
          Contact Us
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};