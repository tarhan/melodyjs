import React, { PureComponent } from 'react';
import LoginComponent from './LoginComponent';
import NavBar from '../NavBar/NavBarComponent';
import Footer from '../NavBar/FooterComponent';

export default class LoginPage extends PureComponent {
	render() {
		return (
			<div className="LoginPage">
				<NavBar />
				<div className="logincontainer">
					<LoginComponent onSubmit={() => {}} />
				</div>
				<Footer />
			</div>
		);
	}
}
