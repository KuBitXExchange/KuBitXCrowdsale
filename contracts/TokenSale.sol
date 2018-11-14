pragma solidity ^0.4.22;
import "openzeppelin-solidity/contracts/crowdsale/distribution/FinalizableCrowdsale.sol";
import "openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "./CustomWhitelist.sol";


contract TokenSale is CappedCrowdsale, FinalizableCrowdsale, CustomWhitelist {
  using SafeMath for uint256;

  event FundsWithdrawn(address indexed _wallet, uint256 _amount);
  event BonusChanged(uint256 _newBonus, uint256 _oldBonus);

  uint256 public bonus;

  constructor(uint256 _openingTime,
    uint256 _closingTime,
    uint256 _rate,
    address _wallet,
    IERC20 _token,
    uint256 _bonus,
    uint256 _cap)
    public
    TimedCrowdsale(_openingTime, _closingTime) CappedCrowdsale(_cap) Crowdsale(_rate, _wallet, _token) {
    require(_bonus > 0, "Bonus must be greater than 0");
    bonus = _bonus;
  }

  function withdrawFunds(uint256 _amount) external whenNotPaused onlyAdmin {
    require(_amount <= address(this).balance, "amount should be less than the balance");
    msg.sender.transfer(_amount);
    emit FundsWithdrawn(msg.sender, _amount);
  }

  function withdrawTokens() external whenNotPaused onlyAdmin {
    IERC20 t = super.token();
    t.safeTransfer(msg.sender, t.balanceOf(this));
  }

  function changeBonus(uint256 _bonus) external whenNotPaused onlyAdmin {
    require(_bonus > 0, "Bonus must be greater than 0");
    emit BonusChanged(_bonus, bonus);
    bonus = _bonus;
  }

  function hasClosed() public view returns (bool) {
    return super.hasClosed() || super.capReached();
  }

  function _preValidatePurchase(address _beneficiary, uint256 _weiAmount) internal view
      whenNotPaused ifWhitelisted(_beneficiary) {
    super._preValidatePurchase(_beneficiary, _weiAmount);
  }

  function _getTokenAmount(uint256 weiAmount) internal view returns (uint256) {
    uint256 tokenAmount = super._getTokenAmount(weiAmount);
    uint256 bonusTokens = tokenAmount.mul(bonus).div(100);
    return tokenAmount.add(bonusTokens);
  }

  function _forwardFunds() internal {

  }

}
