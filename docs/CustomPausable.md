# This contract enables you to create pausable mechanism to stop in case of emergency. (CustomPausable.sol)

View Source: [contracts/CustomPausable.sol](../contracts/CustomPausable.sol)

**↗ Extends: [CustomAdmin](CustomAdmin.md)**
**↘ Derived Contracts: [CustomWhitelist](CustomWhitelist.md)**

**CustomPausable**

## Contract Members
**Constants & Variables**

```js
bool public paused;

```

**Events**

```js
event Paused();
event Unpaused();
```

## Modifiers

- [whenNotPaused](#whennotpaused)
- [whenPaused](#whenpaused)

### whenNotPaused

Verifies whether the contract is not paused.

```js
modifier whenNotPaused() internal
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### whenPaused

Verifies whether the contract is paused.

```js
modifier whenPaused() internal
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

## Functions

- [pause()](#pause)
- [unpause()](#unpause)

### pause

Pauses the contract.

```js
function pause() external nonpayable onlyAdmin whenNotPaused 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### unpause

Unpauses the contract and returns to normal state.

```js
function unpause() external nonpayable onlyAdmin whenPaused 
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
