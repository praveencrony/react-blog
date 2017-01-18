import React from 'react';

class Contact extends React.Component {
   render(props) {
      return (
            <div><h1>{this.props.route.page}</h1>
			<div className="content">
					Contact Page
				</div>
			</div>
      );
   }


}

export default Contact;
