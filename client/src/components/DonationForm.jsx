import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const DonationForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
  
      if (!error) {
        // Send the paymentMethod.id to your server (see step 3)
        console.log(paymentMethod);
        // Handle the payment confirmation and display a success message
      } else {
        // Handle errors
        console.log(error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Donate
        </button>
      </form>
    );
  };

