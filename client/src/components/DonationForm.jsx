import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const DonationForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [donationAmount, setDonationAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || !donationAmount || donationAmount <= 0) {
      // Add validation for donationAmount
      setMessage('Please enter a valid donation amount.');
      return;
    }

    setLoading(true);
    setMessage('');

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setMessage(error.message);
      setLoading(false);
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
        setMessage(paymentIntent.error);
      } else {
        console.log('Payment successful:', paymentIntent);
        setMessage('Thank you for your donation!');
        setDonationAmount('');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
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
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Donate'}
      </button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default DonationForm;