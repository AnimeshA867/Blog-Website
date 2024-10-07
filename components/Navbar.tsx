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
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";

const Navbar = ({}) => {
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input) {
      router.push(`/blog/search?search=${input}`);
    }
  };

  // Ensure component is mounted before rendering dynamic content
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Render nothing until the component is mounted
  }

  return (
    <nav className="w-full relative flex items-center justify-center mt-4">
      <div className="md:w-3/5 w-4/5 flex justify-between items-center font-bold lg:text-3xl text-lg text-center ">
        <Link href={"/"} className="flex-shrink">
          Animesh <span className="text-primary  md:inline">Writes</span>
        </Link>
        <div className="h-full flex gap-4  items-center w-fit">
          <Popover>
            <PopoverTrigger>
              {" "}
              <Button variant={"outline"} size={"icon"}>
                <MagnifyingGlassIcon className="h-6 w-6 aspect-square" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex w-full  items-center space-x-2">
                <Input
                  type="search"
                  placeholder="Search"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
                <Button type="submit" onClick={handleSearch}>
                  Search
                </Button>
              </div>
            </PopoverContent>
          </Popover>

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
