import React, { useState, useEffect } from 'react';
//import React, { useState } from 'react';
import Web3 from 'web3';
import { CompanyABI, companyContractAddress } from './components/abi';

const AddProducts = () => {
    const [ownerAddress, setOwnerAddress] = useState('');
    const [productHashes, setProductHashes] = useState('');
    const [contract, setContract] = useState(null);

    // Initialize Web3 and contract
    const initWeb3 = async () => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            const companyContract = new web3.eth.Contract(CompanyABI, companyContractAddress);
            setContract(companyContract);
        } else {
            alert('Please install MetaMask to use this feature.');
        }
    };

    // Initialize Web3 and contract on component mount
    useEffect(() => {
        initWeb3();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'ownerAddress') setOwnerAddress(value);
        if (name === 'productHashes') setProductHashes(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const productHashArray = productHashes.split(',').map(hash => hash.trim());

            await contract.methods.addProducts(ownerAddress, productHashArray).send({ from: accounts[0] });
            alert('Products added successfully!');
        } catch (error) {
            console.error('Error adding products:', error);
            alert('Error adding products. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add Products</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Owner Address:
                    <input type="text" name="ownerAddress" value={ownerAddress} onChange={handleChange} />
                </label>
                <label>
                    Product Hashes :
                    <input type="text" name="productHashes" value={productHashes} onChange={handleChange} />
                </label>
                <button type="submit">Add Products</button>
            </form>
        </div>
    );
};

export default AddProducts;


/*
*/
