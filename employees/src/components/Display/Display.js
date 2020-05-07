import React from 'react';
import PersonTile from '../PersonTile/PersonTile';
import PersonList from '../PersonList/PersonList';
import door from '../../img/door.png';
import empty from '../../img/empty.png';
import work from '../../img/work.png';
import person from '../../img/person.png';

export default function Display(props) {
    if(props.display === 'tile') {
      const display = props.people.map((person, index) => 
        <PersonTile person={person} key={"person" + index}/>
      )
      return (
        <div className="peopleContainerTile">{display}</div>
      )
    }

    if(props.display === 'list') {
      const display = props.people.map((person, index) => 
        <PersonList person={person} key={"person" + index}/>
      )
      return (
        <>
          <div className="peopleContainerTile">
            <div className="infoList">
              <div className="photo">
                <img className="infoImg" src={empty} alt="personPhoto"></img>
                Photo
              </div>
              <div className="name">
                <img className="infoImg" src={person} alt="person"></img>
                Name
              </div>
              <div className="work">
                <img className="infoImg" src={work} alt="work"></img>
                Department
              </div>
              <div className="door">
                <img className="infoImg" src={door} alt="door"></img>
                Room
              </div>
            </div>
          </div>
          <div className="peopleList">{display}</div>
        </>
      )
    }

    return (<>loading...</>)
}
