import React from 'react';
import Wrap from '../../hoc/Wrap'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout =(props) => (
	<Wrap>
		<Toolbar/>
		<SideDrawer/>
		<main className={classes.Content}>
			{props.children}
		</main>
	</Wrap>
);

export default layout;