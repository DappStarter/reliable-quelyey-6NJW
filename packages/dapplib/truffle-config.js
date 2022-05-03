require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remind concert grace glow flock verify'; 
let testAccounts = [
"0x2c4117b930ec808b3f6a09b3498dcb94523cae70f6cdd37178d654c2fc0edd7f",
"0x3d135b9712357bfdc6fe368ec03f36212bc39e4e015fc7fb054d09395ca97b71",
"0x5d84a013772b147f7c6f62229d4113fa3c15e340ad81672026f868b3a5f6dba0",
"0x77ff101c3360e3c1f06938651cc06abd288d1f4e81cc9c62beb690fba43eb630",
"0x13b80b1279570546990e51856e790890e5971f4c52449cecdbbf7eee52be79c4",
"0x90735aa6aee18eaf268c8cfa0d2191645a1fc1316fdb7c84cc0c35d3a410abbf",
"0x43b01a596f4f8a2e6594b4f829543031c5672749b79826cc042440e8d630f170",
"0xd19f31e4cd732b3a4b8239c17bc1d13b4a81b423f08ffb4ecc7b3126e4de17e0",
"0xe6bfe02b5f244ccb94995987be6d7920ab56ee4396eeafac3edd4ec830e41af4",
"0x42ea21fec5ef2e05f01ea663882e561d8682a82b5cb525d5daefc78123116744"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


