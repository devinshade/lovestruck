import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const DonationForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  };

