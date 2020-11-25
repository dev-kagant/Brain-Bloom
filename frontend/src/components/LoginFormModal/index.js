import React, { useState } from 'react';
import { ModalProvider, Modal } from '../../context/Modal';
import LoginForm from './LoginForm';


function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <ModalProvider>
            <div onClick={() => setShowModal(true)} className="button">Log In</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </ModalProvider>
    );
}

export default LoginFormModal;
