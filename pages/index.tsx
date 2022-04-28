import { TopBar } from "components";
import type { NextPage } from "next";
import * as Shared from "styles/shared/Main.elements";

const Home: NextPage = () => {
	return (
		<Shared.Layout>
			<TopBar />
		</Shared.Layout>
	);
};

export default Home;
