import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import newUser from "./newUser";

const createStripeUser = async (
	name: string,
	email: string,
	uid: string,
	setButtonState?: Dispatch<
		SetStateAction<"default" | "authenticating" | "successfull" | "error">
	> | null
) => {
	await axios
		.post("http://localhost:3000/api/hello", { name, email })
		.then((item) => newUser(name, uid, item.data.customer.id, setButtonState))
		.catch((error) => alert(error));
};

export default createStripeUser;
