# Crowdsale (Crowdsale.sol)

View Source: [openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol](../openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol)

**↗ Extends: [ReentrancyGuard](ReentrancyGuard.md)**
**↘ Derived Contracts: [CappedCrowdsale](CappedCrowdsale.md), [TimedCrowdsale](TimedCrowdsale.md)**

**Crowdsale**

Crowdsale is a base contract for managing a token crowdsale,
allowing investors to purchase tokens with ether. This contract implements
such functionality in its most fundamental form and can be extended to provide additional
functionality and/or custom behavior.
The external interface represents the basic interface for purchasing tokens, and conform
the base architecture for crowdsales. They are *not* intended to be modified / overridden.
The internal interface conforms the extensible and modifiable surface of crowdsales. Override
the methods to add functionality. Consider using 'super' where appropriate to concatenate
behavior.

## Contract Members
**Constants & Variables**

```js
contract IERC20 private _token;
address private _wallet;
uint256 private _rate;
uint256 private _weiRaised;

```

**Events**

```js
event TokensPurchased(address indexed purchaser, address indexed beneficiary, uint256  value, uint256  amount);
```

## Functions

- [()](#)
- [token()](#token)
- [wallet()](#wallet)
- [rate()](#rate)
- [weiRaised()](#weiraised)
- [buyTokens(address beneficiary)](#buytokens)
- [_preValidatePurchase(address beneficiary, uint256 weiAmount)](#_prevalidatepurchase)
- [_postValidatePurchase(address beneficiary, uint256 weiAmount)](#_postvalidatepurchase)
- [_deliverTokens(address beneficiary, uint256 tokenAmount)](#_delivertokens)
- [_processPurchase(address beneficiary, uint256 tokenAmount)](#_processpurchase)
- [_updatePurchasingState(address beneficiary, uint256 weiAmount)](#_updatepurchasingstate)
- [_getTokenAmount(uint256 weiAmount)](#_gettokenamount)
- [_forwardFunds()](#_forwardfunds)

### 

fallback function ***DO NOT OVERRIDE***
Note that other contracts will transfer fund with a base gas stipend
of 2300, which is not enough to call buyTokens. Consider calling
buyTokens directly when purchasing tokens from a contract.

```js
function () external payable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### token

```js
function token() public view
returns(contract IERC20)
```

**Returns**

the token being sold.

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### wallet

```js
function wallet() public view
returns(address)
```

**Returns**

the address where funds are collected.

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### rate

```js
function rate() public view
returns(uint256)
```

**Returns**

the number of token units a buyer gets per wei.

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### weiRaised

```js
function weiRaised() public view
returns(uint256)
```

**Returns**

the amount of wei raised.

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### buyTokens

low level token purchase ***DO NOT OVERRIDE***
This function has a non-reentrancy guard, so it shouldn't be called by
another `nonReentrant` function.

```js
function buyTokens(address beneficiary) public payable nonReentrant 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| beneficiary | address | Recipient of the token purchase | 

### _preValidatePurchase

⤿ Overridden Implementation(s): [CappedCrowdsale._preValidatePurchase](CappedCrowdsale.md#_prevalidatepurchase),[TimedCrowdsale._preValidatePurchase](TimedCrowdsale.md#_prevalidatepurchase),[TokenSale._preValidatePurchase](TokenSale.md#_prevalidatepurchase)

Validation of an incoming purchase. Use require statements to revert state when conditions are not met. Use `super` in contracts that inherit from Crowdsale to extend their validations.
Example from CappedCrowdsale.sol's _preValidatePurchase method:
  super._preValidatePurchase(beneficiary, weiAmount);
  require(weiRaised().add(weiAmount) <= cap);

```js
function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| beneficiary | address | Address performing the token purchase | 
| weiAmount | uint256 | Value in wei involved in the purchase | 

### _postValidatePurchase

Validation of an executed purchase. Observe state and use revert statements to undo rollback when valid conditions are not met.

```js
function _postValidatePurchase(address beneficiary, uint256 weiAmount) internal view
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| beneficiary | address | Address performing the token purchase | 
| weiAmount | uint256 | Value in wei involved in the purchase | 

### _deliverTokens

Source of tokens. Override this method to modify the way in which the crowdsale ultimately gets and sends its tokens.

```js
function _deliverTokens(address beneficiary, uint256 tokenAmount) internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| beneficiary | address | Address performing the token purchase | 
| tokenAmount | uint256 | Number of tokens to be emitted | 

### _processPurchase

Executed when a purchase has been validated and is ready to be executed. Doesn't necessarily emit/send tokens.

```js
function _processPurchase(address beneficiary, uint256 tokenAmount) internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| beneficiary | address | Address receiving the tokens | 
| tokenAmount | uint256 | Number of tokens to be purchased | 

### _updatePurchasingState

Override for extensions that require an internal state to check for validity (current user contributions, etc.)

```js
function _updatePurchasingState(address beneficiary, uint256 weiAmount) internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| beneficiary | address | Address receiving the tokens | 
| weiAmount | uint256 | Value in wei involved in the purchase | 

### _getTokenAmount

⤿ Overridden Implementation(s): [TokenSale._getTokenAmount](TokenSale.md#_gettokenamount)

Override to extend the way in which ether is converted to tokens.

```js
function _getTokenAmount(uint256 weiAmount) internal view
returns(uint256)
```

**Returns**

Number of tokens that can be purchased with the specified _weiAmount

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| weiAmount | uint256 | Value in wei to be converted into tokens | 

### _forwardFunds

⤿ Overridden Implementation(s): [TokenSale._forwardFunds](TokenSale.md#_forwardfunds)

Determines how ETH is stored/forwarded on purchases.

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
* [FinalizableCrowdsale](FinalizableCrowdsale.md)
* [IERC20](IERC20.md)
* [Migrations](Migrations.md)
* [Ownable](Ownable.md)
* [ReentrancyGuard](ReentrancyGuard.md)
* [SafeERC20](SafeERC20.md)
* [SafeMath](SafeMath.md)
* [TimedCrowdsale](TimedCrowdsale.md)
* [TokenSale](TokenSale.md)
