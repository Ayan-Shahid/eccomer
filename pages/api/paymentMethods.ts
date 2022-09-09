// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import stripe from "stripe";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		const data = req.query;
		const myStripe = new stripe(
			"sk_test_51Imi4uC6A42VxwGcEFsoU0b9nvAvJDOQKUM3RkrenbTlCyEJHqd1Dce94uehjOgb494pwawKLZR7yiOT541ZmGvf00s2TmGkxb",
			{ typescript: true, apiVersion: "2022-08-01" }
		);
		try {
			if (data.customerId) {
				const paymentMethods = await myStripe.customers.listPaymentMethods(
					data.customerId as string,
					{
						type: "card",
					}
				);
				return res.status(200).json({ paymentMethods });
			}
		} catch (error) {
			console.log(error);

			return res.status(403).json({ error });
		}
	}
}
