import React from 'react';
import CardList from './components/CardList';
import Searchbox from './Searchbox';
import {robots} from './robots';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value});
	}

	render(){
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		return(
			<div className="tc">
				<h1>Robofriends</h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots} />
			</div>
			);
	}
			
}

export default App;