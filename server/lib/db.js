const mongoose = require('mongoose');

module.exports = () => {
  const user = encodeURIComponent(process.env.DBUSER);
  const password = encodeURIComponent(process.env.DBPASS);
  const host = process.env.DBHOST;
  mongoose.connect(`mongodb://${user}:${password}@${host}/work`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('db connected.');
      return true;
    })
    .catch((e) => {
      console.log('db connection failed\n', e.stack);
      return false;
    });
};
