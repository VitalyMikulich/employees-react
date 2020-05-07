import React, { useState } from 'react';
import './SettingsPage.css';
import peopleJSON from '../../people.json';
import PeopleContainer from '../PeopleContainer/PeopleContainer';
import Header from '../Header/Header';

export default function SettingsPage() {
  let [people, setPeople] = useState(peopleJSON);
  function search() {
    const searchInput = document.querySelector('#searchSettingsPage');
    const searchText = searchInput.value;
    if(searchText === '') {
      setPeople(peopleJSON);
    } else {
      setPeople(peopleJSON.filter((person) => person.nameEn.toLowerCase().includes(searchText.toLowerCase()) || person.nameRu.toLowerCase().includes(searchText.toLowerCase())));
    }
  }

  return (
    <>
      <Header 
        pageListStyle={{ mainPage: 'nonActivePage', settingsPage: 'activePage' }}
      />
      <main>
        <div className="settingsPageContainer">
          <div className="roles">ROLES & PERMISSIONS</div>
          <div className="searchContainer">
            <input type="text" name="search" id="searchSettingsPage" placeholder="Type to search" onInput={() => search()}></input>
            <div>Address book role</div>
            <div>Vacation role</div>
            <div>Admin</div>
          </div>
          <PeopleContainer people={people}/>
        </div>
      </main>
    </>
  )
}