import React from 'react';

const About = ({match})=>(
	<div>
		<h2 className="text-center page-title">It's 40° in Sydney</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida ante sapien, vitae rutrum ante blandit sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas a viverra mi, non tempus eros. Fusce bibendum magna sit amet luctus eleifend. Nulla sit amet augue at sapien dictum sollicitudin. Etiam gravida auctor iaculis. Cras faucibus augue ante, ut mattis mi facilisis quis.</p>
		<ul>
			<li><a href="http://josenunez.org" target="_blank">Mi paginilla</a></li>
		</ul>
	</div>
);

module.exports = About;