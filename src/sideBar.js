import React from 'react';

class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sideBarState: true
		}
	}

	render() {
		return (
			<div className="navBar">
				<div className="userSettings">
					<div className="userMain">
						<div className="user">
							<div className="userName">Cody Simmons</div>
							<div className="designation">Lecturer</div>
						</div>
						<div className="userAvatar"></div>
						<div className="userMore"></div>
					</div>
				</div>
			</div>
		);
	}
}
export default SideBar;