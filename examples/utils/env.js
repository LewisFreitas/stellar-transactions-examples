var StellarSdk = require('stellar-sdk')

module.exports = {
  isTest: true,
  server: new StellarSdk.Server('https://horizon-testnet.stellar.org'),
  tokenCreation: {
    name: 'default',
    symbol: 'DFLT',
  }
}
