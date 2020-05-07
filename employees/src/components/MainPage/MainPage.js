import React, { useState } from 'react';
import './MainPage.css';
import Display from '../Display/Display';
import listIcon from '../../img/list.png';
import tileIcon from '../../img/tile.png';
import peopleJSON from '../../people.json';
import Header from '../Header/Header';
import { store } from '../../redux/store';
import { displayStyle } from '../../redux/action';

export default function MainPage() {
  const state = store.getState();
  let iconStyle = state.displayStyle.display;
  let tileIconStyle = state.displayStyle.tile;
  let listIconStyle = state.displayStyle.list;
  let [display, setDisplay] = useState(iconStyle);
  let tile = tileIconStyle;
  let list = listIconStyle;
  let [people, setPeople] = useState(peopleJSON);
  let [count, setCount] = useState(people.length);
  let [tileStyle, setTileStyle] = useState(tile);
  let [listStyle, setListStyle] = useState(list);

  function setIconStyle(display, tile, list) {
    store.dispatch(displayStyle(display, tile, list));
    localStorage.setItem('tile', tile);
    localStorage.setItem('list', list);
    setTileStyle(tile);
    setListStyle(list);
  }

  function toggleDisplayIconStyle(display) {
    if(display === 'tile') {
      setIconStyle(display, 'activeDisplayIcon', '');
    }
    if(display === 'list') {
      setIconStyle(display, '', 'activeDisplayIcon');
    }
  }

  function toggleDisplay(display) {
    setDisplay(display);
    localStorage.setItem('display', display);
    toggleDisplayIconStyle(display);
  }

  function search() {
    let tempPeople;
    const searchInput = document.querySelector('#searchMainPage');
    const searchText = searchInput.value;
    if(searchText === '') {
      setPeople(tempPeople = peopleJSON);
      setCount(tempPeople.length);
    } else {
      setPeople(tempPeople = peopleJSON.filter((person) => person.nameEn.toLowerCase().includes(searchText.toLowerCase()) || person.nameRu.toLowerCase().includes(searchText.toLowerCase())));
      setCount(tempPeople.length);
    }
  }
  
  return (
    <>
      <Header 
        pageListStyle={{ mainPage: 'activePage', settingsPage: 'nonActivePage' }}
      />
      <main>
        <div className="searchContainer">
          <div className="typesOfSearchContainer">
            <div className="basicSearch">BASIC SEARCH</div>
            <div className="advancedSearch">ADVANCED SEARCH</div>
          </div>
          <div className="searchBlock">
            <input type="text" name="Search" id="searchMainPage" className="searchInput" placeholder="John Smith / Джон Смит"></input>
            <div className="searchButton" onClick={() => search()}>SEARCH</div>
          </div>
        </div>
        <div className="employees">
          <div className="info">
            <div className="countOfPeople">{count} employees displayed</div>
            <div className="display">
              <img
                className={tileStyle}
                src={tileIcon} 
                alt="tile" 
                id="tileDisplay" 
                onClick={() => toggleDisplay('tile')}>
              </img>
              <img
                className={listStyle}
                src={listIcon} 
                alt="list" 
                id="listDisplay" 
                onClick={() => toggleDisplay('list')}>
              </img>
            </div>
          </div>
          <Display
            display={display}
            people={people}
          />
        </div>
      </main>
    </>
  )
};