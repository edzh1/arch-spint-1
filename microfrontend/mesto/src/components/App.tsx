import React, {lazy, Suspense} from "react";
import { Route, useHistory, Switch, Redirect } from "react-router-dom";
import Footer from "./Footer";
import useGlobalStore from "../store"


const Header = lazy(() => import('header/Header').catch(() => {
      return { default: () => <div className='error'>Component is not available!</div> };
    })
);
const Auth = lazy(() => import('auth/Auth').catch(() => {
      return { default: () => <div className='error'>Component is not available!</div> };
    })
);
const Feed = lazy(() => import('feed/Feed').catch(() => {
      return { default: () => <div className='error'>Component is not available!</div> };
    })
);
const MainHeader = lazy(() => import('main_header/MainHeader').catch(() => {
        return { default: () => <div className='error'>Component is not available!</div> };
    })
);

const ProtectedRoute = ({ component: Component, ...props  }) => {
    return (
        <Route exact>
            {
                () => props.loggedIn ? <Component {...props} /> : <Redirect to="./signin" />
            }
        </Route>
    )}


const Main = () =>
    <Suspense>
        <MainHeader/>
        <Feed/>
    </Suspense>


function App() {
  // @ts-ignore
  const {email, setIsLoggedIn, isLoggedIn} = useGlobalStore();
  const history = useHistory();


  function onSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    history.push("/signin");
  }

  return (
      <div className="page__content">
        <Header email={email} onSignOut={onSignOut} />
        <Auth />
        <ProtectedRoute
          exact
          path="/"
          component={Main}
          loggedIn={isLoggedIn}
        />
        <Footer />
      </div>
  );
}

export default App;
