import { PaymentMethod } from "@stripe/stripe-js";
import { useUser } from "Hooks";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
/* eslint-disable no-mixed-spaces-and-tabs */
import axios from "axios";
import { useState } from "react";

const usePaymentMethods = () => {
	const user = useUser();
	const [methods, setMethods] = useState<PaymentMethod[] | null>(null);
	const fetchPaymentMethod = async () => {
		if (user?.customerId)
			await axios
				.get(
					`http://localhost:3000/api/paymentMethods?customerId=${user?.customerId}`
				)
				.then(({ data }) => {
					setMethods(data);
					if (data.paymentMethods.data) {
						const list = data.paymentMethods.data;
						setMethods(list);
					}
				})
				.catch((error) => alert(error));
	};
	const getPaymentMethod = () => {
		fetchPaymentMethod();
	};
	useEffect(() => {
		let isMounted = true;
		if (isMounted) getPaymentMethod();

		return () => {
			isMounted = false;
		};
	}, [user?.customerId]);

	return { methods };
};

export default usePaymentMethods;
