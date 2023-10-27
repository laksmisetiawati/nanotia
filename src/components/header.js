import React, { Component } from 'react';

class Header extends Component {
   render() {
      return (
         <header className="primary-header">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src={ require('./../assets/images/logo.png') } style={{ width:'100%' }}></img>
                    </div>
                    <div className="col-6"></div>
                </div>
            </div>
         </header>
      );
   }
}

export default Header;