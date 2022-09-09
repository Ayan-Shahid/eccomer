/* eslint-disable no-constant-condition */
/* eslint-disable indent */
import React, { FunctionComponent, useState } from "react";
import * as Styled from "styles/Auth/index.elements";
import { Aside, PaymentMethod, SignIn, SignUp } from "Components/Auth";
import { useBoolean } from "Hooks";

interface MainProps {
	countries?:
		| { name: string; iso2: string; states: { name: string }[] }[]
		| null;
	cities?: { country: string; cities: string[] }[] | null;
}

const Main: FunctionComponent<MainProps> = ({
	countries,
	cities,
}: MainProps) => {
	const { state: authState, setTrue: signIn, setFalse: signUp } = useBoolean();
	const { setTrue: isLoadingTrue, setFalse: isLoadingFalse } = useBoolean();
	const [formState, setFormState] = useState<
		"authenticate" | "payment form" | "completed"
	>("authenticate");

	const timeLineProgressClassName = () => {
		if (formState === "payment form") return "paymentmethod";
		else if (formState === "authenticate") return "authentication";
		else if (formState === "completed") return "completed";
	};
	return (
		<Styled.Wrapper>
			<Aside />
			<Styled.Forms>
				{authState ? null : (
					<Styled.TimeLineArea>
						<Styled.TimeLine className={timeLineProgressClassName()}>
							<Styled.TimeLineState>Authentication</Styled.TimeLineState>
							<Styled.TimeLineState>Payment Method</Styled.TimeLineState>
							<Styled.TimeLineCircle className={timeLineProgressClassName()} />
							<Styled.TimeLineCircle2
								className={
									formState === "completed" ? "completed" : "unfinished"
								}
							/>
						</Styled.TimeLine>
					</Styled.TimeLineArea>
				)}
				{formState === "authenticate" ? (
					authState ? (
						<SignIn clickOnSignUp={signUp} />
					) : (
						<SignUp setFormState={setFormState} clickOnSignIn={signIn} />
					)
				) : (
					<PaymentMethod
						setFormState={setFormState}
						countries={countries}
						cities={cities}
						isLoadingFalse={isLoadingFalse}
						isLoadingTrue={isLoadingTrue}
					/>
				)}
			</Styled.Forms>
		</Styled.Wrapper>
	);
};

export default Main;
