import React from 'react';
import { Link } from 'react-router-dom';
import './PersonList.css';
import user from '../../img/user.png';

export default function PersonList(props) {
  return (
    <Link to='/person'>
      <div className="personList">
        <div className="imgNameList">
          <img src={user} alt="person"></img>
          <div className="name">
            <p className="nameEnList">{props.person.nameEn}</p>
            <p className="nameRuList">{props.person.nameRu}</p>
          </div>
        </div>
        <div>{props.person.position}</div>
        <div>{props.person.cabinet}</div>
      </div>
    </Link>
  )
}