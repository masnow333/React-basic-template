'use client';

import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Fallback({ error, resetErrorBoundary }) {

	const [lgShow, setLgShow] = useState(false);

	useEffect(() => {
		setLgShow(true);
	}, []);

	return (
		<>
			<Modal
				size='lg'
				show={lgShow}
				onHide={() => {
					resetErrorBoundary();
					setLgShow(false);
				}}
				aria-labelledby='example-modal-sizes-title-lg'
			>
				<Modal.Header closeButton>
					<Modal.Title id='example-modal-sizes-title-lg'>
						Something goes wrong
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>{error.message}</Modal.Body>
			</Modal>
		</>
	);
}

export default Fallback;
