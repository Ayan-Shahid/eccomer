import { NavBar, Products, TopBar } from "components";
import type { NextPage } from "next";
import * as Shared from "styles/shared/Main.elements";

const Home: NextPage = () => {
	return (
		<Shared.Layout>
			<NavBar />
			<TopBar />
			<Products />
		</Shared.Layout>
	);
};

export default Home;
