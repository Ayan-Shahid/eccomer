import React from "react";
import { ReactNode } from "react";
import { FunctionComponent } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
	colors: {
		primary: {
			100: "#2c2c63",
			200: "#252555",
			300: "#1D1D42",
			400: "#191939",
			500: "#13132b",
		},
		secondary: {
			100: "#7258da",
			200: "#6447d7",
			300: "#4E2ECF",
			400: "#4b2cc9",
			500: "#4528b8",
		},
		success: {
			100: "#26f77d",
			200: "#08d95f",
			300: "#058E3F",
			400: "#04622b",
			500: "#012711",
		},
		warning: {
			100: "#baba6a",
			200: "#bcbc43",
			300: "#bebe00",
			400: "#929201",
			500: "#595900",
		},
		error: {
			100: "#da706c",
			200: "#d2504b",
			300: "#BB342F",
			400: "#a32d29",
			500: "#832421",
		},
		tertiary: {
			100: "#EFEFFF",
			200: "#ebebff",
			300: "#d6d6ff",
			400: "#000029",
			500: "#000014",
		},
	},
	fonts: {
		"2xs": "0.506rem",
		xs: "0.608rem",
		sm: "0.729rem",
		base: "0.875rem",
		md: "1.05rem",
		lg: "1.26rem",
		xl: "1.512rem",
		"2xl": "1.814rem",
	},
};

const Theme: FunctionComponent<{ children: ReactNode }> = ({
	children,
}: {
	children: ReactNode;
}) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
