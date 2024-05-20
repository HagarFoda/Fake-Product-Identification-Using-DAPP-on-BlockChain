// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Company {
    // Storage for products
    mapping(uint256 => bool) public hashcodeToTrue;
    mapping(bytes32 => Product) public products;

    // Events
    event ProductRegistered(bytes32 indexed productId, address manufacturer);

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    struct Product {
        bytes32 productId;
        address manufacturer;
        bool isValid;
        address currentOwner;
        address verifyResult;

    }

    // Function to register a product
    function registerProducts(address _ownerAddress, uint256[] memory _products)
    public
    onlyOwner
    returns (string memory)
    {
    require(_ownerAddress == owner, "Caller is not the owner");
    
    for (uint256 i = 0; i < _products.length; i++) {
        hashcodeToTrue[_products[i]] = true;
        // Add logic to associate owner with products (if needed)
    }

    return "Products registered successfully";
    }


    // Function to verify product authenticity
    function CheckAuthenticity(bytes32 _productId) public view returns (string memory) {
        if (products[_productId].isValid) {
            return "Authenticated";
        } else {
            return "Counterfeit";
        }
    }


    // Function to check if a product is authentic
    /*function verifyProduct(bytes32 _productId) public view returns (string memory) {
        if (products[_productId].isValid) {
            return "Authenticated";
        } else {
            return "Counterfeit";
        }
    */
    // Other functions (addProducts, removeProduct, getProductCount)...

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
