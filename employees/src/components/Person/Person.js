import React from 'react';
import { Link } from 'react-router-dom';
import './Person.css';
import back from '../../img/back.png';
import email from '../../img/at.png';
import date from '../../img/date.png';
import work from '../../img/work.png';
import door from '../../img/door.png';
import phone from '../../img/phone.png';
import mobPhone from '../../img/mobile-phone.png';
import skype from '../../img/skype.png';
import cNumber from '../../img/id.png';
import thunderbolt from '../../img/thunderbolt.png';
import user from '../../img/user.png';
import personJSON from '../../person.json';
import Header from '../Header/Header';

export default function Person(props) {
  const person = personJSON[0];
  const logInStatus = localStorage.getItem('logInStatus');

  function editInfo(e) {
    const inputs = document.querySelectorAll('input');
    const editButtonTop = document.querySelector('.editInfoButtonTop'), 
          editButtonBot = document.querySelector('.editInfoButtonBot');
    if(e.target.innerText === 'EDIT DETAILS') {
      Array.from(inputs).forEach(input => {
        if(input.parentNode.href) {
          input.parentNode.setAttribute('onclick', 'return false;');
          input.classList.add('activeInputA');
        }
        input.removeAttribute('readonly');
        input.value = input.placeholder;
      });
      editButtonTop.innerText =('CONFIRM');
      editButtonBot.innerText = 'CONFIRM';
    } else if(e.target.innerText === 'CONFIRM') {
        Array.from(inputs).forEach(input => {
          if(input.parentNode.id === 'personEmail') {
            input.parentNode.removeAttribute('onclick');
            input.parentNode.setAttribute('href', `mailto:${input.value}`);
            input.classList.remove('activeInputA');
          }
          if(input.parentNode.id === 'personSkype') {
            input.parentNode.removeAttribute('onclick');
            input.parentNode.setAttribute('href', `skype:${input.value}`);
            input.classList.remove('activeInputA');
          }
          input.setAttribute('readonly', 'readonly');
          input.placeholder = input.value;
        });
        editButtonTop.innerText = 'EDIT DETAILS';
        editButtonBot.innerText = 'EDIT DETAILS';
    }
  }

  function EditBlock() {
    if(logInStatus !== 'user') {
      return (
        <div className="editInfoContainer">
          <div>
            <div className="editInfoButtonTop" onClick={(e) =>  editInfo(e)}>EDIT DETAILS</div>
          </div>
          <div>
            <div className="editInfoButtonBot" onClick={(e) => editInfo(e)}>EDIT DETAILS</div>
          </div>
        </div>
      )
    }
    else return (
      <></>
    )
  }
  return (
    <>
      <Header 
        pageListStyle={{ mainPage: 'nonActivePage', settingsPage: 'nonActivePage' }}
      />
      <main>
        <div className="personPageContainer">
          <div className="photoNameContainer">
            <div className="backButton">
              <Link to="/main"><img id="backToMain" src={back} alt="back"></img></Link>
            </div>
            <div className="photoName">
              <img id="personImg" src={user} alt="user"></img>
              <p>&#8212; Mr &#8212;</p>
              <p className="nameEn">{person.nameEn}</p>
              <p className="nameRu">{person.nameRu}</p>
              <div>
                <div id="id">ID {person.id}</div>
                <div id="businessCard">{person.businessCard}</div>
              </div>
            </div>
          </div>
          <div className="personPageInfo">
            <div className="infoBlock">
              <div className="itemTittle">GENERAL INFO</div>
              <div className="infoRow">
                <div className="firstCol"><img src={work} alt="work"></img>Department</div>
                <input type='text' placeholder={person.department} readOnly></input>
              </div>
              <div className="infoRow">
                <div className="firstCol"><img src={door} alt="door"></img>Room</div>
                <input type='text' placeholder={person.room} readOnly></input>
              </div>
            </div>
            <div className="infoBlock">
              <div className="itemTittle">CONTACTS</div>
              <div className="infoRow">
                <div className="firstCol"><img src={phone} alt="phone"></img>Intemal Phone</div>
                <input type='text' placeholder={person.intemalPhone} readOnly></input>
              </div>
              <div className="infoRow">
                <div className="firstCol"><img src={mobPhone} alt="mobile phone"></img>Mobile phone</div>
                <input type='text' placeholder={person.mobilePhone} readOnly></input>
              </div>
              <div className="infoRow">
                <div className="firstCol"><img src={email} alt="email"></img>Email</div>
                <div><a href={"mailto:" + person.email} id="personEmail">
                  <input type='text' placeholder={person.email} readOnly></input>
                  </a></div>
              </div>
              <div className="infoRow">
                <div className="firstCol"><img src={skype} alt="skype"></img>Skype ID</div>
                <div><a href={"skype:" + person.skype} id="personSkype">
                  <input type='text' placeholder={person.skype} readOnly></input>
                  </a></div>
              </div>
              <div className="infoRow">
                <div className="firstCol"><img src={cNumber} alt="id"></img>C-number</div>
                <input type='text' placeholder={person.cNumber} readOnly></input>
              </div> 
            </div>
            <div className="infoBlock">
              <div className="itemTittle">PROFILE INFO</div>
              <div className="infoRow">
                <div className="firstCol"><img src={date} alt="date"></img>Hire date</div>
                <input type='text' placeholder={person.hireDate} readOnly></input>
              </div>
              <div className="infoRow">
                <div className="firstCol"><img src={thunderbolt} alt="thunderbolt"></img>Status</div>
                <input type='text' placeholder={person.status} readOnly></input>
              </div>
            </div>
          </div>
          <EditBlock />
        </div>
      </main>
    </> 
  )
}