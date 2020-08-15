import React from 'react';
import { func } from 'prop-types';
import SideBar from './sideBar';
import Content from './content';
import './styles.css';

// function Library(prop) {
// 	return (<div>Finally {prop.title} Library started</div>);
// }

class Library extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			key: undefined,
			results: {
				title: undefined
			}
		}
	}
	onSubClick = (e) => {
		console.log("here", e);
	}
	// this.onSearck = (e) => {

	// }
	render() {
		return (
			<div>
				<div className="sidebar">
					<div className="mainLogo">
						<div className="logo"></div>
					</div>
					<div className="sideMenu"></div>
				</div>
				<div className="body">
					<SideBar></SideBar>
					<Content></Content>
				</div>
			</div>

		);
	}
}

export default Library;