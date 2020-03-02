import React from 'react';
import {BrowserRouter, Route, Switch, Link, useParams} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>User</Link></li>
        </ul>
      </nav>

      <main>
        <Route path='/'><Home /></Route>
        <Route path='/users'><Users /></Route>
        <Route path='/detail/:name'><DetailUser /></Route>
      </main>
    </div>
  </BrowserRouter>
  );
}

function Home(){
  return (  
    <h2>Home Page</h2>
  )
}

function Users(){
  return (
    <div>
      <h2>User Page</h2>
      <Link to='/detail/:Muhammad'>Muhammad</Link><br></br>
      <Link to='/detail/:reza'>Reza</Link><br></br>
      <Link to='/detail/:vahlevi'>Vahlevi</Link>
    </div>
    )
}

function DetailUser(){
  let {name} = useParams();

  return <h2>Halaman {name} </h2>
}

export default App;
