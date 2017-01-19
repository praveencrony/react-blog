import React from 'react';

class Contact extends React.Component {
   render(props) {
      return (
            <div className="col-md-8">
            <div><h1>{this.props.route.page}</h1>
			<div className="content">
					Contact Page
				</div>
			</div>
            </div>
      );
   }


}

export default Contact;
