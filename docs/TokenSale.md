# TokenSale.sol

View Source: [Users/biod/Desktop/projects/KuBitXCrowdsale/contracts/TokenSale.sol](../Users/biod/Desktop/projects/KuBitXCrowdsale/contracts/TokenSale.sol)

**↗ Extends: [CappedCrowdsale](CappedCrowdsale.md), [FinalizableCrowdsale](FinalizableCrowdsale.md), [CustomWhitelist](CustomWhitelist.md)**

**TokenSale**

## Constructor

```js
constructor(uint256 _openingTime, uint256 _closingTime) public
```

**Arguments**

## Contract Members
**Constants & Variables**

```js
uint256 public bonus;

```

**Events**

```js
event FundsWithdrawn(address indexed _wallet, uint256  _amount);
event BonusChanged(uint256  _newBonus, uint256  _oldBonus);
```

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _openingTime | uint256 |  | 
| _closingTime | uint256 |  | 

## Functions

- [_preValidatePurchase(address _beneficiary, uint256 _weiAmount)](#_prevalidatepurchase)
- [_getTokenAmount(uint256 weiAmount)](#_gettokenamount)
- [_forwardFunds()](#_forwardfunds)
- [withdrawFunds(uint256 _amount)](#withdrawfunds)
- [withdrawTokens()](#withdrawtokens)
- [changeBonus(uint256 _bonus)](#changebonus)
- [hasClosed()](#hasclosed)

### _preValidatePurchase

⤾ overrides [TimedCrowdsale._preValidatePurchase](TimedCrowdsale.md#_prevalidatepurchase)

```js
function _preValidatePurchase(address _beneficiary, uint256 _weiAmount) internal view whenNotPaused ifWhitelisted 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _beneficiary | address |  | 
| _weiAmount | uint256 |  | 

### _getTokenAmount

⤾ overrides [Crowdsale._getTokenAmount](Crowdsale.md#_gettokenamount)

```js
function _getTokenAmount(uint256 weiAmount) internal view
returns(uint256)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| weiAmount | uint256 |  | 

### _forwardFunds

⤾ overrides [Crowdsale._forwardFunds](Crowdsale.md#_forwardfunds)

```js
function _forwardFunds() internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### withdrawFunds

```js
function withdrawFunds(uint256 _amount) external nonpayable whenNotPaused onlyAdmin 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _amount | uint256 |  | 

### withdrawTokens

```js
function withdrawTokens() public nonpayable whenNotPaused onlyAdmin 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### changeBonus

```js
function changeBonus(uint256 _bonus) external nonpayable whenNotPaused onlyAdmin 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _bonus | uint256 |  | 

### hasClosed

⤾ overrides [TimedCrowdsale.hasClosed](TimedCrowdsale.md#hasclosed)

```js
function hasClosed() public view
returns(bool)
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
