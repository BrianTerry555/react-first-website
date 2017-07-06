import React from "react";

class CustomNavbar extends React.Component {
  render() {
    let navlinks = this.props.links.map((item) => {
      return (
        <li>
          <a href={item.link}>{item.text}</a>
        </li>
      )
    });
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">{this.props.brand}</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            {navlinks}
          </ul>
        </div>
      </nav>
    )
  }
}

export default CustomNavbar;
