import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewEntryPage from './newEntryPage/newEntryPage';

class App extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			// for now the app just renders the homepage body but later
			// we'll add logic to determine which page should be loaded i think
			// navbar will also go here
			<NewEntryPage/>
		);
	}
}

export default App;