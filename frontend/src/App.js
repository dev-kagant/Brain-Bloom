import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Landing from "./components/LandingPage";
import Footer from "./components/FooterPage";
import MyCourseList from "./components/MyCourseList";

// import CreateCourseModal from "./components/CreateCourseModal";
// <li className="link-grid-3">
// <CreateCourseModal />
// </li>


function App(store) {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  // let userId = useSelector(state.user.id, shallowEqual)

  return (
    <div className="bigPage">
      <Navigation isLoaded={isLoaded} />

      <Switch>
        <Route path="/courses" render={() => <MyCourseList company={store} />} />
        <Route path="/" render={() => <Landing />} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
