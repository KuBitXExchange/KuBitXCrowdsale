# This contract enables to create multiple contract administrators. (CustomAdmin.sol)

View Source: [Users/biod/Desktop/projects/KuBitXCrowdsale/contracts/CustomAdmin.sol](../Users/biod/Desktop/projects/KuBitXCrowdsale/contracts/CustomAdmin.sol)

**↗ Extends: [Ownable](Ownable.md)**
**↘ Derived Contracts: [CustomPausable](CustomPausable.md)**

**CustomAdmin**

## Contract Members
**Constants & Variables**

```js
mapping(address => bool) public admins;

```

**Events**

```js
event AdminAdded(address indexed _address);
event AdminRemoved(address indexed _address);
```

## Modifiers

- [onlyAdmin](#onlyadmin)

### onlyAdmin

Validates if the sender is actually an administrator.

```js
modifier onlyAdmin() internal
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

## Functions

- [addAdmin(address _address)](#addadmin)
- [addManyAdmins(address[] _accounts)](#addmanyadmins)
- [removeAdmin(address _address)](#removeadmin)
- [removeManyAdmins(address[] _accounts)](#removemanyadmins)
- [isAdmin(address _address)](#isadmin)

### addAdmin

Adds the specified address to the list of administrators.

```js
function addAdmin(address _address) external nonpayable onlyAdmin 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _address | address | The address to add to the administrator list. | 

### addManyAdmins

Adds multiple addresses to the administrator list.

```js
function addManyAdmins(address[] _accounts) external nonpayable onlyAdmin 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _accounts | address[] | The wallet addresses to add to the administrator list. | 

### removeAdmin

Removes the specified address from the list of administrators.

```js
function removeAdmin(address _address) external nonpayable onlyAdmin 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _address | address | The address to remove from the administrator list. | 

### removeManyAdmins

Removes multiple addresses to the administrator list.

```js
function removeManyAdmins(address[] _accounts) external nonpayable onlyAdmin 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _accounts | address[] | The wallet addresses to add to the administrator list. | 

### isAdmin

Checks if an address is an administrator.

```js
function isAdmin(address _address) public view
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
* [FinalizableCrowdsale](FinalizableCrowdsale.md)
* [IERC20](IERC20.md)
* [Migrations](Migrations.md)
* [Ownable](Ownable.md)
* [ReentrancyGuard](ReentrancyGuard.md)
* [SafeERC20](SafeERC20.md)
* [SafeMath](SafeMath.md)
* [TimedCrowdsale](TimedCrowdsale.md)
* [TokenSale](TokenSale.md)
