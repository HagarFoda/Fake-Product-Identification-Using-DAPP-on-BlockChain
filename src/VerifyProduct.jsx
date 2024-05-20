/*import React, { useState } from 'react';
import Web3 from 'web3';
import {  CompanyABI, ProductIdentityABI, contractAddress } from './components/abi';

const VerifyProduct = () => {
  const [productId, setproductId] = useState('');
  const [result, setResult] = useState('');

  const verifyProduct = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const companyContract = new web3.eth.Contract(CompanyABI, '0x9129EEdA21Fcd6Fdb6A501b650fF1d4681690AEE');

    try {
      const verificationResult = await companyContract.methods.verifyProduct(parseInt(productId)).call();
      setResult(verificationResult);
    } catch (error) {
      console.error(error);
      alert('Error verifying product');
    }
  };

  return (
    <div>
      <h2>Verify Product</h2>
      <input type="text" placeholder="Product Hash" value={productId} onChange={(e) => setproductId(e.target.value)} />
      <button onClick={verifyProduct}>Verify</button>
      <p>{result}</p>
    </div>
  );
};

export default VerifyProduct;
*/
/*
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { CompanyABI, companyContractAddress } from './components/abi';

const VerifyProduct = () => {
    const [productId, setproductId] = useState('');
    const [contract, setContract] = useState(null);
    const [verificationResult, setVerificationResult] = useState(null);

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

    useEffect(() => {
        initWeb3();
    }, []);

    const handleChange = (e) => {
        setproductId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await contract.methods.verifyProduct(productId).call();
            setVerificationResult(result);
        } catch (error) {
            console.error('Error verifying product:', error);
            alert('Error verifying product. Please try again.');
        }
    };

    return (
        <div>
            <h2>Verify Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Product Hash:
                    <input type="text" name="productId" value={productId} onChange={handleChange} />
                </label>
                <button type="submit">Verify</button>
            </form>
            {verificationResult !== null && (
                <div>
                    <h3>Verification Result</h3>
                    <p>{verificationResult ? "Product is verified" : "Product verification failed"}</p>
                </div>
            )}
        </div>
    );
};

export default VerifyProduct;
*/
/*
// VerifyProducts.jsx
import React, { useState } from 'react';
import Web3 from 'web3';
import { CompanyABI, companyContractAddress } from './components/abi';

const VerifyProducts = () => {
  const [productId, setproductId] = useState('');
  const [verifyResult, setVerifyResult] = useState('');

  const verifyProduct = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(CompanyABI, companyContractAddress);

    try {
      const isAuthentic = await contract.methods.verifyProduct(productId).call();
      if (isAuthentic) {
        setVerifyResult('Product is authentic');
      } else {
        setVerifyResult('Product is counterfeit');
      }
    } catch (error) {
      console.error('Error verifying product:', error);
      setVerifyResult('Error verifying product');
    }
  };

  return (
    <div>
      <h2>Verify Products</h2>
      <input
        type="text"
        value={productId}
        onChange={(e) => setproductId(e.target.value)}
        placeholder="Enter Product ID"
      />
      <button onClick={verifyProduct}>Verify Product</button>
      <p>{verifyResult}</p>
    </div>
  );
};

export default VerifyProducts;
*/
// VerifyProducts.jsx

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { CompanyABI, companyContractAddress } from './components/abi';

const VerifyProducts = () => {
  const [productId, setproductId] = useState('');
  //const [verifyResult, setVerifyResult] = useState('');
  const [contract, setContract] = useState(null);

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
  useEffect(() => {
    initWeb3();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'productId') setproductId(value);
    //if (name === 'verifyResult') setVerifyResult(value);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      await contract.methods.verifyProduct(productId).send({ from: accounts[0] });
      alert('Product verified successfully!');
  } catch (error) {
      console.error('Error verify product:', error);
      //setVerifyResult('Error verifying product');
      alert('Error verifying product. Please try again.');
  }
}

    /*
    try {
      const result = await contract.methods.VerifyProducts(web3.utils.asciiToHex(productId)).call();
      setVerifyResult(result);
    } catch (error) {
      console.error('Error verifying product:', error);
      setVerifyResult('Error verifying product');
    }
  };*/

  return (
    <div>
        <h2>Verify Product</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Product Id:
                <input type="text" name="productId" value={productId} onChange={handleChange} />
            </label>
           
            <button type="submit">Verify Product</button>
        </form>
    </div>
  );
};
export default VerifyProducts;
  