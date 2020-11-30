import React, { useState, getState } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import * as courseActions from "../../store/course";
import CreateCourseModal from '../CreateCourseModal';
import session from '../../store/session'


function MyCourseList() {
    const dispatch = useDispatch();
    const [courses, setCourses] = useState([]);
    const userId = useSelector(state => state.user)


    const coursesList = () => {
        let response = dispatch(courseActions.gettingCourses(userId))
        console.log(response);
        return setCourses(response);
    }

    const handleNewCourse = () => {

    };


    return (
        <>
            <div className="page-grid-2 my-courses">
                <div className="my-courses-one">
                    <div>
                        <p>My Account</p>
                    </div>
                    <div>
                        <p>My Courses</p>
                        <button type="button" onClick={coursesList} >Get Courses</button>
                        <ul onLoad={coursesList}>
                            {Array.from(courses).forEach((course) => {
                                return (
                                    <li>{course.courseName}</li>,
                                    <li>{course.description}</li>,
                                    <li>{course.userId}</li>,
                                    <button type="button">Create Deck</button>,
                                    <button type="button">Delete Course</button>
                                )
                            })}
                        </ul>
                        <button onClick={handleNewCourse} type="button" ><CreateCourseModal /></button>
                    </div>
                </div>
                <div className="my-courses-two">
                    <div>UserName</div>
                    <div>My Decks</div>
                </div>
            </div>
        </>
    )

}


export default MyCourseList;
