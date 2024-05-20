/*import React, { useState } from 'react';
import Web3 from 'web3';
import {  CompanyABI, ProductIdentityABI, contractAddress } from './components/abi';

 const RegisterProduct = () => {
  const [productId, setProductId] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const registerProduct = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const productIdentityContract = new web3.eth.Contract(ProductIdentityABI, '0x9129EEdA21Fcd6Fdb6A501b650fF1d4681690AEE');

    try {
      await productIdentityContract.methods.registerProduct(web3.utils.asciiToHex(productId), manufacturer).send({ from: accounts[0] });
      alert('Product registered successfully');
    } catch (error) {
      console.error(error);
      alert('Error registering product');
    }
  };

  return (
    <div>
      <h2>Register Product</h2>
      <input type="text" placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
      <input type="text" placeholder="Manufacturer Address" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
      <button onClick={registerProduct}>Register</button>
    </div>
  );
};

export default RegisterProduct;*/
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { ProductIdentityABI, productIdentityContractAddress } from './components/abi';

const RegisterProduct = () => {
    const [productId, setProductId] = useState('');
    const [manufacturerAddress, setManufacturerAddress] = useState('');
    const [contract, setContract] = useState(null);

    const initWeb3 = async () => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            const productIdentityContract = new web3.eth.Contract(ProductIdentityABI, productIdentityContractAddress);
            setContract(productIdentityContract);
        } else {
            alert('Please install MetaMask to use this feature.');
        }
    };

    useEffect(() => {
        initWeb3();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'productId') setProductId(value);
        if (name === 'manufacturerAddress') setManufacturerAddress(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

            await contract.methods.registerProduct(productId, manufacturerAddress).send({ from: accounts[0] });
            alert('Product registered successfully!');
        } catch (error) {
            console.error('Error registering product:', error);
            alert('Error registering product. Please try again.');
        }
    };

    return (
        <div>
            <h2>Register Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Product ID:
                    <input type="text" name="productId" value={productId} onChange={handleChange} />
                </label>
                <label>
                    Manufacturer Address:
                    <input type="text" name="manufacturerAddress" value={manufacturerAddress} onChange={handleChange} />
                </label>
                <button type="submit">Register Product</button>
            </form>
        </div>
    );
};

export default RegisterProduct;

