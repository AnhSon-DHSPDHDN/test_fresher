import React, { Suspense, useReducer } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.scss';
import router from './routers/router';

import { AnimalsContext } from './contexts/contexts'
import { animailsReducer } from './contexts/reducers/animalsReducer'

function App() {
  const [animalsState, animalsDispatch] = useReducer(animailsReducer, {
    isLoading: true
  });

  const mapRoute = (routers) => {
    if (routers) {
      return routers.map((router, index) => {
        return <Route
          key={index}
          path={router?.path}
          component={router?.component}
          exact={router?.exact}
        ></Route>
      })
    } else return;
  }
  return (
    <AnimalsContext.Provider
      value={{ data: animalsState, dispatch: animalsDispatch }}
    >
      <Router>
        <Suspense fallback={
          <div className="loading">
            loading...
        </div>
        }>
          <Switch>
            {mapRoute(router)}
            <Redirect from='/' to='/home' />
          </Switch>
        </Suspense>
      </Router>
    </AnimalsContext.Provider>
  );
}

export default App;
