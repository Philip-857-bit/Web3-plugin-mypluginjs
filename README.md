Web3 Plugin MyPluginJS

A simple Web3.js plugin that extends the base functionality of Web3 to make it easier to interact with Ethereum smart contracts.

This plugin is built on top of Web3PluginBase and provides common methods for reading contract data, sending transactions, listening to events, and more.


---

Installation

npm install web3


---

Usage

import { Web3 } from 'web3';
import MyPlugin from './MyPlugin.js'; // path to your plugin file

const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Register your plugin
web3.registerPlugin(new MyPlugin());

// Now you can access your plugin methods:
const plugin = web3.myPlugin;

// Example: get latest block number
plugin.getLatestBlockNumber().then(console.log);


---

Methods

makeCall()

Makes a contract call (example logic — customize it).

sendTx()

Sends a transaction to a contract (example logic — customize it).

getContractBalance(address)

Returns the balance (in wei) of a contract at a given address.

const balance = await plugin.getContractBalance('0xYourContractAddress');

listenToEvent(contractAddress, abi, eventName, callback)

Subscribes to a contract event and triggers callback when the event is emitted.

plugin.listenToEvent('0xYourContractAddress', abi, 'MyEvent', (event) => {
    console.log('Event received:', event);
});

estimateGas(contractAddress, abi, methodName, args, from)

Estimates gas required to call a contract method.

const gas = await plugin.estimateGas('0xYourContractAddress', abi, 'myMethod', [arg1, arg2], '0xYourAddress');

readVariable(contractAddress, abi, variableName)

Reads a public variable from a contract.

const value = await plugin.readVariable('0xYourContractAddress', abi, 'myPublicVariable');

sendEther(from, to, value)

Sends Ether from one address to another.

await plugin.sendEther('0xFromAddress', '0xToAddress', web3.utils.toWei('0.1', 'ether'));

getLatestBlockNumber()

Gets the number of the latest block.

const blockNumber = await plugin.getLatestBlockNumber();

getTransaction(txHash)

Fetches details of a transaction by its hash.

const txDetails = await plugin.getTransaction('0xYourTransactionHash');

callMethod(contractAddress, abi, methodName, args = [])

Calls a read-only contract method.

const result = await plugin.callMethod('0xYourContractAddress', abi, 'myMethod', [arg1, arg2]);

sendMethod(contractAddress, abi, methodName, args = [], from)

Sends a transaction to a contract method.

await plugin.sendMethod('0xYourContractAddress', abi, 'myMethod', [arg1, arg2], '0xYourAddress');


---

Notes

This plugin is intended to simplify contract interactions via Web3.js.

You can extend it with more helper methods to match your use case.

Make sure to handle gas estimation, transaction confirmation, and error handling in production.



---

License

MIT
