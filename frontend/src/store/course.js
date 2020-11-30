import fetch from './csrf';
import { useSelector } from 'react-redux'

const ADD_COURSE = 'course/addCourse';
const REMOVE_COURSE = 'course/removeCourse';
const GET_COURSES = 'course/getCourses'
const ADD_DECK = 'course/addDeck';
const REMOVE_DECK = 'course/removeDeck';
const ADD_CARD = 'course/addCard';
const REMOVE_CARD = 'course/removeCard';
const ADD_TO_LIST = 'course/addToList';
const REMOVE_FROM_LIST = 'course/removeFromList';


const addCourse = (course) => {
    return {
        type: ADD_COURSE,
        course,
    }
}

const removeCourse = (courseId) => {
    return {
        type: REMOVE_COURSE,
        courseId,
    }
}

const getCourse = (courses) => {
    return {
        type: GET_COURSES,
        courses,
    }
}

export const addingCourse = (course) => async (dispatch) => {
    const { userId, courseName, description } = course;

    const response = await fetch('/api/courses', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            courseName,
            description,
        }),
    });
    dispatch(addCourse(response.data.course))
    return response;
}

export const removingCourse = (id) => async (dispatch) => {
    const response = await fetch('/api/courses', {
        method: 'DELETE',
    });
    dispatch(removeCourse(id));
    return response;
}


export const gettingCourses = ({ userId }) => async (dispatch) => {
    await fetch('/api/courses', {
        method: 'POST',
        body: JSON.stringify(
            { userId }
        )
    })
        .then((res) => res.json())
        .then((data) => {
            dispatch(getCourse(data))
        })
}

const initialState = { course: [] }

const courseReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_COURSE:
            newState = state.push(action.type)
            return newState;
        case REMOVE_COURSE:
            const idx = action.courseId
            return [...state.slice(0, idx), ...state.slice(idx + 1)];
        case GET_COURSES:
            return [...action.courses]
        default:
            return state;
    }
}

export default courseReducer;
