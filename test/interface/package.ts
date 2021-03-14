import { List } from '../../index';

describe('Interface: Package', function () {
  describe('global', function () {
    it('global', function () {
      assert(global['List'] !== List);
    });
  });

  describe('List', function () {
    it('List', function () {
      assert(typeof List === 'function');
    });
  });

});
