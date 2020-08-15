import React from 'react'

    const Overview = ({ overView }) => {
      return (
        <div className="overviewBlock">
          {overView.map((contact, index) => (
			  <div key={contact.id} className={"overviewSubMain" + " overviewSubMain"+index}>
				<div className="overviewSubLogo">
					<div className="subLogoImg"></div>
				</div>
				<div className="overviewSubData">
					<div className="value">
						<div className="properValue">{contact.line1}</div>
					</div>
					<div className="title">{contact.title}</div>
				</div>
			  </div>
          ))}
        </div>
      )
    };

    export default Overview