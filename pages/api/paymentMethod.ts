// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import stripe from "stripe";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { method } = req.body;
		const myStripe = new stripe(
			"sk_test_51Imi4uC6A42VxwGcEFsoU0b9nvAvJDOQKUM3RkrenbTlCyEJHqd1Dce94uehjOgb494pwawKLZR7yiOT541ZmGvf00s2TmGkxb",
			{ typescript: true, apiVersion: "2022-08-01" }
		);
		try {
			const paymentMehod = await myStripe.paymentMethods.attach(method.id, {
				customer: method.customer,
			});
			res.json({ paymentMehod });
		} catch (error) {
			console.log(error);
		}
	}
}
