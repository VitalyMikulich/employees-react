import React from 'react';
import { Link } from 'react-router-dom';
import workImg from '../../img/work.png';
import doorImg from '../../img/door.png';
import user from '../../img/user.png';
import './PersonTile.css';

export default function PersonTile(props) {
  return (
    <Link to='/person'>
      <div className="person">
        <img src={user} alt="person"></img>
        <p className="nameEnTile">{props.person.nameEn}</p>
        <p className="nameRuTile">{props.person.nameRu}</p>
        <div className="personInfo">
          <div>
            <img src={workImg} alt="work"></img>
            {props.person.position}
          </div>
          <div>
            <img src={doorImg} alt="door"></img>
            {props.person.cabinet}
          </div>
        </div>
      </div>
    </Link>
  )
}