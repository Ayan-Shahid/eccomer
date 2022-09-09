import { auth, firestore } from "Database/config";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const useUser = () => {
	const [user, setUser] = useState<{ customerId: string } | null>(null);
	const getUser = () => {
		onSnapshot(doc(firestore, `Users/${auth.currentUser?.uid}`), (item) =>
			setUser({ customerId: item.get("customerId") })
		);
	};
	useEffect(() => {
		let isMounted = true;
		if (isMounted) getUser();

		return () => {
			isMounted = false;
		};
	}, []);
	return user;
};

export default useUser;
