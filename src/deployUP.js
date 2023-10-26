import { LSPFactory } from '@lukso/lsp-factory.js';
import Web3 from 'web3';
const web3 = new Web3("https://rpc.testnet.lukso.network");
import dotenv from 'dotenv/config';

const PRIVATE_KEY = process.env.MY_PRIVATE_KEY;
const myEOA = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);

// Initialize the LSPFactory with the Testnet RPC endpoint and your EOA's private key, which will deploy the UP smart contracts
const lspFactory = new LSPFactory('https://rpc.testnet.lukso.network/', {
    deployKey: PRIVATE_KEY,
    chainId: 4201,
});

// Deploy our Universal Profile
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