import React from 'react';

class Home extends React.Component {

     constructor(props){

        super(props);

        this.state = {

            content: ''
        };
    }

    componentWillMount(){
        // Static data
        const data = `Build encapsulated components that manage their own state, then compose them to make complex UIs.
                        Since component logic is written in JavaScript instead of templates,
                        you can easily pass rich data through your app and keep state out of the DOM.`;
        // Update state
        this.setState({content: data});
    }

   render(props) {
      return (
            <div><h1>{this.props.route.page}</h1>
			<div className="content">
					{this.state.content}
				</div>
			</div>
      );
   }


}
export default Home;
