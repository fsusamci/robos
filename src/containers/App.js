import React from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import {robots} from '../robots';
import './App.css'

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: '',
			checkBox: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));
	}

	// Detect when user types or checks
	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value});
	}

	onBoxChecked = (event) => {
		this.setState({checkBox: event.target.value});
	}

	render(){
		const {robots, searchfield, checkBox} = this.state;

		// Filter robots by checkbox and searchbox
		const filteredRobots = robots.filter(robot => {
			if(checkBox == "email"){
				return robot.email.toLowerCase().includes(searchfield.toLowerCase());
			}else if (checkBox == "username") {
				return robot.username.toLowerCase().includes(searchfield.toLowerCase());
			}else{
				return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			}
			
		});

		return !robots.length ?
			<h1 className="tc">Loading...</h1> :
			(
			<div className="tc">
				<h1 className="f2">Robofriends</h1>
				<Searchbox searchChange={this.onSearchChange} boxChecked={this.onBoxChecked}/>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
			);
		
	}
			
}

export default App;