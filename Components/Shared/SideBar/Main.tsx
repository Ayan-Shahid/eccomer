import { auth } from "Database/config";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { Home, Plus, Settings, ShoppingBag, ShoppingCart } from "react-feather";
import * as Styled from "styles/Shared/SideBar/Main.elements";
import * as Shared from "styles/Shared/Loaders/Skeletons.elements";

import { Avatar } from "..";

const Main: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Styled.LogoWrapper>
				<Styled.Logo
					alt="logo"
					width="40rem"
					height="40rem"
					src="/favicon.ico"
				/>
				<Styled.LogoText>Eccommer</Styled.LogoText>
			</Styled.LogoWrapper>
			<Styled.List>
				<Link href="/">
					<Styled.Item>
						<Home className="item-icon" />
						<Styled.ItemText>Home</Styled.ItemText>
					</Styled.Item>
				</Link>
				<Styled.Item>
					<Plus className="item-icon" />
					<Styled.ItemText>Create</Styled.ItemText>
				</Styled.Item>
				<Styled.Item>
					<ShoppingCart className="item-icon" />
					<Styled.ItemText>Cart</Styled.ItemText>
				</Styled.Item>
				<Styled.Item>
					<ShoppingBag className="item-icon" />
					<Styled.ItemText>Orders</Styled.ItemText>
				</Styled.Item>
				<Link href="settings">
					<Styled.Item>
						<Settings className="item-icon" />
						<Styled.ItemText>Settings</Styled.ItemText>
					</Styled.Item>
				</Link>
			</Styled.List>
			<Styled.User>
				<Avatar
					photoUrl={auth.currentUser?.photoURL}
					className="sidebar-avatar"
					size="2.5rem"
				/>

				<div className="user-aside">
					{auth.currentUser?.displayName ? (
						<Styled.ItemText>{auth.currentUser?.displayName}</Styled.ItemText>
					) : (
						<Shared.RectangleSkeleton
							width="100%"
							height="1rem"
							borderRadius="0.2rem"
						/>
					)}
					{auth.currentUser?.email ? (
						<Styled.ItemLabel>{auth.currentUser?.email}</Styled.ItemLabel>
					) : (
						<Shared.RectangleSkeleton
							width="80%"
							height="0.8rem"
							borderRadius="0.2rem"
						/>
					)}
				</div>
			</Styled.User>
		</Styled.Wrapper>
	);
};

export default Main;
