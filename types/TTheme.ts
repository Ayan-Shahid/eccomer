type Color = {
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
};

type TTheme = {
	colors: {
		primary: Color;
		dark: Color;
		light: Color;
		error: Color;
		success: Color;
		warning: Color;
	};
	fonts: {
		heading: {
			1: string;
			2: string;
			3: string;
			4: string;
			5: string;
			6: string;
		};
		body: {
			1: string;
			2: string;
		};
		label: {
			1: string;
			2: string;
		};
	};
	radius: {
		1: string;
		2: string;
	};
};

export default TTheme;
