window.function = function (in_amount, in_recip, in_order) {

const glideamount = in_amount.value;
const gliderecip = String(in_recip.value) ?? "";
const glideorder = String(in_order.value) ?? "";

function generateHash() {
  const secret = 't4KsvMyC3fEE8SXKiqeFnSGHa72NwV87IkDE5ntRVZFZDSUBhs9lFU91axWApEod62pdy712wagKmEnfHydR2ZDJlMliIGmG2mcnI6rJUQJdwH81t6bXqIKv1nIEAYVW6O61DAGImxxDjn7l2UbBjzY2pQhC6qbeRgRYMSDLw2pYcucx5pLJUSwPMUGKtVCOrtXfPCWY6i3vA8cjEI5vFSL0EJ4thd9VDj8sYIB0XOwmcEgqFzYtsVRIJSz40BZi';
  const data = {
    currencyID: 4,
    amount: glideamount,
    recipientTypeID: 1,
    recipient: `${gliderecip}`,
    clientOrderID: `${glideorder}`,
    webhookURL: 'https://webhook.site/6c2fa6fa-ec9f-47ca-a2c2-18505a6dec9b'
  };
  const raw = JSON.stringify(data);
  const hash = CryptoJS.HmacSHA512(raw, secret).toString();
  return hash;
};

  return generateHash();
// Call generateHash and log the result to the console
console.log(generateHash());
}
