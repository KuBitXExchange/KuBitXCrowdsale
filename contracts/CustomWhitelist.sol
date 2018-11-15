/*
Copyright 2018 Binod Nirvan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */

pragma solidity 0.4.24;
import "./CustomPausable.sol";


///@title This contract enables to maintain a list of whitelisted wallets.
contract CustomWhitelist is CustomPausable {
  mapping(address => bool) public whitelist;

  event WhitelistAdded(address indexed _account);
  event WhitelistRemoved(address indexed _account);

  ///@notice Verifies if the account is whitelisted.
  modifier ifWhitelisted(address _account) {
    require(_account != address(0), "Account cannot be zero address");
    require(isWhitelisted(_account), "Account is not whitelisted");

    _;
  }

  ///@notice Adds an account to the whitelist.
  ///@param _account The wallet address to add to the whitelist.
  function addWhitelist(address _account) external whenNotPaused onlyAdmin returns(bool) {
    require(_account != address(0), "Account cannot be zero address");

    if(!whitelist[_account]) {
      whitelist[_account] = true;

      emit WhitelistAdded(_account);
    }

    return true;
  }

  ///@notice Adds multiple accounts to the whitelist.
  ///@param _accounts The wallet addresses to add to the whitelist.
  function addManyWhitelist(address[] _accounts) external whenNotPaused onlyAdmin returns(bool) {
    for(uint8 i = 0;i < _accounts.length;i++) {
      if(_accounts[i] != address(0) && !whitelist[_accounts[i]]) {
        whitelist[_accounts[i]] = true;

        emit WhitelistAdded(_accounts[i]);
      }
    }

    return true;
  }

  ///@notice Removes an account from the whitelist.
  ///@param _account The wallet address to remove from the whitelist.
  function removeWhitelist(address _account) external whenNotPaused onlyAdmin returns(bool) {
    require(_account != address(0), "Account cannot be zero address");
    if(whitelist[_account]) {
      whitelist[_account] = false;
      emit WhitelistRemoved(_account);
    }

    return true;
  }

  ///@notice Removes multiple accounts from the whitelist.
  ///@param _accounts The wallet addresses to remove from the whitelist.
  function removeManyWhitelist(address[] _accounts) external whenNotPaused onlyAdmin returns(bool) {
    for(uint8 i = 0;i < _accounts.length;i++) {
      if(_accounts[i] != address(0) && whitelist[_accounts[i]]) {
        whitelist[_accounts[i]] = false;

        emit WhitelistRemoved(_accounts[i]);
      }
    }
    
    return true;
  }

  ///@notice Checks if an address is whitelisted.
  function isWhitelisted(address _address) public view returns(bool) {
    return whitelist[_address];
  }
}
