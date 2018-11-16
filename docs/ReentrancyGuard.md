# Helps contracts guard against reentrancy attacks. (ReentrancyGuard.sol)

View Source: [openzeppelin-solidity/contracts/utils/ReentrancyGuard.sol](../openzeppelin-solidity/contracts/utils/ReentrancyGuard.sol)

**↘ Derived Contracts: [Crowdsale](Crowdsale.md)**

**ReentrancyGuard**

If you mark a function `nonReentrant`, you should also
mark it `external`.

## Contract Members
**Constants & Variables**

```js
uint256 private _guardCounter;

```

## Modifiers

- [nonReentrant](#nonreentrant)

### nonReentrant

Prevents a contract from calling itself, directly or indirectly.
Calling a `nonReentrant` function from another `nonReentrant`
function is not supported. It is possible to prevent this from happening
by making the `nonReentrant` function external, and make it call a
`private` function that does the actual work.

```js
modifier nonReentrant() internal
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

## Functions

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
