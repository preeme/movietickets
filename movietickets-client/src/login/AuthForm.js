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
            <button>Login</button>
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
  input {
    display: block;
    margin: 10px 0 20px 0;
    max-width: 500px;
    padding: 10px 14px;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border-radius: 4px;
    background: white;
  }
  button {
    white-space: nowrap;
    border: 0;
    outline: 0;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    color: #fff;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    background-color: #6772e5;
  }
`;

const FormChild = styled.div``;
