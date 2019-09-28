import React, { Component } from 'react';
import styles from './CheckoutForm.module.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StripeCheckout from 'react-stripe-checkout';

class CheckoutForm extends Component {
  state = {
    error: {},
    loading: false,
    success: false
  };

  render() {
    const { error, loading } = this.state;
    const { total, onSuccess } = this.props;
    const amount = total * 100;
    // render success
    // render errors if any
    if (Object.keys(error).length) {
      let { message, code } = error;
      let cardHelp;
      if (code === 'incomplete_number' || code === 'invalid_number') {
        cardHelp = (
          <div>
            Use <strong>4242 4242 4242 4242</strong> for dummie card number.
          </div>
        );
      }
      // show errors render
      return (
        <div className={styles.CheckoutForm} style={{ marginBottom: '15px' }}>
          <div style={{ color: 'red' }}>{message}</div>
          {cardHelp ? cardHelp : null}
          <button
            style={{ backgroundColor: '#ccbc53' }}
            onClick={() => this.setState({ error: {} })}
          >
            Try again
          </button>
        </div>
      );
    }
    // main component render
    return (
      <StripeCheckout
        token={onSuccess}
        stripeKey="pk_test_ISm2ExeGCOVKScWl1rmNU1KT00cz3zAHZo"
        name="Burger Builder Ltd."
        amount={amount}
      />
    );
  }
}

export default CheckoutForm;
