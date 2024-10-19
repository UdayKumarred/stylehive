const Razorpay = require('razorpay');

apiKey="rzp_test_8gw7NzbkicXEfO" 
apiSecret="CDhxJs1ycyPWgJV0LXflr2pd" 
 const razorpay = new Razorpay({
  key_id: apiKey,
  key_secret: apiSecret,
});

module.exports=razorpay