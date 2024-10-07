import { simpleBlogCard } from "@/app/types/interface";
import SearchComponent from "@/components/SearchComponent";
import { client } from "@/lib/sanity";
import { Metadata } from "next";
import { FC } from "react";

interface pageProps {
  searchParams: { [key: string]: string | undefined };
}

export const metadata: Metadata = {
  title: "Search",
};

// Async function to fetch search results
const getSearchResults = async (search: string | undefined) => {
  const query = `*[[title,content,smallDescription,slug.current] match "${
    search || ""
  }*" && _type=="blog"]{
    title,  smallDescription, "currentSlug": slug.current,titleImage
  }`;
  const data = await client.fetch(query);
  return data as simpleBlogCard[];
};

// Make the page component async
const page: FC<pageProps> = async ({ searchParams }) => {
  if (!searchParams) return null;

  const search = searchParams.search;

  // Fetch the search results
  const data = await getSearchResults(search);

  return <SearchComponent results={data} />;
};

export default page;
