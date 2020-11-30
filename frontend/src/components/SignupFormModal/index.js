import React, { useState } from 'react';
import { Modal, ModalProvider } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <ModalProvider>
            <div onClick={() => setShowModal(true)} className="button">Sign Up</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </ModalProvider>
    );
}

export default SignupFormModal;
