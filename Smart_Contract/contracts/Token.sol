// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.14;
contract Token{
    string public name = "DApp Token";
    string public symbol = "DAPP";
    uint256 public decimals = 18;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transafer(address indexed from , address indexed to , uint256 value);
    event  Approval(address indexed owner,address indexed spender,uint256 value);

    constructor() {
        totalSupply = 1000000*(10**decimals);
        balanceOf[msg.sender] = totalSupply;
    }
    function transfer(address _to,uint256 _value) public returns(bool){
        require(balanceOf[msg.sender] >= _value);
        _transfer(msg.sender, _to, _value);
        return true;
    }
    function _transfer(address _from ,address _to , uint256 _value) internal{
        require(_to != address(0));
         balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        emit Transafer(msg.sender, _to, _value); 
    }
    // Approve tokens
     function approve(address _spender,uint256 _value) public returns (bool success){
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
     }
    // Transfer from
    function transferFrom(address _from , address _to ,uint256 _value) public returns(bool success){
        allowance[_from][msg.sender] = allowance[_from][msg.sender] - _value;
       _transfer(_from, _to, _value);
       return true;
    }


}