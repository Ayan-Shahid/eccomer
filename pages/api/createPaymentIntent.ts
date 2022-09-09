// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import stripe from "stripe";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { data } = req.body;
		const myStripe = new stripe(
			"sk_test_51Imi4uC6A42VxwGcEFsoU0b9nvAvJDOQKUM3RkrenbTlCyEJHqd1Dce94uehjOgb494pwawKLZR7yiOT541ZmGvf00s2TmGkxb",
			{ typescript: true, apiVersion: "2022-08-01" }
		);
		try {
			const paymentIntent = await myStripe.paymentIntents.create({
				amount: data.amount * 100,
				currency: data.currency,
				customer: data.customerId,
				payment_method: data.paymentMethod,
				confirmation_method: "manual", // For 3D Security
				description: "Buy Product",
			});
			res.status(200).json({ paymentIntent });
		} catch (error) {
			res.status(200).json({ error });
		}
	}
}
