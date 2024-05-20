import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { ProductIdentityABI, productIdentityContractAddress } from './components/abi';

const TransferOwnership = () => {
  const [productId, setProductId] = useState('');
  const [newOwner, setNewOwner] = useState('');
  const [contract, setContract] = useState(null);

    // Initialize Web3 and contract
    const initWeb3 = async () => {
      if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
          const companyContract = new web3.eth.Contract(ProductIdentityABI, productIdentityContractAddress);
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
    if (name === 'productId') setProductId(value);
    if (name === 'newOwner') setNewOwner(value);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      //const productHashArray = productHashes.split(',').map(hash => hash.trim());

      await contract.methods.addProducts(productId, newOwner).send({ from: accounts[0] });
      alert('Product ownership transferred successfully!');
  } catch (error) {
      console.error('Error transferring products:', error);
      alert('Error transferring products. Please try again.');
  }
};
/*
  return (
    <div>
      <h2>Transfer Ownership</h2>
      <input type="text" placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
      <input type="text" placeholder="New Owner Address" value={newOwner} onChange={(e) => setNewOwner(e.target.value)} />
      <button onClick={transferOwnership}>Transfer</button>
    </div>
  );
};*/

return (
  <div>
      <h2>Transfer Ownership</h2>
      <form onSubmit={handleSubmit}>
          <label>
              Product ID:
              <input type="text" name="productId" value={productId} onChange={handleChange} />
          </label>
          <label>
              New Owner Address :
              <input type="text" name="newOwner" value={newOwner} onChange={handleChange} />
          </label>
          <button type="submit">Transfere Ownership</button>
      </form>
  </div>
);
};
export default TransferOwnership;
