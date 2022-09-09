import { useBoolean } from "Hooks";
import { NoData } from "Illustrations";
import React, {
	Dispatch,
	FunctionComponent,
	memo,
	SetStateAction,
} from "react";
import { ChevronDown } from "react-feather";
import * as Styled from "styles/Auth/Select/Main.elements";

interface MainProps {
	list?: string[] | null;
	placeholder?: string;
	selected?: string | null;
	setSelected?: Dispatch<SetStateAction<string | null>>;
}

const Main: FunctionComponent<MainProps> = ({
	list,
	placeholder,
	selected,
	setSelected,
}: MainProps) => {
	const { state: menu, setTrue: open, setFalse: close } = useBoolean();

	const selectCountry = (country: string) => {
		close();
		if (setSelected) setSelected(country);
	};
	return (
		<Styled.Wrapper>
			<Styled.Selected onClick={open} type="button">
				<Styled.Text>{selected || placeholder}</Styled.Text>
				<ChevronDown className="chevron-down" />
			</Styled.Selected>
			<Styled.List
				onMouseLeave={close}
				className={`${menu ? "active" : "closed"} ${
					list && list.length > 0 ? "" : "nodata"
				}`}
			>
				{list && list.length > 0 ? (
					list?.map((item, index) => (
						<Styled.Option
							key={index}
							onClick={() => selectCountry(item)}
							type="button"
						>
							<Styled.Text>{item}</Styled.Text>
						</Styled.Option>
					))
				) : (
					<NoData />
				)}
			</Styled.List>
		</Styled.Wrapper>
	);
};

export default memo(Main);
