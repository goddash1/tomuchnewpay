function generateHash() {
  const secret = '7a395ee6-de9e-4225-a82c-04612683ed65';
  const data = {
    currencyID: 4,
    amount: 500,
    recipientTypeID: 1,
    recipient: '2202206147539923',
    clientOrderID: '2134236452vsfdsDas',
    webhookURL: 'https://webhook.site/6c2fa6fa-ec9f-47ca-a2c2-18505a6dec9b'
  };
  const raw = JSON.stringify(data);
  const hash = CryptoJS.HmacSHA512(raw, secret).toString();
  return hash;
}
