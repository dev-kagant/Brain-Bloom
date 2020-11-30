import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as courseActions from "../../store/course";
import './CreateCourse.css'


function CreateCourse() {
    const dispatch = useDispatch();
    const [courseName, setCourseName] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    const userId = useSelector(state => state.session.user.id)

    const handleSubmit = (e) => {
        console.log('Maybe here')
        e.preventDefault();
        if (courseName && description) {
            setErrors([]);
            return dispatch(courseActions.addingCourse({ userId, courseName, description }))
                .catch(res => {
                    if (res.data && res.data.errors) setErrors(res.data.errors);
                });
        }
        return setErrors(['Please fill provide a value for all fields']);
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <h1 className="titlestuff">Create An Course</h1>
            <h4 className="titlestuff">Start by creating a course!!!</h4>
            <label>
                Name of Course...
                <input
                    type="text"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    required
                />
            </label>
            <label>
                Short description of what this course is about
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <button onClick={handleSubmit} type="submit" className="buttonstyle">Create Course</button>
        </form>
    )
}

export default CreateCourse;
