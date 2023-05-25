window.function = function (in_amount, in_recip, in_order) {

const glideamount = in_amount.value;
const gliderecip = String(in_recip.value) ?? "";
const glideorder = String(in_order.value) ?? "";

function generateHash() {
  const secret = 'nhYFNjbVKLfNGElt5blyDIMQWz4bCfho66uYSE4JakDX58Ri5ZUBW0i9l3L9aTP0A6TD2XhZ2QCsHa8FHr9j0Fog4Id86asUfWHM9mSDQOfSaaBvhogzUScjveqoEJWT7i5Pq1Npy9QT3v4TO4dM6obUzxOCwpoRh9xDbmaLopaenkxjvYQdhNnF0ybJgxxhGbg1Wz1aAVx6kBZRtu9HAxkN5iv35OT75uB8sADGf1juRtnQB2WQuV6cMWfuNSaD';
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
