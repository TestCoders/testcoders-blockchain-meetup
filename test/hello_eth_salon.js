var HelloEthSalon = artifacts.require("./HelloEthSalon.sol");

contract("HelloEthSalon:GetMessage", function () {
  it("should return a correct string", async function () {
    const contract = await HelloEthSalon.deployed();
    const result = await contract.GetMessage.call();
    assert.isTrue(result === "I know smart contract testing!!");
  });
});

contract("HelloEthSalon:Calc", function () {
  it("should return a correct number", async function () {
    let contract = await HelloEthSalon.deployed();
    let result = await contract.Calc.call();
    assert.equal(result.valueOf(), 4, "This is not 4!")
  });
});

contract("HelloEthSalon:boolCalc", function () {
  it("should return true of false", async function () {
    let contract = await HelloEthSalon.deployed();
    let result = await contract.boolCalc.call();
    assert.isTrue(result === true, "This is not 4!")
  });
});

contract("HelloEthSalon:Calculate", function () {
  it("should return right value", async function () {
    let first = 2;
    let second = 2;
    let outcome = 4;
    let contract = await HelloEthSalon.deployed();
    let result = await contract.Calculate.call(first, second);
    assert.equal(result.valueOf(), outcome, "This is not " + outcome + "!")
  });
});