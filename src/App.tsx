'use client';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import routes from './routes/main';
import Menu from './components/menu/Menu';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './utils/fallBackError';
import Loading from './utils/loading';
import React from 'react';

function App() {
	const listRoutes = routes.map((route) => (
		<Route
			key={route.id.toString()}
			path={route.path}
			element={route.element}
		/>
	));
	return (
		<Loading>
			<ErrorBoundary FallbackComponent={Fallback}>
				<Menu />
				<Routes>{listRoutes}</Routes>
			</ErrorBoundary>
		</Loading>
	);
}

export default App;
