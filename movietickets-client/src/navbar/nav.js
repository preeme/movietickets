import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './nav.css';

class Nav extends PureComponent {
  render() {
    const { cartTotal } = this.props;
    return (
      <div>
        <nav className="flex-nav">
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="right">
              <NavLink exact to="/checkout">
                Cart: {cartTotal}
              </NavLink>
            </li>
            <li className="right">
              <NavLink exact to="/signin">
                Log In/Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartTotal: state.movies.cartTotal,
});

export default connect(mapStateToProps)(Nav);
