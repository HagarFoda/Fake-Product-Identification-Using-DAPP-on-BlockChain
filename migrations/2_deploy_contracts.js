const Company = artifacts.require("Company");

module.exports = function(deployer) {
  // Pass the address of the owner account as an argument to the constructor
  deployer.deploy(Company, "0xd832B0882B31103dA9d07694d5100E0860ACf8be");
};
