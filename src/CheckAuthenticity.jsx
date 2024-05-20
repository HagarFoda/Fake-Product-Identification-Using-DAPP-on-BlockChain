/*import React, { useState } from 'react';
import Web3 from 'web3';
import {  CompanyABI, ProductIdentityABI, contractAddress } from './components/abi';

const CheckAuthenticity = () => {
  const [productId, setProductId] = useState('');
  const [result, setResult] = useState('');

  const checkAuthenticity = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const productIdentityContract = new web3.eth.Contract(ProductIdentityABI, productIdentityContractAddress);

    try {
      const isAuthentic = await productIdentityContract.methods.verifyProduct(web3.utils.asciiToHex(productId)).call();
      setResult(isAuthentic ? 'Authenticated' : 'Counterfeit');
    } catch (error) {
      console.error(error);
      alert('Error checking authenticity');
    }
  };

  return (
    <div>
      <h2>Check Authenticity</h2>
      <input type="text" placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
      <button onClick={checkAuthenticity}>Check</button>
      <button onClick={checkAuthenticity}>Check</button>
         <p>{result}</p>
       </div>
     );
   };

   export default CheckAuthenticity;
*/
/*
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { ProductIdentityABI, productIdentityContractAddress } from './components/abi';

const CheckAuthenticity = () => {
  const [productId, setProductId] = useState('');
  const [result, setResult] = useState('');
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
        } catch (error) {
          console.error('User denied account access or other issue:', error);
        }
      } else if (window.web3) {
        const web3Instance = new Web3(window.web3.currentProvider);
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    };
    initWeb3();
  }, []);

  const checkAuthenticity = async () => {
    if (!web3) {
      console.error('Web3 has not been initialized.');
      return;
    }

    const productIdentityContract = new web3.eth.Contract(ProductIdentityABI, productIdentityContractAddress);

    try {
      const isAuthentic = await productIdentityContract.methods.verifyProduct(web3.utils.asciiToHex(productId)).call();
      setResult(isAuthentic ? 'Authenticated' : 'Counterfeit');
    } catch (error) {
      console.error('Error checking authenticity:', error);
      alert('Error checking authenticity');
    }
  };

  return (
    <div>
      <h2>Check Authenticity</h2>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={checkAuthenticity}>Check</button>
      <p>{result}</p>
    </div>
  );
};

export default CheckAuthenticity;
*//*
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { ProductIdentityABI, productIdentityContractAddress } from './components/abi';

const CheckAuthenticity = () => {
    const [productId, setProductId] = useState('');
    const [result, setResult] = useState('');
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState('');

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const web3Instance = new Web3(window.ethereum);
                    setWeb3(web3Instance);
                    const accounts = await web3Instance.eth.getAccounts();
                    setAccount(accounts[0]);
                } catch (error) {
                    console.error('User denied account access or other issue:', error);
                }
            } else if (window.web3) {
                const web3Instance = new Web3(window.web3.currentProvider);
                setWeb3(web3Instance);
                const accounts = await web3Instance.eth.getAccounts();
                setAccount(accounts[0]);
            } else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        };
        initWeb3();
    }, []);

    const handleChange = (e) => {
        const { value } = e.target;
        setProductId(value);
    };

    const checkAuthenticity = async () => {
        if (!web3) {
            console.error('Web3 has not been initialized.');
            return;
        }

        const productIdentityContract = new web3.eth.Contract(ProductIdentityABI, productIdentityContractAddress);

        try {
            const isAuthentic = await productIdentityContract.methods.verifyProduct(web3.utils.asciiToHex(productId)).call();
            setResult(isAuthentic ? 'Authenticated' : 'Counterfeit');
        } catch (error) {
            console.error('Error checking authenticity:', error);
            alert('Error checking authenticity');
        }
    };

    return (
        <div>
            <h2>Check Authenticity</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>
                    Product ID:
                    <input
                        type="text"
                        value={productId}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={checkAuthenticity}>Check</button>
            </form>
            <p>{result}</p>
        </div>
    );
};

export default CheckAuthenticity;*/
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { ProductIdentityABI, productIdentityContractAddress } from './components/abi';

const CheckAuthenticity = () => {
    const [productId, setProductId] = useState('');
    const [result, setResult] = useState('');
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState('');

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const web3Instance = new Web3(window.ethereum);
                    setWeb3(web3Instance);
                    const accounts = await web3Instance.eth.getAccounts();
                    setAccount(accounts[0]);
                } catch (error) {
                    console.error('User denied account access or other issue:', error);
                }
            } else if (window.web3) {
                const web3Instance = new Web3(window.web3.currentProvider);
                setWeb3(web3Instance);
                const accounts = await web3Instance.eth.getAccounts();
                setAccount(accounts[0]);
            } else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        };
        initWeb3();
    }, []);

    const handleChange = (e) => {
        const { value } = e.target;
        setProductId(value);
    };

    const checkAuthenticity = async () => {
        if (!web3) {
            console.error('Web3 has not been initialized.');
            return;
        }

        const productIdentityContract = new web3.eth.Contract(ProductIdentityABI, productIdentityContractAddress);

        try {
            const isAuthentic = await productIdentityContract.methods.checkAuthenticity(web3.utils.asciiToHex(productId)).call();
            setResult(isAuthentic ? 'Authenticated' : 'Counterfeit');
        } catch (error) {
            console.error('Error checking authenticity:', error);
            alert('Error checking authenticity. Please try again.');
        }
    };

    return (
        <div>
            <h2>Check Authenticity</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>
                    Product ID:
                    <input
                        type="text"
                        value={productId}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={checkAuthenticity}>Check</button>
            </form>
            <p>{result}</p>
        </div>
    );
};

export default CheckAuthenticity;

