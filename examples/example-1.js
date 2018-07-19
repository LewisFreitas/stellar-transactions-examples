var StellarSdk = require('stellar-sdk')
var keys = require('./utils/keys')
var issuer = require('./utils/api/tokenIssuer')


var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
/*Comment this to operate on main net*/
StellarSdk.Network.useTestNetwork();

/*EXAMPLE:

First: issuer.changeTrustDistributor(keys.tokenIssuerPublicKey, keys.tokenIssuerKeyPair, keys.distributorPublicKey, keys.distributorKeyPair, 'TEST')

Second: issuer.tokenCreation(keys.tokenIssuerPublicKey, keys.tokenIssuerKeyPair, keys.distributorPublicKey, keys.distributorKeyPair, 'TEST', '40000000')

Third: issuer.distributeToken(keys.tokenIssuerPublicKey, keys.tokenIssuerKeyPair, keys.distributorPublicKey, keys.distributorKeyPair, 'TEST', '40000000', '1')

*/
