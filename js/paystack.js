// ===================================================
// KETSY STORE – Paystack Payment Integration
// ===================================================
// Public key: pk_live_4fb34537d6e7a4979c16d2fd1fa2aee342f4c4f7
// Paystack inline JS must be loaded before this file:
// <script src="https://js.paystack.co/v1/inline.js"></script>

const PAYSTACK_PUBLIC_KEY = 'pk_live_4fb34537d6e7a4979c16d2fd1fa2aee342f4c4f7';

/**
 * Initiate a Paystack payment popup.
 * @param {object} options
 *   email       {string}  Customer email (required)
 *   amount      {number}  Amount in GHS (we convert to pesewas)
 *   name        {string}  Customer full name
 *   phone       {string}  Customer phone number
 *   reference   {string}  Unique order reference
 *   onSuccess   {function} Called when payment is verified
 *   onCancel    {function} Called when user cancels
 */
function initiatePaystackPayment({ email, amount, name, phone, reference, onSuccess, onCancel }) {
  if (typeof PaystackPop === 'undefined') {
    showToast('❌ Payment system not loaded. Please refresh the page.', 'error');
    return;
  }

  const handler = PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email: email,
    amount: Math.round(amount * 100), // Convert GHS to pesewas
    currency: 'GHS',
    ref: reference || generateReference(),
    firstname: name ? name.split(' ')[0] : '',
    lastname:  name ? name.split(' ').slice(1).join(' ') : '',
    phone: phone,
    metadata: {
      custom_fields: [
        { display_name: 'Store', variable_name: 'store', value: 'Ketsy Store' },
        { display_name: 'Customer Phone', variable_name: 'phone', value: phone }
      ]
    },
    callback: function(response) {
      // Payment successful — response.reference is the Paystack reference
      if (typeof onSuccess === 'function') {
        onSuccess(response);
      }
    },
    onClose: function() {
      // User closed the payment popup
      if (typeof onCancel === 'function') {
        onCancel();
      }
    }
  });

  handler.openIframe();
}

/**
 * Generate a unique order reference
 */
function generateReference() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `KETSY-${timestamp}-${random}`;
}
