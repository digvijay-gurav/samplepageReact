import React from 'react';
import Overview from './overView';
import StudentDetails from './studentDetails';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sideBarState: true,
			error: null,
      		isLoaded: false,
			overView: [],
			studentDetails: [],  
		}
	}

	componentDidMount() {
		fetch('http://my-json-server.typicode.com/shripad-agashe/fake-api/dashboard')
		.then(res=>res.clone().json())
		.then((result) => {
			this.setState({
				isLoaded: true,
				overView: result
			});
			},
			(error) => {
			this.setState({
				isLoaded: true,
				error
			});
			}
		)
		fetch('http://my-json-server.typicode.com/shripad-agashe/fake-api/students')
		.then(res=>res.clone().json())
		.then((result) => {
			this.setState({
				studentDetails: result
			});
			},
			(error) => {
			this.setState({
				isLoaded: true,
				error
			});
			}
		)
	}

	render() {
		return (
			<div className="content">
				<div className="title">
					<div className="mainTitle"><h3>Dashboard</h3></div>
					<div className="subTitle"><h5>Mobile UX/UI Design course</h5></div>
				</div>
				<Overview overView={this.state.overView}></Overview>
				<StudentDetails studentDetails={this.state.studentDetails}></StudentDetails>
			</div>
		);
	}
}
export default Content;