import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';

interface LayoutProps {
	children: React.ReactNode;
}

const Loading = ({ children }: LayoutProps) => {
	const loading: LoadingModel = useSelector((state: any) => state.loading);

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
							<div className='d-flex justify-content-center'>
								<Spinner animation='border' role='status'>
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
