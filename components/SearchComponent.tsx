"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { FC, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { simpleBlogCard } from "@/app/types/interface";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";

interface SearchComponentProps {
  results: simpleBlogCard[];
}

const SearchComponent: FC<SearchComponentProps> = ({ results }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = searchParams.get("search");
  const [input, setInput] = useState(search || "");

  const handleSearch = () => {
    if (input) {
      router.push(`/blog/search?search=${input}`);
    }
  };

  return (
    <section className="w-full h-full min-h-screen flex items-center space-y-8 flex-col">
      <div className="w-full flex h-10 space-x-2">
        <Input
          className="w-4/5 md:w-[90%] h-full md:text-lg text-md"
          value={input}
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Button
          type="submit"
          className="h-full rounded-lg flex-1"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      <div className="w-full">
        {results.length == 0 && (
          <div className="w-full space-y-4 text-center">
            <h1 className="text-5xl font-bold">No search results found</h1>
            <p className="text-lg opacity-0.8">Try a different keyword</p>
          </div>
        )}
        {results?.map((item, idx) => (
          <Card key={idx}>
            <div className="flex md:flex-row flex-col w-full h-full ">
              <div className="md:w-1/5 w-full bg-blue-400 h-auto aspect-square relative">
                <Image
                  className="rounded-lg object-cover object-center"
                  fill
                  referrerPolicy="no-referrer"
                  src={urlFor(item.titleImage)?.url() || ""}
                  alt={item.title}
                />
              </div>
              <div className="md:w-4/5 w-full">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="prose max-w-full dark:prose-invert line-clamp-3 ">
                    {item.smallDescription}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${item.currentSlug}`}>
                    <Button>Read More...</Button>
                  </Link>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SearchComponent;
