/*
Copyright 2018 Subramanian Venkatesan, Binod Nirvan

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
pragma solidity ^0.4.22;
import "openzeppelin-solidity/contracts/crowdsale/distribution/FinalizableCrowdsale.sol";
import "openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "./CustomWhitelist.sol";


/**
 * @title TokenSale
 * @dev Crowdsale contract for KubitX
 */
contract TokenSale is CappedCrowdsale, FinalizableCrowdsale, CustomWhitelist {
  event FundsWithdrawn(address indexed _wallet, uint256 _amount);
  event BonusChanged(uint256 _newBonus, uint256 _oldBonus);
  event RateChanged(uint256 _rate, uint256 _oldRate);

  uint256 public bonus;
  uint256 public rate;

  constructor(uint256 _openingTime,
    uint256 _closingTime,
    uint256 _rate,
    address _wallet,
    IERC20 _token,
    uint256 _bonus,
    uint256 _cap)
  public 
  TimedCrowdsale(_openingTime, _closingTime) 
  CappedCrowdsale(_cap) 
  Crowdsale(_rate, _wallet, _token) {
    require(_bonus > 0, "Bonus must be greater than 0");
    bonus = _bonus;
    rate = _rate;
  }

  ///@notice This feature enables the admins to withdraw Ethers held in this contract.
  ///@param _amount Amount of Ethers in wei to withdraw.
  function withdrawFunds(uint256 _amount) external whenNotPaused onlyAdmin {
    require(_amount <= address(this).balance, "The amount should be less than the balance/");
    msg.sender.transfer(_amount);
    emit FundsWithdrawn(msg.sender, _amount);
  }

  ///@notice Withdraw the tokens remaining tokens from the contract.
  function withdrawTokens() external whenNotPaused onlyAdmin {
    IERC20 t = super.token();
    t.safeTransfer(msg.sender, t.balanceOf(this));
  }

  ///@notice Enables admins to withdraw accidentally sent ERC20 token to the contract.
  function withdrawERC20(address _token) external whenNotPaused onlyAdmin {
    IERC20 erc20 = IERC20(_token);
    uint256 balance = erc20.balanceOf(this);

    erc20.safeTransfer(msg.sender, balance);
  }

  ///@notice Changes the bonus.
  ///@param _bonus The new bonus to set.
  function changeBonus(uint256 _bonus) external whenNotPaused onlyAdmin {
    require(_bonus > 0, "Bonus must be greater than 0");
    emit BonusChanged(_bonus, bonus);
    bonus = _bonus;
  }

  ///@notice Changes the rate.
  ///@param _rate The new rate to set.
  function changeRate(uint256 _rate) external whenNotPaused onlyAdmin {
    require(_rate > 0, "Rate must be greater than 0");
    emit RateChanged(_rate, rate);
    rate = _rate;
  }

  ///@notice Checks if the crowdsale has closed.
  function hasClosed() public view returns (bool) {
    return super.hasClosed() || super.capReached();
  }

  ///@notice This is called before determining the token amount.
  ///@param _beneficiary Contributing address of ETH
  ///@param _weiAmount ETH contribution
  function _preValidatePurchase(address _beneficiary, uint256 _weiAmount) 
  internal view whenNotPaused ifWhitelisted(_beneficiary) {
    super._preValidatePurchase(_beneficiary, _weiAmount);
  }

  ///@notice Returns the number of tokens for ETH
  ///@param _weiAmount ETH contribution
  function _getTokenAmount(uint256 _weiAmount) internal view returns (uint256) {
    uint256 tokenAmount = _weiAmount.mul(rate);
    uint256 bonusTokens = tokenAmount.mul(bonus).div(100);
    return tokenAmount.add(bonusTokens);
  }

  ///@notice overrided to store the funds in the contract itself
  //solhint-disable-next-line
  function _forwardFunds() internal {
    //nothing to do here
  }
}