import { SubMenu } from "@/components/home/SubMenu";
import { getDataHome } from "@/utils/actions/getData";
import { HomeProps } from "@/utils/home.type";

const Home = async () => {
  const { object }: HomeProps = await getDataHome();

  return (
    <main>
      <SubMenu />
    </main>
  );
};

export default Home;
