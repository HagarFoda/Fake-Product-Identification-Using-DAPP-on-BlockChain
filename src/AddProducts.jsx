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

/*Marwa

const AddProducts = ({ contract }) => {
  const [candidateData, setCandidateData] = useState({
    ownerAddress: '',
    productHashes: '',
    account: ''
  });

const handleChange = (e) => {
  const { name, value } = e.target;
  setCandidateData(prevState => ({
      ...prevState,
      [name]: value
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      await contract.methods.addCandidate(
          candidateData.ownerAddress,
          candidateData.productHashes,
          candidateData.account
      ).send({ from: window.ethereum.selectedAddress });
      alert('Candidate added successfully!');
  } catch (error) {
      console.error('Error adding candidate:', error);
      alert('Error adding candidate. Please try again.');
  }
};
};
return (
  <div>
      <h2>Admin Page</h2>
      <form onSubmit={handleSubmit}>
          <label>
          ownerAddress:
              <input type="text" name="firstName" value={candidateData.ownerAddress} onChange={handleChange} />
          </label>
          <label>
          productHashes:
              <input type="text" name="lastName" value={candidateData.productHashes} onChange={handleChange} />
          </label>
          <label>
          account:
              <input type="text" name="idNumber" value={candidateData.account} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
      </form>
  </div>
);
export default AddProducts;
*/
/*
import React, { useState } from 'react';
import Web3 from 'web3';
import { CompanyABI, companyContractAddress } from './components/abi';

const AddProducts = () => {
  const [ownerAddress, setOwnerAddress] = useState('');
  const [productHashes, setProductHashes] = useState('');

  const addProducts = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const companyContract = new web3.eth.Contract(CompanyABI, companyContractAddress);

    const productArray = productHashes.split(',').map(hash => parseInt(hash.trim()));

    try {
      await companyContract.methods.addProducts(ownerAddress, productArray).send({ from: accounts[0] });
      alert('Products added successfully');
    } catch (error) {
      console.error(error);
      alert('Error adding products');
    }
  };

  return (
    <div>
      <h2>Add Products</h2>
      <input type="text" placeholder="Owner Address" value={ownerAddress} onChange={(e) => setOwnerAddress(e.target.value)} />
      <input type="text" placeholder="Product Hashes (comma separated)" value={productHashes} onChange={(e) => setProductHashes(e.target.value)} />
      <button onClick={addProducts}>Add Products</button>
    </div>
  );
};

export default AddProducts;

/*
the working one
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { CompanyABI, contractAddress } from './components/abi';
import { companyContractAddress } from './components/config';


const AddProducts = () => {
  const [ownerAddress, setOwnerAddress] = useState('');
  const [productHashes, setProductHashes] = useState('');
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

  const addProducts = async () => {
    if (!web3) {
      console.error('Web3 has not been initialized.');
      return;
    }

    const companyContract = new web3.eth.Contract(CompanyABI, companyContractAddress);

    const productArray = productHashes.split(',').map(hash => hash.trim());

    try {
      await companyContract.methods.addProducts(ownerAddress, productArray).send({ from: account });
      alert('Products added successfully');
    } catch (error) {
      console.error('Error adding products:', error);
      alert('Error adding products');
    }
  };

  return (
    <div>
      <h2>Add Products</h2>
      <input
        type="text"
        placeholder="Owner Address"
        value={ownerAddress}
        onChange={(e) => setOwnerAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Hashes (comma separated)"
        value={productHashes}
        onChange={(e) => setProductHashes(e.target.value)}
      />
      <button onClick={addProducts}>Add Products</button>
    </div>
  );
};

export default AddProducts;


/*
*/
