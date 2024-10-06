import { blogContent } from "@/app/types/interface";
import { client } from "@/lib/sanity";
import Image from "next/image";
import { FC } from "react";
import { urlFor } from "../../../lib/sanity";
import { PortableText } from "next-sanity";

interface pageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

async function getUserData(slug: string) {
  const query = `*[_type=="blog" && slug.current =="${slug}"]{
  "currentSlug":slug.current,
    title,
    smallDescription,
    titleImage,
    content
}`;

  const data = await client.fetch(query);
  return data[0] as blogContent;
}

const page: FC<pageProps> = async ({ params }) => {
  const data = await getUserData(params.slug);
  console.log(data);
  return (
    <div className="mt-8 space-y-8">
      <h1 className="scroll-m-20 md:text-4xl text-2xl font-extrabold tracking-tight lg:text-5xl space-y-2 ">
        <span className="block tracking-normal  text-center text-primary md:text-xl text-lg font-bold uppercase">
          Animesh - Blog
        </span>
        <span className="block tracking-normal text-center ">{data.title}</span>
      </h1>
      <div className="w-full aspect-video relative">
        <Image
          className="rounded-lg object-cover"
          fill
          referrerPolicy="no-referrer"
          src={urlFor(data.titleImage)?.url() || ""}
          alt={data.title}
        />
      </div>
      <div className="mt-8 prose prose-blue md:prose-xl dark:prose-invert prose-li:marker:text-primary prose-lg prose-headings:text-3xl md:prose-heading:text-4xl">
        {data.content && <PortableText value={data.content} />}
      </div>
    </div>
  );
};

export default page;
