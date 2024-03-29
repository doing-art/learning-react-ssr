import React from 'react';
import Counter from '../Counter';
import './App.style.scss';
import {NavLink as Link, Switch, Route} from 'react-router-dom';
import Post from "../Post";

export default function App() {
  return (
    <div className='ui-app'>
      <div className='ui-app__navigation'>
        <Link
          className='ui-app__navigation__link'
          activeClassName='ui-app__navigation__link--active'
          to='/'
          exact={true}
        >Counter</Link>

        <Link
          className='ui-app__navigation__link'
          activeClassName='ui-app__navigation__link--active'
          to='/post'
          exact={true}
        >Post</Link>
      </div>

      <Switch>
        <Route
          path='/'
          exact={true}
          render={() => <Counter name='Monica Geller'/>}
        />

        <Route
          path='/post'
          exact={true}
          component={Post}
        />
      </Switch>

    </div>
  );
}
