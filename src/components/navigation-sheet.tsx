'use client';

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>Navigation Menu</VisuallyHidden>

      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="px-6 py-4 flex flex-col gap-6 max-w-xs">
        <Logo />
        <NavMenu orientation="vertical" />
      </SheetContent>
    </Sheet>
  );
};

export default NavigationSheet;