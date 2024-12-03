import PaystackPop from '@paystack/inline-js'
const popup = new PaystackPop()
popup.resumeTransaction(access_code)


const url = 'https://api.paystack.co/transaction/initialize';
const secretKey = 'Bearer SECRET_KEY';

const params = {
  email: 'customer@email.com',
  amount: '500000',
};

fetch(url, {
  method: 'POST',
  headers: {
    Authorization: secretKey,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

  const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/verify/:reference',
  method: 'GET',
  headers: {
    Authorization: 'Bearer SECRET_KEY'
  }
}

https.request(options, res => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  });

  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})
