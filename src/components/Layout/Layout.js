import React, {Component} from 'react';
import Wrap from '../../hoc/Wrap'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

	state = {
		showSideDrawer: true
	};

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false})
	};

	render () {
		return (
			<Wrap>
				<Toolbar/>
				<SideDrawer closed = {this.sideDrawerClosedHandler} open = {this.state.showSideDrawer}/>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Wrap>
		)
	}
};

export default Layout;