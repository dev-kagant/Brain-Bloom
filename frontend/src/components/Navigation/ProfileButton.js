import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div className="button2" >
            <div onClick={openMenu} >
                <i className="fas fa-hippo"></i>
            </div>
            {user.username}
            {
                showMenu && (
                    <ul className="profile-dropdown">
                        <li>
                            <button className="button3">My Account</button>
                        </li>
                        <li>
                            <button onClick={logout} className="button3">Log Out</button>
                        </li>
                    </ul>
                )
            }
        </div>
    );
}

export default ProfileButton;
