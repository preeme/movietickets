import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CardElement, Elements, injectStripe } from 'react-stripe-elements';
import styled from 'styled-components';

class _CardForm extends PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" id="name" name="name" />
        <input type="text" placeholder="Address" id="address" name="address" />
        <input type="text" placeholder="City" id="city" name="city" />
        <input type="text" placeholder="State" id="state" name="state" />
        <input type="text" placeholder="Zip" id="zip" name="zip" />
        <CardElement />
        <button>Pay</button>
      </form>
    );
  }
}
const CardForm = injectStripe(_CardForm);

class Checkout extends PureComponent {
  render() {
    const { cartTotal } = this.props;
    return (
      <CheckoutStyle>
        <h1>Checkout</h1>
        <CardStyle>
          <p>Total: ${cartTotal}</p>
          <Elements>
            <CardForm />
          </Elements>
        </CardStyle>
      </CheckoutStyle>
    );
  }
}
const mapStateToProps = state => ({
  cartTotal: state.movies.cartTotal,
});

export default connect(mapStateToProps)(Checkout);

const CheckoutStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  margin: 0 auto;
  max-width: 800px;
  box-sizing: border-box;
  padding: 0 5px;
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
    text-decoration: none;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
    margin-top: 10px;
  }
  button:hover {
    color: #fff;
    cursor: pointer;
    background-color: #7795f8;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
  .StripeElement {
    display: block;
    margin: 10px 0 20px 0;
    max-width: 500px;
    padding: 10px 14px;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border-radius: 4px;
    background: white;
  }
  .StripeElement--focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px, rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
  }
  input {
    display: block;
    margin: 10px 0 20px 0;
    max-width: 500px;
    padding: 10px 14px;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border-radius: 4px;
    background: white;
  }
`;

const CardStyle = styled.div``;
