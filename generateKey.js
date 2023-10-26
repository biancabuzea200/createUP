import dotenv from 'dotenv/config';
import Web3 from 'web3';
let privateKey = process.env.MY_PRIVATE_KEY;

const web3 = new Web3("https://rpc.testnet.lukso.network/");

if (privateKey === "") {
    let account = web3.eth.accounts.create();
    console.log("My private key is: " + account.privateKey);
    console.log("My address is: " + account.address);

    privateKey = account.privateKey;
}

let wallet = web3.eth.accounts.privateKeyToAccount(privateKey);

async function getBalance() {
    let balance = await web3.eth.getBalance(wallet.address);
    console.log("My balance: " + web3.utils.fromWei(balance, "ether") + " LYXt");
}

getBalance();