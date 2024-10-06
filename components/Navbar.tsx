"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "lucide-react";

const Navbar = ({}) => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering dynamic content
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Render nothing until the component is mounted
  }

  return (
    <nav className="w-full relative flex items-center justify-center mt-4">
      <div className="md:w-3/5 w-4/5 flex justify-between items-center font-bold lg:text-3xl text-lg text-center">
        <Link href={"/"}>
          Animesh <span className="text-primary  md:inline">Writes</span>
        </Link>
        <div className="h-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                <DropdownMenuRadioItem value="light">
                  Light
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system">
                  System
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
