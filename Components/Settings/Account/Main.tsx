import React, { FunctionComponent, useRef } from "react";
import { Input } from "Components/Settings";
import * as Styled from "styles/Settings/Account/Main.elements";
import { Info, Mail, Save, User } from "react-feather";
import {
	useAvatarUpdate,
	useBoolean,
	useEmailUpdate,
	useUsernameUpdate,
} from "Hooks";
import { PopUpForm } from "Components/Shared";
import AvatarSection from "./AvatarSection";

const Main: FunctionComponent = () => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const {
		state: popUpForm,
		setTrue: isPopUpForm,
		setFalse: notPopUpForm,
	} = useBoolean();
	const { openFileInput, handleFileInput, uploadAvatar, removeDisplayPicture } =
		useAvatarUpdate(fileInputRef);

	const { username, handleName, uploadUsername } = useUsernameUpdate();
	const { email, handleEmail, uploadEmail } = useEmailUpdate(isPopUpForm);

	const uploadNewUser = () => {
		uploadAvatar();
		uploadUsername();
		uploadEmail();
	};

	return (
		<>
			<PopUpForm
				newEmail={email}
				closePopUp={notPopUpForm}
				isOpen={popUpForm}
			/>
			<Styled.Heading>Account</Styled.Heading>
			<Styled.Main>
				<Input
					value={username || ""}
					label="Username"
					onChange={handleName}
					leftIcon={<User className="left-icon" />}
				/>
				<Input
					value={email || ""}
					onChange={handleEmail}
					label="Email"
					leftIcon={<Mail className="left-icon" />}
				/>
				<AvatarSection
					handleFileInput={handleFileInput}
					fileInputRef={fileInputRef}
					removeDisplayPicture={removeDisplayPicture}
					openFileInput={openFileInput}
				/>
				<Styled.Footer>
					<Styled.Text>Save profile settings.</Styled.Text>
					<Styled.CancelButton>
						<Info className="icon" />
						<Styled.Text>Cancel</Styled.Text>
					</Styled.CancelButton>
					<Styled.UploadNewButton onClick={uploadNewUser}>
						<Save className="icon" />
						<Styled.Text>Save</Styled.Text>
					</Styled.UploadNewButton>
				</Styled.Footer>
			</Styled.Main>
		</>
	);
};

export default Main;
