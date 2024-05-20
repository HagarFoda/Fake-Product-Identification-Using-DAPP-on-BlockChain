// abi.js

/*export const companyContractAddress = '0xd832B0882B31103dA9d07694d5100E0860ACf8be';
export const productIdentityContractAddress = '0xE8aE64fC56c7a332D630A921F28CBC47bAFf6BAe';

export const CompanyABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_ownerAddress",
                "type": "address"
            },
            {
                "name": "_products",
                "type": "uint256[]"
            }
        ],
        "name": "addProducts",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
];

export const ProductIdentityABI = [
    {
        "constant": true,
        "inputs": [{"name": "_productId", "type": "bytes32"}],
        "name": "verifyProduct",
        "outputs": [{"name": "", "type": "string"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
    
        "constant": false,
        "inputs": [
            {
                "name": "_productId",
                "type": "bytes32"
            },
            {
                "name": "_manufacturer",
                "type": "address"
            }
        ],
        "name": "registerProduct",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
];
*/
// abi.js

export const companyContractAddress = '0xd832B0882B31103dA9d07694d5100E0860ACf8be';
export const productIdentityContractAddress = '0xE8aE64fC56c7a332D630A921F28CBC47bAFf6BAe';

export const CompanyABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_ownerAddress",
                "type": "address"
            },
            {
                "name": "_products",
                "type": "uint256[]"
            }
        ],
        "name": "addProducts",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_productId",
                "type": "bytes32"
            }
        ],
        "name": "verifyProduct",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export const ProductIdentityABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_productId",
                "type": "bytes32"
            }, 
            {
                "name": "_verifyResult",
                "type": "address"
            }

        ],
        "name": "verifyProduct",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },

    {
        "constant": false,
        "inputs": [
            {
                "name": "_productId",
                "type": "bytes32"
            }, 
            {
                "name": "_newOwner",
                "type": "address"
            }

        ],
        "name": "transferProductOwnership",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },


    {
        "constant": false,
        "inputs": [
            {
                "name": "_productId",
                "type": "bytes32"
            },
            
            {
                "name": "_manufacturer",
                "type": "address"
            }
        ],
        "name": "registerProduct",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
