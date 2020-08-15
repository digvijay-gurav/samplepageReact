import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { func } from 'prop-types';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
	//</div>
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>

			<Switch>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route exact path="/about">
					<About></About>
				</Route>
			</Switch>
		</div>
	</Router>
  );
}

function Home() {
	return(<div><h1>Home</h1></div>);
}

function About() {
	return(<div><h1>About</h1></div>)
}

export default App;
