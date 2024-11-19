import React from 'react';
import CounterMain from './assets/getstarted/CounterMain';
import HelloWorldMain from './assets/componentsjsx/HelloWorldMain';
import './App.css';
import DadJokesMain from './assets/props/DadJokesMain';
const App = () => {
	return (
		<div className='App'>
			{/* <CounterMain /> */}
			{/* <HelloWorldMain /> */}
			<h1 className='text-red-500  '>Hello world!</h1>
			<DadJokesMain />
		</div>
	);
};

export default App;
