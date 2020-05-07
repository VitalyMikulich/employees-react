import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import triangle from '../../img/triangle.png';
import switchImg from '../../img/switch.png';
import user from '../../img/user.png';
import InfoContainer from '../InfoContainer/InfoContainer';
import { store } from '../../redux/store';
import { login } from '../../redux/action';

export default function Header(props) {
  const state = store.getState();
  let logInStatus = state.logIn.logInStatus;
  let activeUser = state.logIn.activeUser;

  function signOut() {
    localStorage.removeItem('logInStatus');
    localStorage.removeItem('aciveUser');
    store.dispatch(login('off', 'off'));
  }

  function toggleSignOutBlock() {
    const signOut = document.querySelector('.signOutLink');
    signOut.classList.toggle('displayNone');
  }

  return (
    <>
      <header>
        <nav>
          <div className="companyContainer">
            <div>
              <p className="service">EMPLOYEE SERVICES</p>
            </div>
          </div>
          <InfoContainer
            logInStatus={logInStatus}
            mainPage={props.pageListStyle.mainPage}
            settingsPage={props.pageListStyle.settingsPage}
          />
          <div className="profileContainer">
            <div className="directButton">
              <img src={triangle} className="directImg" alt="direct"></img>
            </div>
            <div className="profile" onClick={toggleSignOutBlock}>
              <img className="profilePhoto" src={user} alt="profilePhoto"></img>
              {activeUser}
            </div>
            <div className="switchButton">
              <img className="switchImg" src={switchImg} alt="switch"></img>
            </div>
          </div>
          <Link to='signin' className={"signOutLink displayNone"}><div className="signOut" onClick={signOut}>Sign Out</div></Link>
        </nav>
      </header>
    </>
  )
}