// Import and Network Setup

```js
//0x2875d1733346bF4618485a91F2D9E5FB544f4fc5
import Web3 from "web3";
import { ERC725 } from "@erc725/erc725.js";
import lsp3ProfileSchema from "@erc725/erc725.js/schemas/LSP3ProfileMetadata.json" assert { type: "json" };

// Our static variables
//const SAMPLE_PROFILE_ADDRESS = '0x6979474Ecb890a8EFE37daB2b9b66b32127237f7';
const SAMPLE_PROFILE_ADDRESS = "0xB031363560403179Aac100d51864e27fFF4D7807";
const RPC_ENDPOINT = "https://rpc.testnet.lukso.network";
const IPFS_GATEWAY = "https://api.universalprofile.cloud/ipfs";

// Parameters for ERC725 Instance
const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);
const config = { ipfsGateway: IPFS_GATEWAY };

async function fetchProfile(address) {
  try {
    const profile = new ERC725(lsp3ProfileSchema, address, provider, config);
    return await profile.fetchData();
  } catch (error) {
    console.log(error);
    return console.log("This is not an ERC725 Contract");
  }
}

// Debug
fetchProfile(SAMPLE_PROFILE_ADDRESS).then((profileData) =>
  console.log(JSON.stringify(profileData, undefined, 2))
);
```
