import React from "react";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import './nav.styles.scss';

class Nav extends React.Component {
  logOutHandler = () => {
    // localStorage.clear();
    console.log(this.props);
  };
  render() {
    return (
      <div className="nav-buttons-right"  style={{  }}>
        <Button variant="outline-dark" as={Link} to="/" >Portfolio</Button>
        <Button variant="outline-dark" as={Link} to="/Transactions" >Transactions</Button>
        <Button variant="outline-primary" as={Link} to="/login" onClick={()=>window.localStorage.clear()}>Log out</Button>
      </div>
    );
  }
}
export default Nav;
