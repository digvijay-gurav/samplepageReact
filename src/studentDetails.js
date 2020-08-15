import React from 'react'

const StudentDetails = ({ studentDetails }) => {
	return (
		<div className="studentDetailsMain">
			{studentDetails.map((contact, index) => (
				<div key={contact.id} className={"studentsMainRow" + " studentsMainRow" + index}>
					<div className="studentsInfo">
						<div className="studentAvatar">
							<div className="studentAvatarImg"></div>
						</div>
						<div className="studentName">{contact.name}</div>
					</div>
					<div className="studentsMarks">{contact.marks}</div>
				</div>
			))}
		</div>
	)
};

export default StudentDetails