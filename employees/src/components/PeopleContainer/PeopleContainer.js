import React from 'react';
import PersonSettings from '../PersonSettings/PersonSettings';

export default function PeopleContainer(props) {
  const display = props.people.map((person, index) => 
    <PersonSettings person={person} index={index} key={'person' + index}/>
  );
  return (
    <div className="peopleContainer">
      {display}
    </div>
  )
}