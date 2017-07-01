import React from 'react';
import { NavLink } from 'react-router-dom';

const Examples = (props)=>
	(
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are few exaple locations</p>
			<ol>
				<li><NavLink exact to="/?location=Concepcion" >Concepcion</NavLink></li>
				<li><NavLink exact to="/?location=Rio" >Rio</NavLink></li>
			</ol>
		</div>
	);

module.exports = Examples;