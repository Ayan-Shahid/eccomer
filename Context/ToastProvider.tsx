/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import { Toast } from "Components/Shared";
import React, {
	createContext,
	FunctionComponent,
	ReactNode,
	useMemo,
	useState,
} from "react";
import { createPortal } from "react-dom";
import { v1 as uuidv1 } from "uuid";

export const ToastContext = createContext<{
	open: (content: {
		type: "success" | "warning" | "error";
		title: string;
		text: string;
	}) => void;
}>({
	open: () => null,
});

const ToastProvider: FunctionComponent<{ children: ReactNode }> = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [toasts, setToasts] = useState<
		{
			id: string;
			content: {
				type: "success" | "warning" | "error";
				title: string;
				text: string;
			};
		}[]
	>([]);
	const open = (content: {
		type: "success" | "warning" | "error";
		title: string;
		text: string;
	}) =>
		setToasts((currentToasts) => [...currentToasts, { id: uuidv1(), content }]);

	const contextValue = useMemo(() => ({ open }), []);

	return (
		<ToastContext.Provider value={contextValue}>
			{children}

			{typeof window !== "undefined"
				? createPortal(
						<Toast setToasts={setToasts} toasts={toasts} />,
						document.body
				  )
				: null}
		</ToastContext.Provider>
	);
};

export default ToastProvider;
