import React, { FunctionComponent } from "react";
import * as Styled from "styles/Home/List/Main.elements";
import Product from "../Product/Main";
import { v1 as uuidv1 } from "uuid";

const products = [
	{
		name: "Nike Shoes",
		price: 200,
		shippingPrice: 50,
		category: "Clothes",
		id: uuidv1(),
		photoUrl:
			"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
	},
	{
		name: "Macbook Pro",
		price: 1200,
		category: "Electronics",
		id: uuidv1(),
		shippingPrice: 100,
		photoUrl:
			"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		name: "HeadPhone",
		price: 500,
		id: uuidv1(),
		shippingPrice: 150,
		category: "Electronics",

		photoUrl:
			"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
	},
	{
		name: "Watch",
		price: 2200,
		id: uuidv1(),
		shippingPrice: 20,
		category: "Electronics",

		photoUrl:
			"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		name: "Apple Watch",
		price: 1000,
		id: uuidv1(),
		shippingPrice: 10,
		category: "Electronics",

		photoUrl:
			"https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		name: "Xbox Controller",
		price: 300,
		id: uuidv1(),
		shippingPrice: 5,
		category: "Electronics",

		photoUrl:
			"https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		name: "Airpods Pro",
		price: 150,
		id: uuidv1(),
		shippingPrice: 15,
		category: "Electronics",

		photoUrl:
			"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		name: "iPhone 11",
		price: 800,
		id: uuidv1(),
		shippingPrice: 25,
		category: "Electronics",

		photoUrl:
			"https://images.unsplash.com/photo-1574737331256-16f47895d422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHxwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		name: "Glasses",
		price: 5200,
		shippingPrice: 35,
		id: uuidv1(),
		category: "Accessories",
		photoUrl:
			"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM5fHxwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	},
];

const Main: FunctionComponent<{ category?: string }> = ({ category }) => {
	const list = products.filter((item) => item.category === category);
	return (
		<Styled.Wrapper>
			<Styled.Heading>{category || "All"}</Styled.Heading>
			<Styled.List>
				{list.map((item) => (
					<Product {...item} key={item.id} />
				))}
			</Styled.List>
		</Styled.Wrapper>
	);
};

export default Main;
