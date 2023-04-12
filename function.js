window.function = function (in_amount, in_recip, in_order) {

const glideamount = in_amount.value;
const gliderecip = String(in_recip.value) ?? "";
const glideorder = String(in_order.value) ?? "";

const secret = '7a395ee6-de9e-4225-a82c-04612683ed65';
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

}
