import React from 'react';

class About extends React.Component {
   render(props) {
      return (
          <div className="col-md-8">
			<div><h1>{this.props.route.page}</h1>
			<div className="content">
					Build encapsulated components that manage their own state, then compose them to make complex UIs.
                        Since component logic is written in JavaScript instead of templates,
                        you can easily pass rich data through your app and keep state out of the DOM.
                        React makes it painless to create interactive UIs.

                        Design simple views for each state in your application, and React will efficiently update and render
                        just the right components when your data changes.

                        Declarative views make your code more predictable and easier to debug.
                        An Application Using props and state, we can put together a small Todo application.
                        This example uses state to track the current list of items as well as the text that the user has entered.
                        Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.

                        Build encapsulated components that manage their own state, then compose them to make complex UIs.
                        Since component logic is written in JavaScript instead of templates,
                        you can easily pass rich data through your app and keep state out of the DOM.
                        React makes it painless to create interactive UIs.

                        Design simple views for each state in your application, and React will efficiently update and render
                        just the right components when your data changes.

                        Declarative views make your code more predictable and easier to debug.
                        An Application Using props and state, we can put together a small Todo application.
                        This example uses state to track the current list of items as well as the text that the user has entered.
                        Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation;
				</div>
			</div>
            </div>
      );
   }
}
export default About;
