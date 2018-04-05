pragma solidity ^0.4.18;

contract HelloEthSalon {
  string message = "I know smart contract testing!!";
  int calc = 2*2;
  
  function HelloEthSalon() {
    // constructor
  }

  function boolCalc() returns (bool) {
    return calc == 4;
  }

  function GetMessage() returns (string) {
    return message;
  }

  function Calc() returns (int) {
    return calc; 
  }

  function Calculate(int first, int second) returns (int) {
    return first*second;
  }
}