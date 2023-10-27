import LoginRegisterView from "../views/auth";

const routes = [
	{
		path: "/",
		element: <h1>Home Page</h1>,
	},
	{
		path: "/login",
		element: <LoginRegisterView />,
	},
	{
		path: "/contact",
		element: <h1>Contact Page</h1>,
	},
];

export default routes;
