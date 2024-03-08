import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import DonationForm from './DonationForm';

const stripePromise = loadStripe(pk_test_51OrsCMHiPcL6rzSyxeBOkMM8uBSH1OYDboOpESNDd504L2gB1VBaHw3yMJ9nEQmX9NZuOQLhJnkXNN3s5WbMWo5p007WtoYLOd);

const StripeContainer = () => {
    return (
      <Elements stripe={stripePromise}>
        <DonationForm />
      </Elements>
    );
  };

  export default StripeContainer;