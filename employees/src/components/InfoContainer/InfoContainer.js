import React from 'react';
import { Link } from 'react-router-dom';
import './InfoContainer.css';

export default function InfoContainer(props) {
  if(props.logInStatus === 'admin') {
    return (
      <div className="infoContainer">
        <Link to='/main'><div className={props.mainPage}>Address Book &#160;<span>&#9660;</span></div></Link>
        <div className="nonActivePage">Leave Requests &#160;<span>&#9660;</span></div>
        <Link id='settings' to='/settings'><div className={props.settingsPage}>Settings &#160;<span>&#9660;</span></div></Link>
      </div>
    )
  } else return (
    <div className="infoContainer">
      <Link to='/main'><div className={props.mainPage}>Address Book &#160;<span>&#9660;</span></div></Link>
      <div className="nonActivePage">Leave Requests &#160;<span>&#9660;</span></div>
    </div>
  )
}