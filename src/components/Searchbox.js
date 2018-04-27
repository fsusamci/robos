import React from 'react';

const Searchbox = ({searchField, searchChange, boxChecked}) => {
	return(
			<div className="pa2">
				<input 
				type='search' 
				placeholder='search robots' 
				onChange={searchChange}
				/>
				<div className="tc pa2 ma2">
					<h2 className="searchBy">Search by</h2>
					<input id="name" type="checkbox" value="name" onClick={boxChecked}/>
					<label htmlFor="name">Name</label>
					<input id="email" type="checkbox" value="email" onClick={boxChecked}/>
					<label htmlFor="email">Email</label>
					<input id="username" type="checkbox" value="username" onClick={boxChecked}/>
					<label htmlFor="username">Username</label>
				</div>
			</div>
		);
}

export default Searchbox;