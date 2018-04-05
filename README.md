# testcoders-blockchain-meetup

## Getting started
Make sure you have `truffle` and `testrpc` installed
```bash
npm install -g truffle ethereumjs-testrpc
```

`cd` into the repository directory and run the following command to create build artifacts for the smart contract:
```bash
truffle deploy
```

after that, you can run the tests using the following command:
```bash
truffle test
```

## Create smart contract
```bash
truffle create contract HelloWorld
```

### Example contract
```js
pragma solidity ^0.4.4;

contract HelloWorld {
    string message = "Hello World!!";

    function HelloWorld() {
        // constructor
    }

    function GetMessage() returns (string) {
        return message;
    }
}
```

## Creating tests
```bash
truffle create test HelloWorld
```

### Example test
```js
const HelloWorld = artifacts.require('./HelloWorld.sol');

contract('HelloWorld:GetMessage', (accounts) => {
  it('Should return a correct string', async () => {
    let contract = await HelloWorld.deployed();
    let result = await contract.GetMessage.call();
    assert.isTrue(result === 'Hello World!!');
  });
});

```
