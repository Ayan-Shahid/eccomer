import React, {
	FunctionComponent,
	InputHTMLAttributes,
	ReactNode,
} from "react";
import { AlertCircle, CheckCircle } from "react-feather";
import * as Styled from "styles/Auth/Input/Main.elements";
import { FieldMetaProps } from "formik";

interface MainProps extends InputHTMLAttributes<HTMLInputElement> {
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
}

const Main: FunctionComponent<MainProps & FieldMetaProps<string>> = ({
	leftIcon,
	rightIcon,

	...props
}) => {
	return (
		<Styled.Wrapper>
			<Styled.InputWrapper className="form-input-wrapper">
				<Styled.Input minLength={4} required {...props} />
				{leftIcon}
				{rightIcon || <CheckCircle className="valid-icon" />}
			</Styled.InputWrapper>
			<Styled.Error
				className={
					props.touched && props.error ? "error-active" : "error-unactive"
				}
			>
				{props.touched && props.error ? (
					<AlertCircle className="error-icon" />
				) : null}
				<Styled.ErrorText>{props.touched && props.error}</Styled.ErrorText>
			</Styled.Error>
		</Styled.Wrapper>
	);
};

export default Main;
