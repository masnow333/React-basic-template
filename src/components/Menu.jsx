import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import routes from '../routes/main';

function Menu() {
	const listRoutes = routes.map((route) => (
		<li className='nav-item' key={route.id.toString()}>
			<Link className='nav-link' to={route.path}>
				{route.name}
			</Link>
		</li>
	));
	return (
		<nav className='navbar navbar-light bg-light'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to={`/`}>
					Navbar
				</Link>
				<ul className='navbar-nav d-flex flex-row gap-4'>
					{listRoutes}
				</ul>
			</div>
		</nav>
	);
}

export default Menu;
