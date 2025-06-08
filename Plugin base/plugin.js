import { Web3PluginBase, Contract } from 'web3';

class MyPlugin extends Web3PluginBase {
    pluginNamespace = "myPlugin";

    makeCall(){
        const contract = new contract(abi)
        contract.methods.callingSomething().call()
        // ...
    }

    sendTx(){
        // ...
        contract.methods.doSomething().send({from: "0x..."});
    }

    // Get the contract's current balance
    async getContractBalance(address) {
        // Returns the balance (in wei) of the contract at the given address
        return await this.web3.eth.getBalance(address);
    }

    // Listen for a specific event from the contract
    listenToEvent(contractAddress, abi, eventName, callback) {
        const contract = new Contract(abi, contractAddress);
        // Subscribes to the specified event and calls the callback on event
        contract.events[eventName]()
            .on('data', callback)
            .on('error', console.error);
    }

    // Estimate gas for a transaction
    async estimateGas(contractAddress, abi, methodName, args, from) {
        const contract = new Contract(abi, contractAddress);
        // Estimates the gas required for the method call with given arguments
        return await contract.methods[methodName](...args).estimateGas({ from });
    }

    // Read any public variable from the contract
    async readVariable(contractAddress, abi, variableName) {
        const contract = new Contract(abi, contractAddress);
        // Calls the getter for the public variable
        return await contract.methods[variableName]().call();
    }

    // Send Ether to an address
    async sendEther(from, to, value) {
        // Sends Ether from one address to another
        return await this.web3.eth.sendTransaction({ from, to, value });
    }

    // Get the latest block number
    async getLatestBlockNumber() {
        // Returns the number of the most recent block
        return await this.web3.eth.getBlockNumber();
    }

    // Get transaction details by hash
    async getTransaction(txHash) {
        // Returns the transaction details for a given transaction hash
        return await this.web3.eth.getTransaction(txHash);
    }

    // Call any contract method (read-only)
    async callMethod(contractAddress, abi, methodName, args = []) {
        const contract = new Contract(abi, contractAddress);
        // Calls a contract method with arguments (read-only)
        return await contract.methods[methodName](...args).call();
    }

    // Send a transaction to any contract method (write)
    async sendMethod(contractAddress, abi, methodName, args = [], from) {
        const contract = new Contract(abi, contractAddress);
        // Sends a transaction to a contract method with arguments
        return await contract.methods[methodName](...args).send({ from });
    }
}
// ... more methods and properties

export default MyPlugin;
// This is a simple Web3 plugin that extends the base functionality
// of Web3 to interact with smart contracts.