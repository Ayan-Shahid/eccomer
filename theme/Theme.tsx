import { ReactNode, FunctionComponent } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

interface ITheme {
	children: ReactNode;
}

const theme: DefaultTheme = {
	colors: {
		dark: {
			100: "#1a1a1a",
			200: "#1f1f1f",
			300: "#2a2a2a",
			400: "#2f2f2f",
			500: "#3a3a3a",
		},
		primary: {
			100: "#5200FF",
			200: "#7433FF",
			300: "#9766FF",
			400: "#BA99FF",
			500: "#DCCCFF",
		},
		error: {
			100: "#FF003D",
			200: "#FF3364",
			300: "#FF668B",
			400: "#FF99B1",
			500: "#FFCCD8",
		},
		warning: {
			100: "#D4FF00",
			200: "#DDFF33",
			300: "#E5FF66",
			400: "#EEFF99",
			500: "#F7FFCC",
		},
		light: {
			100: "#efefef",
			200: "#eaeaea",
			300: "#dfdfdf",
			400: "#dadada",
			500: "#cfcfcf",
		},
		success: {
			100: "#00FFA3",
			200: "#33FFB6",
			300: "#66FFC8",
			400: "#99FFDA",
			500: "#CCFFED",
		},
	},

	fonts: {
		heading: {
			1: "3rem",
			2: "2.5rem",
			3: "2.25rem",
			4: "2rem",
			5: "1.5rem",
			6: "1.25rem",
		},
		body: {
			1: "0.875rem",
			2: "1rem",
		},
		label: {
			1: "0.625rem",
			2: "0.75rem",
		},
	},
	radius: {
		1: "0.313rem",
		2: "100%",
	},
};

const Theme: FunctionComponent<ITheme> = ({ children }: ITheme) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;
