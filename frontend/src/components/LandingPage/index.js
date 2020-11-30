import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import SignupFormModal from '../SignupFormModal';
import './Landing.css'


function Landing() {
    // const dispatch = useDispatch();
    // const [courses, setCourses] = useState([]);
    // const [showMenu, setShowMenu] = useState(false);
    // const userId = useSelector(state => state.session.user.id);



    const handleMakeDeck = () => { };

    const handleSearchDecks = () => { };

    return (
        <div className="page-grid-2 pic">
            <div className="main">
                <h1 className="h1">Need to <br /> study hard?</h1>
                <h3>Flashcards may be the way!</h3>
                <div className="button-container">
                    <button onClick={handleMakeDeck} type="button" className="landing-button lb1">Make Flashcards</button>
                    <button onClick={handleSearchDecks} type="button" className="landing-button lb2">Search Flashcards</button>
                </div>
            </div>
        </div >
    )

}


export default Landing;
