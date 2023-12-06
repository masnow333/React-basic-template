"use client";

import { ProtectedRoute } from "../components/ProtectedRouteComponent";
import LoginRegisterView from "../views/auth";

const routes = [
	{
		id: 1, 
		name: 'Home',
		path: "/",
		element: <h1>Home Page</h1>,
		isProtected: false,
	},
	{
		id: 2, 
		name: 'dashboard',
		path: "/dashboard",
		element: <ProtectedRoute><h1>Dashboard Page</h1></ProtectedRoute> ,
		isProtected: true,
	},
	{
		id: 3, 
		name: 'Login',
		path: "/login",
		element: <LoginRegisterView />,
		isProtected: false,
	},
	{
		id: 4, 
		name: 'Contact',
		path: "/contact",
		element: <h1>Contact Page</h1>,
		isProtected: false,
	}
];

export default routes;
