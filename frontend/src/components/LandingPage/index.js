import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Landing.css'

function Landing() {
    // const dispatch = useDispatch();
    // const [courses, setCourses] = useState([]);
    // const userId = useSelector(state => state.session.user.id);

    const handleMakeDeck = () => { };
    const handleSearchDecks = () => { };

    return (
        <div className="main pic">
            <div>
                <h1>Need to study hard?</h1>
                <h3>Flashcards may be the way.</h3>
                <button onClick={handleMakeDeck} type="button" className="landing-button lb1">Make Flashcards</button>
                <button onClick={handleSearchDecks} type="button" className="landing-button lb2">Find Flashcards</button>
            </div>
        </div>
    )

}


export default Landing;
