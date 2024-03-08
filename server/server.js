const express = require('express');
const path = require('path');
const stripe = require('stripe')('pk_test_51OrsCMHiPcL6rzSyxeBOkMM8uBSH1OYDboOpESNDd504L2gB1VBaHw3yMJ9nEQmX9NZuOQLhJnkXNN3s5WbMWo5p007WtoYLOd');

const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')

const { authMiddleware } = require('./utils/auth') // auth needs to be written still

const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas'); // typeDefs and resolvers need to be written and exported in those files

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    typeDefs, resolvers
});

const app = express();

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

const startApolloServer = async () => {
    await server.start();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use('/graphql', expressMiddleware(server, {
        context: authMiddleware // same as the import
    }))

    // this wont go into play until we create the dist folder with npm run build
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname), '../client/dist/index.html')
        })
    }


    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on on port ${PORT}`)
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`)
        })
    })
}

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

startApolloServer();