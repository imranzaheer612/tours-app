/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51KpW1MKS7s8SLBvoDkDfZWfpezyV8xclMiGvt5Vc6uH43igxz29bD4HJk8cv7lPnyvJSeFfBLDWMXEgEcUPmsgUN00RTU1EOYz'
);

/**
 * Get checkout session from API
 * Create checkout form + charge credit card
 */
export const bookTour = async tourId => {
  try {
    // 1)
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2)
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
