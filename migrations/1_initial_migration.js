const Migrations = artifacts.require("./Migrations.sol"); const TestCodersToken
= artifacts.require("./TestCodersToken.sol");

module.exports = function(deployer) { deployer.deploy(Migrations);
deployer.deploy(TestCodersToken); };
