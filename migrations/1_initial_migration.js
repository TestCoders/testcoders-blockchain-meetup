var Migrations = artifacts.require("./Migrations.sol");
var HelloEthSalon = artifacts.require('./HelloEthSalon.sol');
var TestCodersToken = artifacts.require("./TestCodersToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(HelloEthSalon);
  deployer.deploy(TestCodersToken);
};
