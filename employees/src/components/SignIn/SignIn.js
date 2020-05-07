import React from 'react';
import { useHistory } from 'react-router-dom';
import peopleJSON from '../../people.json';
import { login, displayStyle } from '../../redux/action';
import { store } from '../../redux/store';

export default function SignIn() {
  const history = useHistory();
  
  function logIn() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    peopleJSON.forEach(person => {
      if(person.username === username && person.password === password) {
        localStorage.setItem("logInStatus", person.role);
        localStorage.setItem("activeUser", person.nameEn);
        if(!localStorage.getItem("display")) {
          localStorage.setItem("display", "tile");
          localStorage.setItem('tile', 'activeDisplayIcon');
          localStorage.setItem('list', '');
        }
        store.dispatch(displayStyle(localStorage.getItem("display"), localStorage.getItem('tile'), localStorage.getItem('list')));
        store.dispatch(login(person.role, person.nameEn));
        history.push("/main");
      }
    })
  }

  function preventOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <table>
        <tr>
          <td>username </td>
          <td> password </td>
          <td>role</td>
        </tr>
        <tr>
          <td>DzmitryA </td>
          <td> 111 </td>
          <td> admin</td>
        </tr>
        <tr>
          <td>AlehZ </td>
          <td> 222 </td>
          <td> editor</td>
        </tr>
        <tr>
          <td>MaximP </td>
          <td> 333 </td>
          <td> user</td>
        </tr>
      </table>
      <form className="logInContainer" onSubmit={preventOnSubmit}>
          <div>
            <label htmlFor="username" className="labelLogin">Username</label>
            <input type="text" name="username" id="username" required></input>
          </div>
          <div>
            <label htmlFor="password" className="labelLogin">Password</label>
            <input type="password" name="password" id="password" required></input>
          </div>
          <input className="logInButton" type="submit" value="Sign In" onClick={logIn}></input>
      </form>
    </>
  )
}