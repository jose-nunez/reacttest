import React from 'react';
import { NavLink } from 'react-router-dom';

const Examples = (props)=>
	(
		<div>
			<h2 className="text-center page-title">Examples</h2>
			<p>Here are few exaple locations</p>
			<ol>
				<li><NavLink exact to="/?location=Concepcion" >Concepcion</NavLink></li>
				<li><NavLink exact to="/?location=Rio" >Rio</NavLink></li>
			</ol>
		</div>
	);

module.exports = Examples;