import assert from 'assert';
import cookie from '../../dist/cookie.esm.js';

describe('ES Module Build', () => {
  it('imports properly', () => {
    assert(typeof cookie, 'function');
    assert(typeof cookie.get, 'function');
  });
});
