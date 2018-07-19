var StellarSdk = require('stellar-sdk')
var keys = require('./keys')


var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
/*Comment this to operate on main net*/
StellarSdk.Network.useTestNetwork();

const changeTrustDistributor = async(tokenIssuerPublicKey, tokenIssuerKeyPair, distributorPublicKey, distributorKeyPair, assetCode ) => {
  server.loadAccount(distributorPublicKey)
    .then(function(account){
      var transaction = new StellarSdk.TransactionBuilder(account)
        .addOperation(StellarSdk.Operation.changeTrust({
          asset: new StellarSdk.Asset(assetCode, tokenIssuerPublicKey)
        }))
        .build()

        transaction.sign(distributorKeyPair)

        server.submitTransaction(transaction)
          .then(function(transactionResult){
            console.log(JSON.stringify(transactionResult, null, 2))
          })
          .catch(function(err){
            console.log(err)
          })
    })
}

const tokenCreation = async(tokenIssuerPublicKey, tokenIssuerKeyPair, distributorPublicKey, distributorKeyPair, assetCode, amount) => {
  server.loadAccount(tokenIssuerPublicKey)
    .then(function(account){
      var transaction = new StellarSdk.TransactionBuilder(account)
        .addOperation(StellarSdk.Operation.payment({
          destination: distributorPK,
          asset: new StellarSdk.Asset(assetCode, tokenIssuerPublicKey),
          amount: amount
        }))
        .build()
        transaction.sign(tokenIssuerKeyPair)

        server.submitTransaction(transaction)
          .then(function(transactionResult){
            console.log(JSON.stringify(transactionResult, null, 2))
          })
          .catch(function(err){
            console.log(err)
          })
    })
}

const distributeToken = async(tokenIssuerPublicKey, tokenIssuerKeyPair, distributorPublicKey, distributorKeyPair, assetCode, amount, price) => {
  server.loadAccount(distributorPK)
    .then(function(account){
      var transaction = new StellarSdk.TransactionBuilder(account)
        .addOperation(StellarSdk.Operation.manageOffer({
          selling: new StellarSdk.Asset(assetCode, tokenIssuerPK),
          buying: StellarSdk.Asset.native(),
          amount: amount,
          price: price,
          offerId: 0
        }))
        .build()
        transaction.sign(distributorKeyPair)

        server.submitTransaction(transaction)
          .then(function(transactionResult){
            console.log(JSON.stringify(transactionResult, null, 2))
          })
          .catch(function(err){
            console.log(err)
          })
    })
}


/*EXAMPLE:

First: changeTrustDistributor(keys.tokenIssuerPublicKey, keys.tokenIssuerKeyPair, keys.distributorPublicKey, keys.distributorKeyPair, 'TEST')

Second: tokenCreation(keys.tokenIssuerPublicKey, keys.tokenIssuerKeyPair, keys.distributorPublicKey, keys.distributorKeyPair, 'TEST', '40000000')

Third: distributeToken(keys.tokenIssuerPublicKey, keys.tokenIssuerKeyPair, keys.distributorPublicKey, keys.distributorKeyPair, 'TEST', '40000000', '1')

*/
