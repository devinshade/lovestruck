import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import DonationForm from './DonationForm';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');