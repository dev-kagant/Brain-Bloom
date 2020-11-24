import React, { useState } from 'react';
import { ModalProvider, Modal } from '../../context/Modal';
import LoginForm from './LoginForm';


function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <ModalProvider>
            <button onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </ModalProvider>
    );
}

export default LoginFormModal;
