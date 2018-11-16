# ERC20 interface (IERC20.sol)

View Source: [openzeppelin-solidity/contracts/token/ERC20/IERC20.sol](../openzeppelin-solidity/contracts/token/ERC20/IERC20.sol)

**↘ Derived Contracts: [ERC20](ERC20.md)**

**IERC20**

see https://github.com/ethereum/EIPs/issues/20

**Events**

```js
event Transfer(address indexed from, address indexed to, uint256  value);
event Approval(address indexed owner, address indexed spender, uint256  value);
```

## Functions

- [totalSupply()](#totalsupply)
- [balanceOf(address who)](#balanceof)
- [allowance(address owner, address spender)](#allowance)
- [transfer(address to, uint256 value)](#transfer)
- [approve(address spender, uint256 value)](#approve)
- [transferFrom(address from, address to, uint256 value)](#transferfrom)

### totalSupply

⤿ Overridden Implementation(s): [ERC20.totalSupply](ERC20.md#totalsupply)

```js
function totalSupply() external view
returns(uint256)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### balanceOf

⤿ Overridden Implementation(s): [ERC20.balanceOf](ERC20.md#balanceof)

```js
function balanceOf(address who) external view
returns(uint256)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| who | address |  | 

### allowance

⤿ Overridden Implementation(s): [ERC20.allowance](ERC20.md#allowance)

```js
function allowance(address owner, address spender) external view
returns(uint256)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| owner | address |  | 
| spender | address |  | 

### transfer

⤿ Overridden Implementation(s): [ERC20.transfer](ERC20.md#transfer)

```js
function transfer(address to, uint256 value) external nonpayable
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| to | address |  | 
| value | uint256 |  | 

### approve

⤿ Overridden Implementation(s): [ERC20.approve](ERC20.md#approve)

```js
function approve(address spender, uint256 value) external nonpayable
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| spender | address |  | 
| value | uint256 |  | 

### transferFrom

⤿ Overridden Implementation(s): [ERC20.transferFrom](ERC20.md#transferfrom)

```js
function transferFrom(address from, address to, uint256 value) external nonpayable
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| from | address |  | 
| to | address |  | 
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
