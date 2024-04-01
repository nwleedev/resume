import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { toArticle } from "~/lib/md.server";
import style from "~/styles/resume.css?url";

export const meta: MetaFunction<typeof loader> = () => {
  return [
    { title: `이노원 이력서` },
    {
      name: "description",
      content: `프론트엔드 개발자 이노원입니다.`,
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://nwlee.com",
    },
    { property: "og:title", content: `이노원 이력서` },
    { property: "og:url", content: `https://nwlee.com/resume` },
    { property: "og:description", content: `프론트엔드 개발자 이노원입니다.` },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: `이노원 이력서` },
    {
      name: "twitter:description",
      content: `프론트엔드 개발자 이노원입니다.`,
    },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://useidioms.com",
        name: `이노원 이력서`,
        description: `프론트엔드 개발자 이노원입니다.`,
      },
    },
  ];
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
};

export async function loader() {
  const article = await toArticle("./app/data/resume.mdx");

  const { frontmatter, code } = article;
  return json({ frontmatter, code });
}

export default function Index() {
  const { frontmatter, code } = useLoaderData<typeof loader>();
  const updatedAt = useMemo(() => {
    return format(frontmatter.createdAt, "yyyy년 MM월 dd일, hh시 mm분", {
      locale: ko,
    });
  }, [frontmatter.createdAt]);
  const Component = useMemo(() => {
    return getMDXComponent(code);
  }, [code]);
  return (
    <div className="w-full mx-auto py-10 flex flex-col gap-y-2 bg-white px-4 sm:px-6 max-w-[1080px] mt-10 rounded shadow shadow-white">
      <section className="flex justify-between">
        <h1 className="text-2xl sm:text-4xl font-bold">이노원</h1>
        <span className="text-sm">{updatedAt}에 업데이트</span>
      </section>
      <p className="text-gray-600 text-sm sm:text-base">
        프론트엔드 개발자 이노원입니다.
      </p>
      <article className="prose prose-base prose-slate max-w-full pb-10">
        <Component />
      </article>
    </div>
  );
}
