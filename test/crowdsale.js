const TokenSale = artifacts.require('./TokenSale.sol');
const ERC20 = artifacts.require('ERC20Mock.sol');
const BigNumber = require('bignumber.js');
const EVMRevert = require('./helpers/EVMRevert').EVMRevert;
const ether = require('./helpers/ether').ether;
const latestTime  = require('./helpers/latestTime').latestTime;
const increaseTime = require('./helpers/increaseTime');
const increaseTimeTo = increaseTime.increaseTimeTo;
const duration = increaseTime.duration;
// const Token = artifacts.require('./ERC20Mock');
const getBalance = require('./helpers/web3').ethGetBalance

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('Private sale', function(accounts) {
  describe('Private Sale Creation', () => {
    it('should deploy with correct parameters', async () => {
      let _startTime = await latestTime() + duration.days(1);
      let _endTime = _startTime + duration.years(1);
      let _rate = 250
      let _wallet = accounts[3];
      let _bonus = 20;
      let _token = await ERC20.new(accounts[5], 10);
      let _cap = 50
      let crowdsale = await TokenSale.new(
      _startTime,
      _endTime,
      _rate,
      _wallet,
      _token.address,
      _bonus,
      _cap
      );

      assert((await crowdsale.openingTime()).toNumber() == _startTime);
      assert((await crowdsale.closingTime()).toNumber() == _endTime);
      assert((await crowdsale.token()) == _token.address);
      assert((await crowdsale.rate()).toNumber() == _rate);
      assert((await crowdsale.bonus()).toNumber() == _bonus);
      assert((await crowdsale.cap()).toNumber() == _cap);
      assert((await crowdsale.wallet()) == _wallet);
      assert((await crowdsale.owner()) == accounts[0]);
    });
  });

  describe('Admin Functions', () => {
    let startTime;
    let endTime;
    let rate;
    let wallet;
    let bonus;
    let token;
    let cap;
    let crowdsale;
    beforeEach(async () => {
      startTime = await latestTime() + duration.days(1);
      endTime = startTime + duration.years(1);
      rate = 250
      wallet = accounts[3];
      bonus = 20;
      token = await ERC20.new(accounts[5], 10000);
      cap = 50
      crowdsale = await TokenSale.new(
        startTime,
        endTime,
        rate,
        wallet,
        token.address,
        bonus,
        cap
      );
    });

    it('should change the bonus', async () => {
      await crowdsale.changeBonus(10);
      assert((await crowdsale.bonus()).toNumber() === 10);
      await crowdsale.changeBonus(40, {from: accounts[1]}).should.be.rejectedWith(EVMRevert);
      await crowdsale.changeBonus(0, {from: accounts[0]}).should.be.rejectedWith(EVMRevert);
    });

    it('should withdraw tokens', async () => {
      await token.transfer(crowdsale.address, 500, { from :accounts[5]});
      await crowdsale.withdrawTokens();
      ((await token.balanceOf(accounts[5])).toNumber() === 500);
      await token.transfer(crowdsale.address, 500, { from :accounts[5]});
      await crowdsale.withdrawTokens({from: accounts[3]}).should.be.rejectedWith(EVMRevert);
    })

    it('should pause', async() => {
      await crowdsale.pause({from: accounts[1]}).should.be.rejectedWith(EVMRevert);
      await crowdsale.pause();
      assert(await crowdsale.paused());
    })

    it('should not change bonus when paused', async () => {
      await crowdsale.pause();
      await crowdsale.changeBonus(10).should.be.rejectedWith(EVMRevert);
    })

    it('should not withdraw tokens', async () => {
      await token.transfer(crowdsale.address, 500, { from :accounts[5]});
      await crowdsale.pause();
      await crowdsale.withdrawTokens({from: accounts[0]}).should.be.rejectedWith(EVMRevert);
    })

    it('admin should add whitelist', async () => {
      await crowdsale.addWhitelist(accounts[1]);
      await crowdsale.addWhitelist(accounts[2], { from:accounts[1] })
      .should.be.rejectedWith(EVMRevert);
    });
  })

  describe('ETH Contribution', async () => {
    let startTime;
    let endTime;
    let rate;
    let wallet;
    let bonus;
    let token;
    let cap;
    let crowdsale;
    beforeEach(async () => {
      startTime = await latestTime() + duration.days(1);
      endTime = startTime + duration.years(1);
      rate = 250
      wallet = accounts[3];
      bonus = 10;
      token = await ERC20.new(accounts[5], ether(10000000));
      cap = ether(50);
      crowdsale = await TokenSale.new(
        startTime,
        endTime,
        rate,
        wallet,
        token.address,
        bonus,
        cap
      );
      await crowdsale.addWhitelist(accounts[1]);
      await token.transfer(crowdsale.address, ether(10000000), {from: accounts[5]});
    });


    it('cannot accept contribution before start date', async () => {
      await increaseTimeTo(startTime - 40);
      await crowdsale.sendTransaction({value: ether(1), from: accounts[1] })
      .should.be.rejectedWith(EVMRevert);
    })

    it('cannot accept contribution after end date', async () => {
      await increaseTimeTo(endTime + 10);
      await crowdsale.sendTransaction({value: ether(1), from: accounts[1] })
      .should.be.rejectedWith(EVMRevert);
    });

    it('non whitelisted address cannot contribute', async () => {
      await increaseTimeTo(startTime + 10);
      await crowdsale.sendTransaction({ value: ether(1), from: accounts[3]})
      .should.be.rejectedWith(EVMRevert);
    })

    it('accept eth', async () => {
      await increaseTimeTo(startTime + 10);
      await crowdsale.sendTransaction({ value: ether(1), from: accounts[1] });
      let expectedBalance = ether(rate + rate * bonus/100);
      let tokenBalance = await token.balanceOf(accounts[1]);
      tokenBalance.should.be.bignumber.equal(expectedBalance);
      let balance = await getBalance(crowdsale.address);
      balance.should.be.bignumber.equal(ether(1));
    });

    it('cannot contribute after cap', async() => {
      await increaseTimeTo(startTime + 10);
      await crowdsale.sendTransaction({ value: cap, from: accounts[1] });
      await crowdsale.sendTransaction({ value: ether(1), from:accounts[1]})
      .should.be.rejectedWith(EVMRevert);
    })

    it('withdraw funds', async () => {
      await increaseTimeTo(startTime + 10);
      await crowdsale.sendTransaction({ value: ether(1), from: accounts[1] })
      await crowdsale.withdrawFunds(ether(0.5), {from: accounts[1]}).should.be.rejectedWith(EVMRevert);
      await crowdsale.withdrawFunds(ether(0.5));
      await crowdsale.withdrawFunds(ether(0.6)).should.be.rejectedWith(EVMRevert);
      await crowdsale.pause();
      await crowdsale.withdrawFunds(ether(0.1)).should.be.rejectedWith(EVMRevert);

    })

  });

});
