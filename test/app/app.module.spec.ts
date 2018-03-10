import 'mocha';
import { expect } from 'chai';
import { AppModule } from '../.././src/app/app.module';

describe('AppModule', () => {
	let appModule: AppModule;

	beforeEach(() => {
		appModule = new AppModule();
	});

	it('should create module', () => expect(appModule).to.exist);

});
