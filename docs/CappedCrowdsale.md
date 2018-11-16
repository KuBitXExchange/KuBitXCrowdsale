# CappedCrowdsale (CappedCrowdsale.sol)

View Source: [openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol](../openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol)

**↗ Extends: [Crowdsale](Crowdsale.md)**
**↘ Derived Contracts: [TokenSale](TokenSale.md)**

**CappedCrowdsale**

Crowdsale with a limit for total contributions.

## Contract Members
**Constants & Variables**

```js
uint256 private _cap;

```

## Functions

- [cap()](#cap)
- [capReached()](#capreached)
- [_preValidatePurchase(address beneficiary, uint256 weiAmount)](#_prevalidatepurchase)

### cap

```js
function cap() public view
returns(uint256)
```

**Returns**

the cap of the crowdsale.

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### capReached

Checks whether the cap has been reached.

```js
function capReached() public view
returns(bool)
```

**Returns**

Whether the cap was reached

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### _preValidatePurchase

⤾ overrides [Crowdsale._preValidatePurchase](Crowdsale.md#_prevalidatepurchase)

Extend parent behavior requiring purchase to respect the funding cap.

```js
function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| beneficiary | address | Token purchaser | 
| weiAmount | uint256 | Amount of wei contributed | 

## Contracts

* [CappedCrowdsale](CappedCrowdsale.md)
* [Crowdsale](Crowdsale.md)
* [CustomAdmin](CustomAdmin.md)
* [CustomPausable](CustomPausable.md)
* [CustomWhitelist](CustomWhitelist.md)
* [ERC20](ERC20.md)
* [ERC20Mock](ERC20Mock.md)
* [FinalizableCrowdsale](FinalizableCrowdsale.md)
* [IERC20](IERC20.md)
* [Migrations](Migrations.md)
* [Ownable](Ownable.md)
* [ReentrancyGuard](ReentrancyGuard.md)
* [SafeERC20](SafeERC20.md)
* [SafeMath](SafeMath.md)
* [TimedCrowdsale](TimedCrowdsale.md)
* [TokenSale](TokenSale.md)
