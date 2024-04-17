import { ReactNode } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

interface HeroProps {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  banner_url: string;
  icon: ReactNode;
}

export const Hero = ({
  heading,
  banner_url,
  buttonTitle,
  buttonUrl,
  icon,
}: HeroProps) => {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>

        <a target="_blank" href={buttonUrl} className={styles.link}>
          {icon}
          {buttonTitle}
        </a>
      </div>

      <div className={styles.contentBanner}>
        <Image
          className={styles.banner}
          src={banner_url}
          alt={heading}
          priority
          quality={100}
          fill={true}
        />
      </div>
    </main>
  );
};
