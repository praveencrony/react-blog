import React from 'react';

class About extends React.Component {
   render(props) {
      return (
			<div><h1>{this.props.route.page}</h1>
			<div className="content">
					About Page
				</div>
			</div>
      );
   }
}
export default About;
