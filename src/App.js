// packages etc
import React from 'react';
import { ContextProvider } from './context.js';
import ContextConsumer from './context.js';
import { Route, Switch, Redirect } from 'react-router-dom';

// components
import Ribbon from './ribbon.js';
import Nav from './nav.js';
import NewEntryPage from './newEntryPage/newEntryPage.js';
import SingleEntryPage from './singleEntryPage/singleEntryPage.js';
import HomePage from './homepage/homepage.js';
import LoginPage from './auth/login/loginPage.js';
import CreateAccountPage from './auth/createAccountPage/createAccountPage.js';
import EditPage from './editPage/editPage.js';
import CalendarPage from './calendarPage/calendarPage.js';
import AddFriendPage from './addFriendPage/addFriendPage.js';

// style
import './universalStyle.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true
		}
	}

	createRoutes() {
		return(
			<Switch>
				<Route exact path="/homepage">
					{this.restrictProtected(<HomePage/>)}
				</Route>
				<Route exact path="/newEntryPage">
					{this.restrictProtected(<NewEntryPage/>)}
				</Route>
				<Route exact path="/post/:id" component={SingleEntryPage}/>
				<Route exact path="/post/edit/:id" component={EditPage}/>
				<Route exact path="/calendarPage">
					{this.restrictProtected(<CalendarPage/>)}
				</Route>
				<Route exact path="/addFriendPage">
					{this.restrictProtected(<AddFriendPage resultsVisible={false}/>)}
				</Route>
			</Switch>
		);
	}

	// redirects if not logged in
	restrictProtected = (component) => {
		if (this.state.isLoggedIn === true) {
			return (component);
		} else {
			return (
				<Redirect to={{
					pathname: '/'
				}}/>
			);
		}
	}

	render() {
		let routes = this.createRoutes();
		
		return (
			<Switch>
				<Route exact path="/">
					<ContextProvider>
						<ContextConsumer>
							{(value) => (
								<LoginPage setUser={value.setUser}/>
							)}
						</ContextConsumer>
					</ContextProvider>
				</Route>
				<Route exact path="/createAccount">
					<ContextProvider>
						<ContextConsumer>
							{(value) => (
								<CreateAccountPage setUser={value.setUser}/>
							)}
						</ContextConsumer>
					</ContextProvider>
				</Route>
				<Route>
					<ContextProvider>
						<div>
							<Nav/>
							<Ribbon/>
							<div className="page-body">
								{routes}
							</div>
						</div>
					</ContextProvider>
				</Route>
			</Switch>
		);
	}
}

export default App;