import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
} else {
  console.error('Root element not found.');
  <React.StrictMode>
		<h1>Root element not found.</h1>
	</React.StrictMode>
}

