import React from 'react';

class Header extends React.Component {
   render(props) {

       const animationStyle = {
           marginTop:'30%'
        };
        const logoStyle = {
           width:'300px'
        };
      return (
			<div>
    <div className="row">
            <div className="col-md-12 pad0">
                <div className="col-md-4">
                <img src="images/logo.png" style={logoStyle}/>
                </div>
            <div className="col-md-8 ad cus3">
                <h3 className="text-center cus4">Adsence 600 * 100 Ad here</h3>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-12 cus5">
            <div className="baloon cus6">
                <p style={animationStyle}>M</p>
            </div>
            <div className="baloon cus7">
            <p style={animationStyle}>E</p>
            </div>
            <div className="baloon cus8">
            <p style={animationStyle}>R</p>
            </div>
            <div className="baloon cus9">
            <p style={animationStyle}>N</p>
            </div>
        </div>
    </div></div>
      );
   }
}
export default Header;
