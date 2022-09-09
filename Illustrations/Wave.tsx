import React, { FunctionComponent } from "react";

const Wave: FunctionComponent = () => {
	return (
		<svg className="wave" xmlns="http://www.w3.org/2000/svg">
			<path
				fill="#0099ff"
				fillOpacity="1"
				d="M0,288L48,245.3C96,203,192,117,288,85.3C384,53,480,75,576,117.3C672,160,768,224,864,218.7C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
			></path>
		</svg>
	);
};

export default Wave;
