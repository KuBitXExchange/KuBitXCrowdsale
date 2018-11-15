const Contract = artifacts.require('./CustomWhitelist.sol');
const EVMRevert = require('./helpers/EVMRevert').EVMRevert;

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('Custom Admin', function(accounts) {
  describe('Custom Admin Ruleset', () => {
    let customWhitelist;
    let owner = accounts[0];

    beforeEach(async() => {
      customWhitelist = await Contract.new();
    });

    it('must allow an administrator to add an address to the whitelist.', async () => {
      let customWhitelist = await Contract.new();

      //Check if this nonpayable function returns true (as we expect it to).
      await customWhitelist.addWhitelist.call(accounts[9]).then(function(result){
        assert.equal(result, true);
      });

      await customWhitelist.addWhitelist(accounts[1], {from: accounts[2]}).should.be.rejectedWith(EVMRevert);
      await customWhitelist.addWhitelist(accounts[1]);
      await customWhitelist.addWhitelist(accounts[2]);

      assert.equal(await customWhitelist.isWhitelisted(accounts[1]), true);
      assert.equal(await customWhitelist.isWhitelisted(accounts[2]), true);
      assert.equal(await customWhitelist.isWhitelisted(accounts[3]), false);
    });

    it('must allow an administrator to remove an address from the whitelist.', async () => {
      let customAdmin = await Contract.new();

      await customAdmin.addWhitelist(accounts[9]);

      //Check if this nonpayable function returns true (as we expect it to).
      await customAdmin.removeWhitelist.call(accounts[9]).then(function(result){
        assert.equal(result, true);
      });


      await customAdmin.addWhitelist(accounts[1]);
      await customAdmin.addWhitelist(accounts[2]);
      await customAdmin.addWhitelist(accounts[3]);
      await customAdmin.addWhitelist(accounts[4]);

      assert.equal(await customAdmin.isWhitelisted(accounts[0]), false);
      assert.equal(await customAdmin.isWhitelisted(accounts[1]), true);
      assert.equal(await customAdmin.isWhitelisted(accounts[2]), true);
      assert.equal(await customAdmin.isWhitelisted(accounts[3]), true);
      assert.equal(await customAdmin.isWhitelisted(accounts[4]), true);

      await customAdmin.removeWhitelist(accounts[1]);
      await customAdmin.removeWhitelist(accounts[2]);
      await customAdmin.removeWhitelist(accounts[3]);

      assert.equal(await customAdmin.isWhitelisted(accounts[1]), false);
      assert.equal(await customAdmin.isWhitelisted(accounts[2]), false);
      assert.equal(await customAdmin.isWhitelisted(accounts[3]), false);
      assert.equal(await customAdmin.isWhitelisted(accounts[4]), true);
    });

    it("must correctly add many addresses to the whitelist.", async () => {
        await customWhitelist.addManyWhitelist([accounts[1], accounts[2], accounts[3], accounts[5]]);

        assert.equal(await customWhitelist.isWhitelisted(accounts[0]), false);
        assert.equal(await customWhitelist.isWhitelisted(accounts[1]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[2]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[3]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[4]), false);
        assert.equal(await customWhitelist.isWhitelisted(accounts[5]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[6]), false);
    });

    it("must correctly remove many addresses from the whitelist.", async () => {
        await customWhitelist.addManyWhitelist([accounts[1], accounts[2], accounts[3], accounts[5], accounts[6], accounts[7], accounts[8], accounts[9]]);

        assert.equal(await customWhitelist.isWhitelisted(accounts[0]), false);
        assert.equal(await customWhitelist.isWhitelisted(accounts[1]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[2]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[3]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[4]), false);
        assert.equal(await customWhitelist.isWhitelisted(accounts[5]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[6]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[7]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[8]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[9]), true);

        await customWhitelist.removeManyWhitelist([accounts[1], accounts[5], accounts[7], accounts[8]]);

        assert.equal(await customWhitelist.isWhitelisted(accounts[0]), false);
        assert.equal(await customWhitelist.isWhitelisted(accounts[1]), false);
        assert.equal(await customWhitelist.isWhitelisted(accounts[2]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[3]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[4]), false);
        assert.equal(await customWhitelist.isWhitelisted(accounts[5]), false);
        assert.equal(await customWhitelist.isWhitelisted(accounts[6]), true);
        assert.equal(await customWhitelist.isWhitelisted(accounts[7]), false);
        assert.equal(await customWhitelist.isWhitelisted(accounts[8]), false);
        assert.equal(await customWhitelist.isWhitelisted(accounts[9]), true);
    });
  });
});
