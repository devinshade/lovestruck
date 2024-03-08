const express = require('express');
const path = require('path');
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/')))
}

app.post('/donate', async (req, res) => {
    try {
        const { amount, paymentMethodId } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, // Amount should be in the smallest currency unit (e.g., cents)
            currency: 'usd',
            payment_method: paymentMethodId,
            confirm: true,
        });
        res.json(paymentIntent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});