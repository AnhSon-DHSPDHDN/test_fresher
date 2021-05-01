import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.scss';
import router from './routers/router';

function App() {
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
  );
}

export default App;
