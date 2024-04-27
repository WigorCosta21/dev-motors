import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { PostProps } from "@/utils/post.type";
import { getItemBySlug } from "@/utils/actions/getData";

import styles from "./content.module.scss";

export const Content = async ({ slug }: { slug: string }) => {
  const { objects }: PostProps = await getItemBySlug(slug);
  return (
    <>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
              {objects[0].metadata.description.title}
            </h1>
            <p>{objects[0].metadata.description.text}</p>

            {objects[0].metadata.description.button_active && (
              <a
                href={objects[0].metadata.button.url as string}
                target="_blank"
                className={styles.link}
              >
                {objects[0].metadata.button.title}
              </a>
            )}
          </article>
          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={objects[0].title}
              quality={100}
              fill={true}
              priority={true}
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
              src={objects[0].metadata.description.banner.url}
            />
          </div>
        </section>
      </Container>
    </>
  );
};
