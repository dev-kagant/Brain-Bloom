import React, { useState } from 'react';
import { Modal, ModalProvider } from '../../context/Modal';
import CreateCourse from './CreateCourse';

function CreateCourseModal() {
    const [courseModal, setCourseModal] = useState(false);

    return (
        <ModalProvider>
            <div onClick={() => setCourseModal(true)} className="button">Create An Course</div>
            {courseModal && (
                <Modal onClose={() => setCourseModal(false)}>
                    <CreateCourse />
                </Modal>
            )}
        </ModalProvider>
    );
}

export default CreateCourseModal;
