var TestCodersToken = artifacts.require("./TestCodersToken.sol");

// totalSupply tests

contract("TestCodersToken:totalSupply", function () {
    it("totalSupply of 999999 = FALSE", async function () {
      let totalSupply = 999999;
      let contract = await TestCodersToken.deployed();
      let result = await contract.totalSupply.call();
      assert.notEqual(result.valueOf(), totalSupply, "This is not the token's total supply!")
    });
  });

  contract("TestCodersToken:totalSupply", function () {
    it("totalSupply of 1000000 = TRUE", async function () {
      let totalSupply = 1000000;
      let contract = await TestCodersToken.deployed();
      let result = await contract.totalSupply.call();
      assert.equal(result.valueOf(), totalSupply, "This is not the token's total supply!")
    });
  });

  contract("TestCodersToken:totalSupply", function () {
    it("totalSupply of 1000001 = FALSE", async function () {
      let totalSupply = 1000001;
      let contract = await TestCodersToken.deployed();
      let result = await contract.totalSupply.call();
      assert.notEqual(result.valueOf(), totalSupply, "This is not the token's total supply!")
    });
  });

  //contract("TestCodersToken:balanceOf", function () {
  //  it("should return a correct number", async function () {
  //    let contract = await TestCodersToken.deployed();
  //    let result = await contract.balanceOf.call(0x0000000000000000000000000000000000000000);
  //    assert.equal(result.valueOf(), 1000000, "This is not 4!")
  //  });
  //});