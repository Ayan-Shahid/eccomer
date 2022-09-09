import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: {
				100: string;
				200: string;
				300: string;
				400: string;
				500: string;
			};
			secondary: {
				100: string;
				200: string;
				300: string;
				400: string;
				500: string;
			};
			success: {
				100?: string;
				200?: string;
				300?: string;
				400?: string;
				500?: string;
			};
			error: {
				100?: string;
				200?: string;
				300?: string;
				400?: string;
				500?: string;
			};
			warning: {
				100?: string;
				200?: string;
				300?: string;
				400?: string;
				500?: string;
			};
			tertiary: {
				100: string;
				200: string;
				300: string;
				400: string;
				500: string;
			};
		};
		fonts: {
			"2xs": string;
			xs: string;
			sm: string;
			base: string;
			md: string;
			lg: string;
			xl: string;
			"2xl": string;
		};
	}
}
