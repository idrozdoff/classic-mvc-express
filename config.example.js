exports.config = {
  DB_CONNECTION_LINK: '',
  mailTransporter: {
    host: '',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '',
      pass: '',
    },
  },
  mailFrom: '',
  stripe_sk: '',
  stripe_pk: ''
};