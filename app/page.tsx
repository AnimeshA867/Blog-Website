import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { simpleBlogCard } from "./types/interface";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Fetch user data from Sanity
export const revalidate = 30;
async function getUserData() {
  const query = `*[_type=="blog"] | order(_createdAt desc){
  title, titleImage, smallDescription, "currentSlug": slug.current,
}`;

  const data: simpleBlogCard[] = await client.fetch(query);
  return data;
}
// Home component
export default async function Home() {
  const data = await getUserData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-4 gap-4 lg:grid-cols-3">
      {data.map((item, idx) => (
        <Card key={idx}>
          <div className="relative w-full aspect-square ">
            <Image
              src={urlFor(item.titleImage)?.url() || ""}
              alt={item.title}
              fill
              className="object-cover relative rounded-t-md"
              referrerPolicy="no-referrer"
            />
          </div>

          <CardContent className="flex flex-col gap-4 mt-3 ">
            <h1 className="line-clamp-2 font-bold text-2xl ">{item.title}</h1>
            <p className="line-clamp-3 font-regular text-gray-700 dark:text-gray-300">
              {item.smallDescription}
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full ">
              <Link href={`/blog/${item.currentSlug}`}>Read More</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
