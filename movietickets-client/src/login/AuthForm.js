import React, { Component } from 'react';
import styled from 'styled-components';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      address: '',
      homeState: '',
      zip: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password, name, address, homeState, zip } = this.state;
    return (
      <FormStyle>
        <div>
          <form onSubmit={this.handleSubmit}>
            <h2>Sign In</h2>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" onChange={this.handleChange} value={email} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={this.handleChange} />
          </form>
        </div>
      </FormStyle>
    );
  }
}

export default AuthForm;

const FormStyle = styled.div`
  color: white;
  display: flex;
  justify-content: center;
`;

const FormChild = styled.div``;
