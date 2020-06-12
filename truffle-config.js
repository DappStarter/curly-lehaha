require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture strategy crawl pave code gentle light army genius'; 
let testAccounts = [
"0xa15e3fc51ff8f3e2e31a41be03638b22901305f1ee35795eaf202420831e5d5d",
"0x129fc44ccb67eb193a785ccfd0afae1b631dc7522b647dc00754b2dd7af4d667",
"0x9919803899cbc056d5b7405964ca5e3c5037fb56327005818ca2f76346791edf",
"0x549b4d7d6bfd864271a9f70b999f45354a61c75b15d3affddc62a68fd0f4bbcf",
"0x7d891e477864b79838515f088f8d5379a1954a7255ea0c5ea19f2980241e48eb",
"0xf525964a708d20f84ec16a60f20049a95d2d14c80ac1be905e81de1ad1daa3ab",
"0x2a5071e672321b604abd8f942eb9b46712160d08dbc8243ca9806202027b68c5",
"0xf7ed48cb460bfa82453c757950653f61f4b0032c6550b39cfdeecce1d4355a2f",
"0x123573ac9709ac39db9c6be98c657a7415d65acdd799d203d31fdcbd1ff8333c",
"0x1447827604a0cf6fb9ff8ca61e0c07c5f1d60013a7205909253793b2de71b5f5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
