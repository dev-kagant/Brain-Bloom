import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import CreateCourseModal from '../CreateCourseModal';
import LandingPage from '../LandingPage';
import * as logo from "../../images/2020-11-24.png"
import './Navigation.css';


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let image; //create a thunk to grab image

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <div className="link-grid-1">
                    <li className="others-1">Search</li>
                    <li className="others-2">My Classes</li>
                    <li className="others-3">About</li>
                </div>
                <ProfileButton user={sessionUser} />
                <div className="link-grid-3 button">Upgrade</div>
            </>
        );
    } else {
        sessionLinks = (
            <>
                <div className="link-grid-1">
                    <li className="others-1">Search</li>
                    <li className="others-2">Make Flashcards</li>
                    <li className="others-3">About</li>
                </div>
                <li className="link-grid-2">
                    <LoginFormModal />
                </li>
                <li className="link-grid-3">
                    <SignupFormModal />
                </li>
            </>

        );
    }

    return (
        <ul className="page-grid-1 navBar">
            <li className="nav-grid-bloom">
                <NavLink exact to="/" className="bloomFocus" ><img src={logo} alt="logo" /></NavLink>
            </li>
            <ul className="nav-grid-links">
                {isLoaded && sessionLinks}
            </ul>
        </ul>
    );
}

export default Navigation;





// {/* <img src="../../../public/logo.png" alt="logo" /> */ }
