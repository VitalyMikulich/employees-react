import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import MainPage from './components/MainPage/MainPage';
import Person from './components/Person/Person';
import SettingsPage from './components/SettingsPage/SettingsPage';
import './App.css';
import { store } from './redux/store';
import { login } from './redux/action';

function App() {
  // localStorage.clear();
  const logInStatus = localStorage.getItem("logInStatus") || 'off';
  const activeUser = localStorage.getItem("activeUser");
  function DisplayMain() {  
    if(logInStatus !== 'off') {
      store.dispatch(login(logInStatus, activeUser));
      return (
        <Redirect to='/main' />
      )
    } else return (
      <Redirect to='/signin' />
    )
  }

  return (
    <>
      <Switch>
        <Route 
          path='/main' 
          component={() => <MainPage store={store}/>} 
        />
        <Route 
          path='/signin' 
          component={() => <SignIn store={store}/>} 
        />
        <Route
          path='/settings'
          component={() => <SettingsPage store={store}/>}
        />
        <Route
          path='/person'
          component={() => <Person store={store}/>}
        />
      </Switch>
      <DisplayMain />
    </>
  );
}

export default App;
