import Web3 from 'web3';
import { CompanyABI, ProductIdentityABI } from '../components/abi';

let web3;

// Modern dapp browsers...
if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
        // Request account access if needed
        window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
        console.error("User denied account access");
    }
// Legacy dapp browsers...
} else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
// If no injected web3 instance is detected, fall back to Ganache
} else {
    const provider = new Web3.providers.HttpProvider('http://localhost:3000/');
    web3 = new Web3(provider);
}

const CompanyContractAddress = '0xe64b2A71B062b5c4eC306933499efDA54B4113dB';
const ProductIdentityContractAddress = '0xE8aE64fC56c7a332D630A921F28CBC47bAFf6BAe';

const CompanyContract = new web3.eth.Contract(CompanyABI, CompanyContractAddress);
const ProductIdentityContract = new web3.eth.Contract(ProductIdentityABI, ProductIdentityContractAddress);

export { web3, CompanyContract, ProductIdentityContract };
