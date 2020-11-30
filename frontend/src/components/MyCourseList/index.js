import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

function MyCourseList() {
    const dispatch = useDispatch();
    const [courses, setCourses] = useState([]);
    const userId = useSelector(state => state.session.user.id);

    return (
        <>
            <div>
                <ProfileButton user={sessionUser} className="link-grid-2" />
            </div>
            <div>

            </div>
        </>
    )

}


export default MyCourseList;
