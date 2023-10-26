// use Node@16.0.0
import { LSPFactory } from '@lukso/lsp-factory.js';
import Web3 from 'web3';
const web3 = new Web3("https://rpc.testnet.lukso.network");

web3.eth.setProvider("https://rpc.testnet.lukso.network");
console.log(web3.provider)

const PRIVATE_KEY = "0x8719c2754b000f2268e63a16e4028f7c0db8ea93a3077ee51367d4d0069417be";
const myEOA = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);

async function printBalance() {
    let balance = await web3.eth.getBalance('0x4FF5aA0a0F085a0BffC75566B92f174309A4adcB')
    console.log(balance)
}

printBalance()

// Step 3.2
// Initialize the LSPFactory with the L16 RPC endpoint and your EOA's private key, which will deploy the UP smart contracts
const lspFactory = new LSPFactory('https://rpc.testnet.lukso.network/', {
    deployKey: PRIVATE_KEY,
    chainId: 4201,
});

// Step 3.3 - Deploy our Universal Profile
async function createUniversalProfile() {
    const deployedContracts = await lspFactory.UniversalProfile.deploy({
        controllerAddresses: [myEOA.address], // our EOA that will be controlling the UP
        lsp3Profile: {
            name: 'My Universal Profile',
            description: 'My Cool Universal Profile',
            tags: ['Public Profile'],
            links: [
                {
                    title: 'My Website',
                    url: 'https://my-website.com/',
                },
            ],
        },
    });

    const myUPAddress = deployedContracts.LSP0ERC725Account.address;
    console.log('my Universal Profile address: ', myUPAddress);

    return deployedContracts;
}

createUniversalProfile();