/*
contract ProductIdentity {
    address public owner;
    uint public last_completed_migration;
 
    constructor () {
        owner = msg.sender;
    }

    struct Product {
        bytes32 productId; // Unique identifier for the product
        address manufacturer; // Address of the manufacturer
        bool isValid; // Flag to indicate if the product is valid
        address currentOwner; // Address of the current owner of the product
    }

    mapping(bytes32 => Product) public products;

    // Event emitted when a product ownership transfer occurs
    event ProductTransferred(bytes32 indexed productId, address indexed previousOwner, address indexed newOwner);

    // Modifier to restrict access to the owner of the contract
    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function");
        _;
    }

    // Function to register a product
    function registerProduct(bytes32 _productId, address _manufacturer) public {
        require(products[_productId].manufacturer == address(0), "Product with the same ID already exists");

        Product memory newProduct;
        newProduct.productId = _productId;
        newProduct.manufacturer = _manufacturer;
        newProduct.isValid = true;
        newProduct.currentOwner = address(0); // Assuming no initial owner

        products[_productId] = newProduct;
    }

    // Function to transfer ownership of a product
    function transferProductOwnership(bytes32 _productId, address _newOwner) public {
        require(products[_productId].currentOwner == msg.sender, "You are not the owner of this product");
        products[_productId].currentOwner = _newOwner;
        emit ProductTransferred(_productId, msg.sender, _newOwner);
    }

    // Function to check if a product is authentic
    function verifyProduct(bytes32 _productId) public view returns (bool) {
        return products[_productId].manufacturer != address(0) && products[_productId].isValid;
    }

    
}
*/
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ProductIdentity {
    address public owner;
    uint public last_completed_migration;

    constructor () {
        owner = msg.sender;
    }

    struct Product {
        bytes32 productId; // Unique identifier for the product
        address manufacturer; // Address of the manufacturer
        bool isValid; // Flag to indicate if the product is valid
        address currentOwner; // Address of the current owner of the product
        address verifyResult;
    }

    mapping(bytes32 => Product) public products;

    // Event emitted when a product ownership transfer occurs
    event ProductTransferred(bytes32 indexed productId, address indexed previousOwner, address indexed newOwner);

    // Modifier to restrict access to the owner of the contract
    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function");
        _;
    }

    // Function to register a product
    function registerProduct(bytes32 _productId, address _manufacturer) public {
        require(products[_productId].manufacturer == address(0), "Product with the same ID already exists");

        Product memory newProduct;
        //newProduct.productId = _productId;
        newProduct.manufacturer = _manufacturer;
        newProduct.isValid = true;
        newProduct.currentOwner = address(0); // Assuming no initial owner

        products[_productId] = newProduct;
    }

    // Function to transfer ownership of a product
    function transferProductOwnership(bytes32 _productId, address _newOwner) public {
        require(products[_productId].currentOwner == msg.sender, "You are not the owner of this product");
        products[_productId].currentOwner = _newOwner;
        emit ProductTransferred(_productId, msg.sender, _newOwner);
    }

    // Function to check if a product is authentic
    /*function verifyProduct(bytes32 _productId) public view returns (string memory) {
        if (products[_productId].isValid) {
            return "Authenticated";
        } else {
            return "Counterfeit";
        }
    function verifyProducts(bytes32 _productId) public view returns (bool) {
    return products[_productId].manufacturer != address(0) && products[_productId].isValid;

    }*/

    // Function to register a product
    function verifyProduct(bytes32 _productId, address _verifyResult) public {
        require(products[_productId].verifyResult == address(0), "Product with the same ID already exists");

        Product memory newProduct;
        newProduct.productId = _productId;
        newProduct.verifyResult = _verifyResult;
        newProduct.isValid = true;
        newProduct.currentOwner = address(0); // Assuming no initial owner

        products[_productId] = newProduct;
    }
}
