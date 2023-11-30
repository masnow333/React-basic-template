import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';

const Loading = ({ children }) => {
	const loading = useSelector((state) => state.loading);

	return (
		<>
			{loading.isLoading ? (
				<>
					<Modal
						show={loading.isLoading}
						backdrop='static'
						keyboard={false}
						size='lg'
						aria-labelledby='contained-modal-title-vcenter'
						centered
					>
						<Modal.Body>
							<div class='d-flex justify-content-center'>
								<Spinner animation='border' role='status' size='lg'>
									<span className='visually-hidden'>Loading...</span>
								</Spinner>
							</div>
						</Modal.Body>
					</Modal>
				</>
			) : null}
			{children}
		</>
	);
};

export default Loading;
