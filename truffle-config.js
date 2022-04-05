require("babel-register")({
  ignore: /node_modules\/(?!zeppelin-solidity)/
});
require("babel-polyfill");
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      // provider: function() {
      //   return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/67f3e4e6a1d8477ca360d881fbff6baa");
      // },
      // network_id: '3',
      // gasPrice: 25000000000,
      // provider: () =>
      //   new HDWalletProvider({
      //     mnemonic: {
      //       phrase: mnemonic
      //     },
      //     providerOrUrl: "https://ropsten.infura.io/v3/67f3e4e6a1d8477ca360d881fbff6baa",
      //     numberOfAddresses: 1,
      //     from: "0xD864EF08ab7Ee87641e5785dc290362903482154",
      //     shareNonce: true,
      //     derivationPath: "m/44'/1'/0'/0/"
      //   }),
      // network_id: '3',
      provider: () => new HDWalletProvider( mnemonic, "https://ropsten.infura.io/v3/67f3e4e6a1d8477ca360d881fbff6baa"),
      network_id: 3,
      gas: 4700000,
      gasPrice: 20000000000
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  compilers: {
    solc: {
      version: "0.8.13"
    }
  }
};
