var StellarSdk = require('stellar-sdk')
var keys = require('./../utils/keys')
var env = require('./../utils/env')
var issuer = require('./../utils/api/tokenIssuer')

env.isTest ? StellarSdk.Network.useTestNetwork() : null

issuer.changeTrustDistributor(
  keys.tokenIssuerPublicKey,
  keys.tokenIssuerKeyPair,
  keys.distributorPublicKey,
  keys.distributorKeyPair,
  'TEST'
)
