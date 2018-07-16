import React from 'react';
import Wrap from '../../hoc/Wrap'

const layout =(props) => (
	<Wrap>
		<div>Toolbar,SideDrawer, Blackdrop</div>
		<main>
			{props.children}
		</main>
	</Wrap>
);

export default layout;