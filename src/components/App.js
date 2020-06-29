import React from 'react';
import SearchStories from './SearchStories';
import Stories from './Stories';
import './App.css';

const App = () => (
	<div>
		<div className="app">
			<SearchStories />
		</div>
		<Stories />
	</div>
);

export default App;