import { Phone } from "lucide-react";

import { Hero } from "@/components/Hero";
import { SubMenu } from "@/components/home/SubMenu";
import { getDataHome } from "@/utils/actions/getData";
import { HomeProps } from "@/utils/home.type";

const Home = async () => {
  const { object }: HomeProps = await getDataHome();

  return (
    <main>
      <SubMenu />
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        banner_url={object.metadata.banner.url}
        buttonUrl={object.metadata.cta_button.url}
        icon={<Phone size={24} color="#FFF" />}
      />
    </main>
  );
};

export default Home;
