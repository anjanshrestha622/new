import React, { Component } from 'react';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-light "style={{backgroundColor:'blue'}}>
                 <a className="navbar-brand mx-auto" href="#" style={{color:'white'}}>{this.props.title}</a>
                </nav>
            </div>
         );
    }
}
 
export default Navbar;