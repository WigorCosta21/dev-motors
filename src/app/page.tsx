import { Phone } from "lucide-react";

import { Hero } from "@/components/Hero";
import { Service } from "@/components/home/Services";
import { SubMenu } from "@/components/home/SubMenu";
import { getDataHome, getSubMenu } from "@/utils/actions/getData";
import { HomeProps } from "@/utils/home.type";
import { MenuProps } from "@/utils/menu.type";
import { Container } from "@/components/Container";
import { Footer } from "@/components/home/Footer";

const Home = async () => {
  const { object }: HomeProps = await getDataHome();

  const menu: MenuProps = await getSubMenu();

  return (
    <main>
      {menu.objects.length > 0 && <SubMenu menu={menu} />}
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        bannerUrl={object.metadata.banner.url}
        buttonUrl={object.metadata.cta_button.url}
        icon={<Phone size={24} color="#FFF" />}
      />
      <Container>
        <Service object={object} />
        <Footer object={object} />
      </Container>
    </main>
  );
};

export default Home;
