var StellarSdk = require('stellar-sdk')

var tokenIssuerSecretKey = 'INSERT_YOUR_KEY';
var distributorSecretKey = 'INSERT_YOUR_KEY';

var _tokenIssuerKeyPair =  StellarSdk.Keypair.fromSecret(tokenIssuerSecretKey);
var _tokenIssuerPublicKey = _tokenIssuerKeyPair.publicKey();

var _distributorKeyPair = StellarSdk.Keypair.fromSecret(distributorSecretKey);
var _distributorPublicKey = _distributorKeyPair.publicKey();

module.exports = {
  tokenIssuerKeyPair: _tokenIssuerKeyPair,
  tokenIssuerPublicKey: _tokenIssuerPublicKey,

  distributorKeyPair: _distributorKeyPair,
  distributorPublicKey: _distributorPublicKey
};
