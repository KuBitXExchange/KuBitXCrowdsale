# TokenSale (TokenSale.sol)

View Source: [contracts/TokenSale.sol](../contracts/TokenSale.sol)

**↗ Extends: [CappedCrowdsale](CappedCrowdsale.md), [FinalizableCrowdsale](FinalizableCrowdsale.md), [CustomWhitelist](CustomWhitelist.md)**

**TokenSale**

Crowdsale contract for KubitX

## Constructor

```js
constructor(uint256 _openingTime, uint256 _closingTime) public
```

**Arguments**

## Contract Members
**Constants & Variables**

```js
uint256 public bonus;
uint256 public rate;

```

**Events**

```js
event FundsWithdrawn(address indexed _wallet, uint256  _amount);
event BonusChanged(uint256  _newBonus, uint256  _oldBonus);
event RateChanged(uint256  _rate, uint256  _oldRate);
```

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _openingTime | uint256 |  | 
| _closingTime | uint256 |  | 

## Functions

- [withdrawFunds(uint256 _amount)](#withdrawfunds)
- [withdrawTokens()](#withdrawtokens)
- [withdrawERC20(address _token)](#withdrawerc20)
- [changeBonus(uint256 _bonus)](#changebonus)
- [changeRate(uint256 _rate)](#changerate)
- [hasClosed()](#hasclosed)
- [_preValidatePurchase(address _beneficiary, uint256 _weiAmount)](#_prevalidatepurchase)
- [_getTokenAmount(uint256 _weiAmount)](#_gettokenamount)
- [_forwardFunds()](#_forwardfunds)

### withdrawFunds

This feature enables the admins to withdraw Ethers held in this contract.

```js
function withdrawFunds(uint256 _amount) external nonpayable whenNotPaused onlyAdmin 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _amount | uint256 | Amount of Ethers in wei to withdraw. | 

### withdrawTokens

Withdraw the tokens remaining tokens from the contract.

```js
function withdrawTokens() external nonpayable whenNotPaused onlyAdmin 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### withdrawERC20

Enables admins to withdraw accidentally sent ERC20 token to the contract.

```js
function withdrawERC20(address _token) external nonpayable whenNotPaused onlyAdmin 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _token | address |  | 

### changeBonus

Changes the bonus.

```js
function changeBonus(uint256 _bonus) external nonpayable whenNotPaused onlyAdmin 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _bonus | uint256 | The new bonus to set. | 

### changeRate

Changes the rate.

```js
function changeRate(uint256 _rate) external nonpayable whenNotPaused onlyAdmin 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _rate | uint256 | The new rate to set. | 

### hasClosed

⤾ overrides [TimedCrowdsale.hasClosed](TimedCrowdsale.md#hasclosed)

Checks if the crowdsale has closed.

```js
function hasClosed() public view
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### _preValidatePurchase

⤾ overrides [TimedCrowdsale._preValidatePurchase](TimedCrowdsale.md#_prevalidatepurchase)

This is called before determining the token amount.

```js
function _preValidatePurchase(address _beneficiary, uint256 _weiAmount) internal view whenNotPaused ifWhitelisted 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _beneficiary | address | Contributing address of ETH | 
| _weiAmount | uint256 | ETH contribution | 

### _getTokenAmount

⤾ overrides [Crowdsale._getTokenAmount](Crowdsale.md#_gettokenamount)

Returns the number of tokens for ETH

```js
function _getTokenAmount(uint256 _weiAmount) internal view
returns(uint256)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _weiAmount | uint256 | ETH contribution | 

### _forwardFunds

⤾ overrides [Crowdsale._forwardFunds](Crowdsale.md#_forwardfunds)

overrided to store the funds in the contract itself

```js
function _forwardFunds() internal nonpayable
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
