# FinalizableCrowdsale (FinalizableCrowdsale.sol)

View Source: [openzeppelin-solidity/contracts/crowdsale/distribution/FinalizableCrowdsale.sol](../openzeppelin-solidity/contracts/crowdsale/distribution/FinalizableCrowdsale.sol)

**↗ Extends: [TimedCrowdsale](TimedCrowdsale.md)**
**↘ Derived Contracts: [TokenSale](TokenSale.md)**

**FinalizableCrowdsale**

Extension of Crowdsale with a one-off finalization action, where one
can do extra work after finishing.

## Contract Members
**Constants & Variables**

```js
bool private _finalized;

```

**Events**

```js
event CrowdsaleFinalized();
```

## Functions

- [finalized()](#finalized)
- [finalize()](#finalize)
- [_finalization()](#_finalization)

### finalized

```js
function finalized() public view
returns(bool)
```

**Returns**

true if the crowdsale is finalized, false otherwise.

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### finalize

Must be called after crowdsale ends, to do some extra finalization
work. Calls the contract's finalization function.

```js
function finalize() public nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### _finalization

Can be overridden to add finalization logic. The overriding function
should call super._finalization() to ensure the chain of finalization is
executed entirely.

```js
function _finalization() internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

## Contracts

* [CappedCrowdsale](CappedCrowdsale.md)
* [Crowdsale](Crowdsale.md)
* [CustomAdmin](CustomAdmin.md)
* [CustomPausable](CustomPausable.md)
* [CustomWhitelist](CustomWhitelist.md)
* [FinalizableCrowdsale](FinalizableCrowdsale.md)
* [IERC20](IERC20.md)
* [Migrations](Migrations.md)
* [Ownable](Ownable.md)
* [ReentrancyGuard](ReentrancyGuard.md)
* [SafeERC20](SafeERC20.md)
* [SafeMath](SafeMath.md)
* [TimedCrowdsale](TimedCrowdsale.md)
* [TokenSale](TokenSale.md)
