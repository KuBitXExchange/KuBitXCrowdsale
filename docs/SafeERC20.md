# SafeERC20 (SafeERC20.sol)

View Source: [openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol](../openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol)

**SafeERC20**

Wrappers around ERC20 operations that throw on failure.
To use this library you can add a `using SafeERC20 for ERC20;` statement to your contract,
which allows you to call the safe operations as `token.safeTransfer(...)`, etc.

## Functions

- [safeTransfer(IERC20 token, address to, uint256 value)](#safetransfer)
- [safeTransferFrom(IERC20 token, address from, address to, uint256 value)](#safetransferfrom)
- [safeApprove(IERC20 token, address spender, uint256 value)](#safeapprove)
- [safeIncreaseAllowance(IERC20 token, address spender, uint256 value)](#safeincreaseallowance)
- [safeDecreaseAllowance(IERC20 token, address spender, uint256 value)](#safedecreaseallowance)

### safeTransfer

```js
function safeTransfer(IERC20 token, address to, uint256 value) internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| token | IERC20 |  | 
| to | address |  | 
| value | uint256 |  | 

### safeTransferFrom

```js
function safeTransferFrom(IERC20 token, address from, address to, uint256 value) internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| token | IERC20 |  | 
| from | address |  | 
| to | address |  | 
| value | uint256 |  | 

### safeApprove

```js
function safeApprove(IERC20 token, address spender, uint256 value) internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| token | IERC20 |  | 
| spender | address |  | 
| value | uint256 |  | 

### safeIncreaseAllowance

```js
function safeIncreaseAllowance(IERC20 token, address spender, uint256 value) internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| token | IERC20 |  | 
| spender | address |  | 
| value | uint256 |  | 

### safeDecreaseAllowance

```js
function safeDecreaseAllowance(IERC20 token, address spender, uint256 value) internal nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| token | IERC20 |  | 
| spender | address |  | 
| value | uint256 |  | 

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
