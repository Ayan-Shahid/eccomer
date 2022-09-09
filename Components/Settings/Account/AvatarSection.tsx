import { auth } from "Database/config";
import { Avatar } from "Illustrations";
import React, { ChangeEventHandler, FunctionComponent, RefObject } from "react";
import { Edit3, Trash } from "react-feather";
import * as Styled from "styles/Settings/Account/AvatarSection.elements";

interface AvatarSectionProps {
	openFileInput: () => void;
	fileInputRef: RefObject<HTMLInputElement>;
	handleFileInput: ChangeEventHandler<HTMLInputElement>;
	removeDisplayPicture: () => void;
}

const AvatarSection: FunctionComponent<AvatarSectionProps> = ({
	openFileInput,
	fileInputRef,
	handleFileInput,
	removeDisplayPicture,
}: AvatarSectionProps) => {
	return (
		<Styled.Wrapper>
			<Styled.Label>Avatar</Styled.Label>
			<Styled.Row>
				<Styled.Figure onClick={openFileInput}>
					<input
						ref={fileInputRef}
						type="file"
						accept="png,jpg"
						onChange={handleFileInput}
						className="fileInput"
						name="file-input"
					/>
					{auth.currentUser?.photoURL ? (
						<Styled.Photo
							layout="fill"
							alt="avatar"
							src={auth.currentUser.photoURL}
						/>
					) : (
						<Avatar />
					)}
					<Styled.Badge>
						<Edit3 className="avatar-badge-icon" />
					</Styled.Badge>
				</Styled.Figure>
				<Styled.Button onClick={removeDisplayPicture}>
					<Trash className="icon" />
					<Styled.Text>Remove</Styled.Text>
				</Styled.Button>
			</Styled.Row>
		</Styled.Wrapper>
	);
};

export default AvatarSection;
