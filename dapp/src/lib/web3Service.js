export const getProvider = (networkId) => {
  switch (networkId) {
    case '1':
      return 'https://mainnet.infura.io/v3/67f3e4e6a1d8477ca360d881fbff6baa';
    case '3':
      return 'https://ropsten.infura.io/v3/67f3e4e6a1d8477ca360d881fbff6baa';
    case '4':
      return 'https://rinkeby.infura.io/v3/67f3e4e6a1d8477ca360d881fbff6baa';
    case '42':
      return 'https://kovan.infura.io/v3/67f3e4e6a1d8477ca360d881fbff6baa';
    default:
      return 'https://ropsten.infura.io/v3/67f3e4e6a1d8477ca360d881fbff6baa';
  }
}

export const getSimpleTokenAddress = (networkId) => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0x929b9f944D966A64c6576FE55A55fFA022F058d6';
    case '4':
      return '0x0';
    case '42':
      return '0x0';
    default:
      return '0x929b9f944D966A64c6576FE55A55fFA022F058d6';
  }
}

export const getCryptoHerosTokenAddress = (networkId) => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0x55D571573784EAcA518BAeFb0DB6878b9d247Eb3';
    case '4':
      return '0x0';
    case '42':
      return '0x0';
    default:
      return '0x55D571573784EAcA518BAeFb0DB6878b9d247Eb3';
  }
}

export const getCryptoHerosGameAddress = (networkId) => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0xAD3314C9EBa6269DFfaEDD6378eE0320bB918258';
    case '4':
      return '0x0';
    case '42':
      return '0x0';
    default:
      return '0xAD3314C9EBa6269DFfaEDD6378eE0320bB918258';
  }
}

export const getCurrentAddress = (web3) => {
  if (web3 === null) return;
  return web3.eth.accounts[0];
}

export const getCurrentNetwork = (web3) => {
  if (web3 === null) return;
  return web3.version.network;
}
