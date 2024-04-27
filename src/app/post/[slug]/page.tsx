import { Suspense } from "react";
import { Metadata } from "next";
import { Content } from "./components/content";
import { LoadingPost } from "./components/loading";
import { getItemBySlug } from "@/utils/actions/getData";
import { PostProps } from "@/utils/post.type";

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  try {
    const { objects }: PostProps = await getItemBySlug(slug).catch(() => {
      return {
        title: "DevMotors - Sua oficina especializada!",
        description: "Oficina de carros em São Paulo",
      };
    });

    return {
      title: `DevMotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      keywords: ["devmotors", "troca de oleo", "devmotors troca de oleo"],
      openGraph: {
        title: `DevMotors - ${objects[0].title}`,
        images: [`${objects[0].metadata.banner.url}`],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (err) {
    return {
      title: "DevMotors - Sua oficina especializada!",
      description: "Oficina de carros em São Paulo",
    };
  }
};

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  return (
    <Suspense fallback={<LoadingPost />}>
      <Content slug={slug} />
    </Suspense>
  );
};

export default Page;
