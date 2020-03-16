import { expect } from 'chai';
import t from '../dist/index';

describe('storage get', () => {
	it('get storage value', () => {
		const key = 'mm';
		const value = 'studio';
		const v = t(key, value);
		expect(v).eq(value);
	});
});
