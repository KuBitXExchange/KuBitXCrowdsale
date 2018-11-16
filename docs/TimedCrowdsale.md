# TimedCrowdsale (TimedCrowdsale.sol)

View Source: [openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol](../openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol)

**↗ Extends: [Crowdsale](Crowdsale.md)**
**↘ Derived Contracts: [FinalizableCrowdsale](FinalizableCrowdsale.md)**

**TimedCrowdsale**

Crowdsale accepting contributions only within a time frame.

## Contract Members
**Constants & Variables**

```js
uint256 private _openingTime;
uint256 private _closingTime;

```

## Modifiers

- [onlyWhileOpen](#onlywhileopen)

### onlyWhileOpen

Reverts if not in crowdsale time range.

```js
modifier onlyWhileOpen() internal
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

## Functions

- [openingTime()](#openingtime)
- [closingTime()](#closingtime)
- [isOpen()](#isopen)
- [hasClosed()](#hasclosed)
- [_preValidatePurchase(address beneficiary, uint256 weiAmount)](#_prevalidatepurchase)

### openingTime

```js
function openingTime() public view
returns(uint256)
```

**Returns**

the crowdsale opening time.

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### closingTime

```js
function closingTime() public view
returns(uint256)
```

**Returns**

the crowdsale closing time.

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### isOpen

```js
function isOpen() public view
returns(bool)
```

**Returns**

true if the crowdsale is open, false otherwise.

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### hasClosed

⤿ Overridden Implementation(s): [TokenSale.hasClosed](TokenSale.md#hasclosed)

Checks whether the period in which the crowdsale is open has already elapsed.

```js
function hasClosed() public view
returns(bool)
```

**Returns**

Whether crowdsale period has elapsed

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### _preValidatePurchase

⤾ overrides [Crowdsale._preValidatePurchase](Crowdsale.md#_prevalidatepurchase)

⤿ Overridden Implementation(s): [TokenSale._preValidatePurchase](TokenSale.md#_prevalidatepurchase)

Extend parent behavior requiring to be within contributing period

```js
function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view onlyWhileOpen 
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
