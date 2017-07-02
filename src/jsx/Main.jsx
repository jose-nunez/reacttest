import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Nav from 'Nav';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';


const Main = ()=>{
	return (
		<div>
			<Nav/>
			<h2>My React App</h2>
			<div className="grid-x" style={{justifyContent:'center'}}>
				<div className="medium-6 large-4 small-centered" >
					<Switch>
						<Route exact path='/' component={Weather}/>
						<Route path='/about' component={About}/>
						<Route path='/examples' component={Examples}/>
					</Switch>
				</div>
			</div>
		</div>
	)
};

// module.exports = Main;

export default Main;



/*
import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

const BasicExample = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/topics">Topics</Link></li>
			</ul>

			<hr/>

			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/topics" component={Topics}/>
		</div>
	</Router>
)

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)

const Topics = ({ match }) => (
	<div>
		<h2>Topics</h2>
		La puta url es: {match? match.url : 'nada por aca' }
		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>
					Rendering with React
				</Link>
			</li>
			<li>
				<Link to={`${match.url}/components`}>
					Components
				</Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>
					Props v. State
				</Link>
			</li>
		</ul>

		<Route path={`${match.url}/:topicId`} component={Topic}/>
		<Route exact path={match.url} render={() => (
			<h3>Please select a topic.</h3>
		)}/>
	</div>
)

const Topic = ({ match }) => (
	<div>
		<h3>{match.params.topicId}</h3>
	</div>
)


export default BasicExample

*/