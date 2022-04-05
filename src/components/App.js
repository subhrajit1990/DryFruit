import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';


export default class App extends React.Component{
	render(){
		return(
			<>
				<Header />
				<Home />
				<Footer />
			</>
		);
	}
}