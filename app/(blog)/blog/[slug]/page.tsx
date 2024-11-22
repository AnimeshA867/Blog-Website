import { blogContent } from "@/app/types/interface";
import { client } from "@/lib/sanity";
import Image from "next/image";
import { FC } from "react";
import { urlFor } from "../../../../lib/sanity";
import { PortableText } from "next-sanity";
import React from "react";

import { Metadata } from "next/types";
interface pageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

async function getUserData(slug: string) {
  const query = `*[_type=="blog" && slug.current == $slug]{
    "currentSlug": slug.current,
    title,
    smallDescription,
    titleImage,
    content
  }`;

  const data = await client.fetch(query, { slug });
  return data[0] as blogContent;
}

export async function generateMetadata({
  params,
}: pageProps): Promise<Metadata> {
  const data = await getUserData(params.slug);

  return {
    title: `${data.title} - Animesh Blog`,
    description: data.smallDescription,
    openGraph: {
      title: data.title,
      description: data.smallDescription,
      images: urlFor(data.titleImage)?.url() || "",
      url: `https://animeshblog.vercel.app/${data.currentSlug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.smallDescription,
      images: urlFor(data.titleImage)?.url() || "",
    },
  };
}

const Page: FC<pageProps> = async ({ params }) => {
  const data = await getUserData(params.slug);

  return (
    <>
      <section className="mt-8 space-y-8">
        <h1 className="scroll-m-20 md:text-4xl text-2xl font-extrabold tracking-tight lg:text-5xl space-y-2">
          <span className="block tracking-normal text-center text-primary md:text-xl text-lg font-bold uppercase">
            Animesh - Blog
          </span>
          <span className="block tracking-normal text-center ">
            {data.title}
          </span>
        </h1>
        <div className="w-full aspect-square relative">
          <Image
            className="rounded-lg object-cover object-center"
            fill
            referrerPolicy="no-referrer"
            src={urlFor(data.titleImage)?.url() || ""}
            alt={data.title}
            priority
          />
        </div>
        <div className="mt-8 prose prose-blue md:prose-xl dark:prose-invert prose-li:marker:text-primary prose-lg prose-headings:text-3xl md:prose-heading:text-4xl max-w-full">
          {data.content && <PortableText value={data.content} />}
        </div>
      </section>
    </>
  );
};

export default Page;
