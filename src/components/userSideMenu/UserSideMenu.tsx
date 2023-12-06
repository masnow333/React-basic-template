import React, { useState } from 'react';
import './userSideMenu.css';
import { Icon } from '../IconComponent';
import { useSelector } from 'react-redux';
import { useLogout } from '../../hooks/auth';

const UserSideMenu = () => {
	const [showMenu, setShowMenu] = useState(false);
	const logout = useLogout();

	const user: userModel = useSelector((state: any) => state.user);
	return (
		<>
			<Icon
				onClick={() => setShowMenu(!showMenu)}
				iconName='PersonCircle'
				color='black'
				size={40}
				className='align-top'
			/>
			{/* <button className='burger' onClick={() => toggleMenu()}></button> */}
			<div className={`${
						showMenu ? 'open' : ''
					} menu mt-5 pt-2 bg-light d-flex flex-column justify-content-between`}>
				<ul 
					className='list-group rounded-0 w-100'
					id='list-tab'
					role='tablist'
				>
					<li
						className='list-group-item w-100 text-end bg-light'
						id='list-home-list'
						data-toggle='list'
						role='tab'
						aria-controls='home'
					>
						Name: {user.name} {user.lastName}
					</li>
					<li
						className='list-group-item w-100 text-end bg-light'
						id='list-profile-list'
						data-toggle='list'
						role='tab'
						aria-controls='profile'
					>
						Email: {user.email}
					</li>
					<li
						className='list-group-item w-100 text-end bg-light'
						id='list-messages-list'
						data-toggle='list'
						role='tab'
						aria-controls='messages'
					>
						UserID: {user.id}
					</li>
				</ul>
				<button
					className='list-group-item w-100 text-center bg-light mb-5 p-3'
					id='list-settings-list'
					data-toggle='list'
					role='tab'
					aria-controls='settings'
					onClick={() => logout()}
				>
					Logout
				</button>
			</div>
		</>

		// <div className='menu'>
		// 	<Icon
		// 		onClick={() => {
		// 			setShowMenu(!showMenu);
		// 		}}
		// 		iconName='PersonCircle'
		// 		color='black'
		// 		size={40}
		// 		className='align-top'
		// 	/>

		// 	<nav
		// 		id='nav'
		// 		className={`${showMenu ? 'menu_show' : ''} position-absolute pt-5`}
		// 	>
		// 		<ul className='list-group'>
		// 			<li className='list-group-item w-100 text-end px-5'>
		// 				Email: {user.email}
		// 			</li>
		// 			<li className='list-group-item w-100 text-end px-5'>
		// 				Email: {user.email}
		// 			</li>
		// 			<li className='list-group-item w-100 text-end px-5'>
		// 				UserID: {user.id}
		// 			</li>
		// 			<li className='list-group-item w-100 text-end px-5'>
		// 				Logout
		// 			</li>
		// 		</ul>
		// 	</nav>
		// </div>
	);
};

// <script>
//   const toggleMenu = () => document.body.classList.toggle("open");
// </script>

export default UserSideMenu;
