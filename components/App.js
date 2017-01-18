import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
   render(props) {
      return (
			<div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">React App</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">

                    {this.props.children}
                </div>
            </div>
      );
   }


}

export default App;
