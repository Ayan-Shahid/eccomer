/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
const useNumberFormatter = (
	value?: number | null,
	currency?: string | null
) => {
	const format =
		value && currency
			? new Intl.NumberFormat("en-IN", {
					style: "currency",
					currency,
			  }).format(value)
			: 0;

	return format;
};

export default useNumberFormatter;
