import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const DonationForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [donationAmount, setDonationAmount] = useState('');
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet; need to disable form submission until Stripe.js has loaded
          return;
        }
    
        const cardElement = elements.getElement(CardElement);
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        });
    
        if (error) {
          console.log('[error]', error);
        } else {
          console.log('[PaymentMethod]', paymentMethod);
          // Send the paymentMethod.id to your server to create a payment intent
          handlePayment(paymentMethod.id, donationAmount);
        }
      };
    
      const handlePayment = async (paymentMethodId, amount) => {
        try {
          const response = await fetch('/donate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ paymentMethodId, amount }),
          });
          const paymentIntent = await response.json();
          if (paymentIntent.error) {
            console.log('Payment error:', paymentIntent.error);
          } else {
            console.log('Payment successful:', paymentIntent);
            // Clear the form and show a success message
            setDonationAmount('');
          }
        } catch (error) {
          console.error('Payment error:', error);
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="donationAmount">Donation Amount:</label>
          <input
            type="number"
            id="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
          />
          <CardElement />
          <button type="submit" disabled={!stripe}>
            Donate
          </button>
        </form>
      );
    };

  export default DonationForm;