import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, ModalProvider } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <ModalProvider>
            <div onClick={() => setShowModal(true)} className="button">Create An Account</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </ModalProvider>
    );
}

export default SignupFormModal;
