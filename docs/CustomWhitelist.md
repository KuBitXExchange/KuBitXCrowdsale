# This contract enables to maintain a list of whitelisted wallets. (CustomWhitelist.sol)

View Source: [contracts/CustomWhitelist.sol](../contracts/CustomWhitelist.sol)

**↗ Extends: [CustomPausable](CustomPausable.md)**
**↘ Derived Contracts: [TokenSale](TokenSale.md)**

**CustomWhitelist**

## Contract Members
**Constants & Variables**

```js
mapping(address => bool) public whitelist;

```

**Events**

```js
event WhitelistAdded(address indexed _account);
event WhitelistRemoved(address indexed _account);
```

## Modifiers

- [ifWhitelisted](#ifwhitelisted)

### ifWhitelisted

Verifies if the account is whitelisted.

```js
modifier ifWhitelisted(address _account) internal
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _account | address |  | 

## Functions

- [addWhitelist(address _account)](#addwhitelist)
- [addManyWhitelist(address[] _accounts)](#addmanywhitelist)
- [removeWhitelist(address _account)](#removewhitelist)
- [removeManyWhitelist(address[] _accounts)](#removemanywhitelist)
- [isWhitelisted(address _address)](#iswhitelisted)

### addWhitelist

Adds an account to the whitelist.

```js
function addWhitelist(address _account) external nonpayable whenNotPaused onlyAdmin 
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _account | address | The wallet address to add to the whitelist. | 

### addManyWhitelist

Adds multiple accounts to the whitelist.

```js
function addManyWhitelist(address[] _accounts) external nonpayable whenNotPaused onlyAdmin 
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _accounts | address[] | The wallet addresses to add to the whitelist. | 

### removeWhitelist

Removes an account from the whitelist.

```js
function removeWhitelist(address _account) external nonpayable whenNotPaused onlyAdmin 
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _account | address | The wallet address to remove from the whitelist. | 

### removeManyWhitelist

Removes multiple accounts from the whitelist.

```js
function removeManyWhitelist(address[] _accounts) external nonpayable whenNotPaused onlyAdmin 
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _accounts | address[] | The wallet addresses to remove from the whitelist. | 

### isWhitelisted

Checks if an address is whitelisted.

```js
function isWhitelisted(address _address) public view
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _address | address |  | 

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
