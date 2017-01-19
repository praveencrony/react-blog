import React from 'react';

class Sidebar extends React.Component {
   render(props) {

      return (
        <div className="col-md-4">
            <div className="row">
                <div className="col-md-12 tags">
                    <span className="label label-default">Angular</span>
                    <span className="label label-primary">Node</span>
                    <span className="label label-success">Mysql</span>
                    <span className="label label-info">Bootstrap</span>
                    <span className="label label-warning">Bluebird</span>
                    <span className="label label-danger">Grunt</span>
                    <span className="label label-info">Promises</span>
                    <span className="label label-warning">ES6</span>
                    <span className="label label-danger">React</span>
                    <span className="label label-default">$digest</span>
                    <span className="label label-primary">$watch</span>
                    <span className="label label-success">$rootscope</span>
                    <span className="label label-info">$factory</span>
                </div>
            </div>
        </div>
      );
   }
}
export default Sidebar;
