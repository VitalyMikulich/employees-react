import React from 'react';
import { Link } from 'react-router-dom';
import './PersonSettings.css';
import user from '../../img/user.png';

export default function PersonSettings(props) {
  let style; 
  if (props.index % 2 === 0) {
    style = 'greyBC';
  }

  function toggleClass(event) {
    if(event.target.parentNode.classList.contains('vacationRole')) {
      Array.from(event.target.parentNode.children).forEach(child => {
        child.classList.remove('active');
        child.classList.add('disabled');
      })
      event.target.classList.add('active');
      event.target.classList.remove('disabled');
    } else {
        Array.from(event.target.parentNode.children).forEach(child => {
          child.classList.toggle('active');
          child.classList.toggle('disabled');
        })
    }
  }

  function AddressBookRole() {
    if(props.person.role !== 'user') {
      return (
        <div className='addressBookRole'>
          <div className='disabled' onClick={(e) => 
            toggleClass(e)  
          }>EMPLOYEE</div>
          <div className='active' onClick={(e) => 
            toggleClass(e)  
          }>HR</div>
        </div>
      )
    } else return (
      <div className='addressBookRole'>
        <div className='active' onClick={(e) => 
            toggleClass(e)  
          }>EMPLOYEE</div>
        <div className='disabled' onClick={(e) => 
            toggleClass(e)  
          }>HR</div>
      </div>
    )
  }

  function Admin() {
    if(props.person.role === 'admin') {
      return (
        <div className='admin'>
          <div className='active' onClick={(e) => 
            toggleClass(e)  
          }>ADMIN</div>
        </div>
      )
    } else return (
      <div className='admin'>
        <div className='disabled' onClick={(e) => 
            toggleClass(e)  
          }>ADMIN</div>
      </div>
    )
  }

  return (
    <div className={'personSettings ' + style}>
      <Link to='/person'>
      <div className='imgNameContainer'>
        <img src={user} alt='person'></img>
        <div className='name'>
          <div>{props.person.nameEn}/</div>
          <div>{props.person.nameRu}</div>
        </div>
      </div>
      </Link>
      <AddressBookRole />
      <div className='vacationRole'>
        <div className='active' onClick={(e) => 
            toggleClass(e)  
          }>EMPLOYEE</div>
        <div className='disabled' onClick={(e) => 
            toggleClass(e)  
          }>PO</div>
        <div className='disabled' onClick={(e) => 
            toggleClass(e)  
          }>DD</div>
      </div>
      <Admin />
    </div>
  )
}