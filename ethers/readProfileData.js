import { ERC725 } from '@erc725/erc725.js'; // Library to check the interface of a profile
import Web3 from 'web3';
import erc725schema from '@erc725/erc725.js/schemas/LSP3ProfileMetadata.json' assert { type: "json" };

const RPC_ENDPOINT = 'https://rpc.testnet.lukso.gateway.fm';
const SAMPLE_PROFILE_ADDRESS = '0x9139def55c73c12bcda9c44f12326686e3948634';
const SAMPLE_ASSET_ADDRESS = '0x6395b330F063F96579aA8F7b59f2584fb9b6c3a5';

// Parameters for ERC725 Instance
const config = {
    ipfsGateway: 'https://api.universalprofile.cloud/ipfs',
};
const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);


async function fetchProfile(address) {
    try {
        const profile = new ERC725(erc725schema, address, provider, config);
        return await profile.fetchData();
    } catch (error) {
        console.log(error);
        return console.log("This is not an ERC725 Contract");
    }
}


// // Debug

// console.log(JSON.stringify(profileData, undefined, 2));