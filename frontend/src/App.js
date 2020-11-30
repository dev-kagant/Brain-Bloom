import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Landing from "./components/LandingPage";
import Footer from "./components/FooterPage";
// import CreateCourseModal from "./components/CreateCourseModal";
// <li className="link-grid-3">
// <CreateCourseModal />
// </li>


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="bigPage">
      <Navigation isLoaded={isLoaded} />

      <Switch>
        <Landing />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
