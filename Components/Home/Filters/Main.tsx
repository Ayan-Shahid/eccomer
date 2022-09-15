import { useBoolean } from "Hooks";
import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import * as Styled from "styles/Home/Filters/Main.elements";

const categoryFilter = ["Clothes", "Electronics", "Accessories", "Appliances"];

const Main: FunctionComponent<{
	setCategory?: Dispatch<SetStateAction<string>>;
}> = ({ setCategory }) => {
	const {
		state: filter,
		setTrue: openFilter,
		setFalse: closeFilter,
	} = useBoolean();
	const filterCategory = (name: string) => {
		if (setCategory) setCategory(name);
		closeFilter();
	};
	return (
		<Styled.Wrapper>
			<Styled.Item>
				<Styled.Chip onClick={openFilter}>
					<Styled.Text>Category</Styled.Text>
				</Styled.Chip>
				<Styled.Filters className={filter ? "active" : "close"}>
					{categoryFilter.map((item, index) => (
						<Styled.Filter onClick={() => filterCategory(item)} key={index}>
							{item}
						</Styled.Filter>
					))}
				</Styled.Filters>
			</Styled.Item>
			<Styled.Chip>
				<Styled.Text>Price</Styled.Text>
			</Styled.Chip>
		</Styled.Wrapper>
	);
};

export default Main;
