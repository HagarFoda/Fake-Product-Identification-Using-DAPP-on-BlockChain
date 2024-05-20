const ProductIdentity = artifacts.require("ProductIdentity");

module.exports = function(deployer) {
  deployer.deploy(ProductIdentity);
};
