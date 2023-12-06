import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import routes from '../../routes/main';
import { useSelector } from 'react-redux';
import UserSideMenu from '../userSideMenu/UserSideMenu';

import './menu.css';

function Menu() {
	const user: userModel = useSelector((state: any) => state.user);
	const listRoutes = routes.map((route) => {
		if (
			(route.name === 'Login' &&
			user.jwt !== '') 
			|| (route.isProtected && user.jwt === '')
		) {
			return null;
		}
		return (
			<li className='nav-item' key={route.id.toString()}>
				<Link className='nav-link' to={route.path}>
					{route.name}
				</Link>
			</li>
		);
	});

	if (user.jwt !== '' && user.jwt !== undefined && user.jwt !== null) {
		listRoutes.push(
			<li className='nav-item' key='user'>
				<UserSideMenu />
			</li>
		);
	}

	return (
		<nav className='navbar navbar-light bg-light px-4 overflowx-hidden'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to={`/`}>
					Navbar
				</Link>
				<ul className='navbar-nav d-flex flex-row gap-4'>{listRoutes}</ul>
			</div>
		</nav>
	);
}

export default Menu;
