"use client";

import LoginRegisterView from "../views/auth";

const routes = [
	{
		id: 1, 
		name: 'Home',
		path: "/",
		element: <LoginRegisterView />,
	},
	{
		id: 2, 
		name: 'Login',
		path: "/login",
		element: <LoginRegisterView />,
	},
	{
		id: 3, 
		name: 'Contact',
		path: "/contact",
		element: <h1>Contact Page</h1>,
	},
];

export default routes;
