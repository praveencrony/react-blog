import React from 'react';
import { Link } from 'react-router';

import Header from './Header.js';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';

class App extends React.Component {
   render(props) {
      return (
          <div>
            <Header/>
            <div className="row">
                <div className="col-md-12 pad0">
                    <nav className="navbar navbar-default cus12">
                        <div className="container">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/" activeClassName="active">Home</Link></li>
                                    <li><Link to="/about" activeClassName="active">About</Link></li>
                                    <li><Link to="/blog" activeClassName="active">Blog</Link></li>
                                    <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                                </ul>

                        </div>
                    </nav>
                </div>
            </div>

            <div className="row">
                <div>
                    {this.props.children}
                    <Sidebar/>
                </div>
            </div>
            <Footer/>
        </div>
      );
   }


}

export default App;
