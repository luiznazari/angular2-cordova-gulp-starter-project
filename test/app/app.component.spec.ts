import 'mocha';
import { expect } from 'chai';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from '../.././src/app/app.component';

describe('AppComponent', () => {
	let app: AppComponent;
	let appFixture: ComponentFixture<AppComponent>;

	before(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent]
		})
		.compileComponents();
	});

	beforeEach(() => {
		appFixture = TestBed.createComponent(AppComponent);
		app = appFixture.componentInstance;
		appFixture.detectChanges();
	});

	it('should create component', () => expect(app).to.exist);

	it('should have expected <h1> text', () => {
		let h1Debug: DebugElement = appFixture.debugElement.query(By.css('h1'));
		const h1 = h1Debug.nativeElement;
		expect(h1.textContent).to.be.equal('A2');
	});

	it('should have expected <h3> text', () => {
		let h3Debug: DebugElement = appFixture.debugElement.query(By.css('h3'));
		const h3 = h3Debug.nativeElement;
		expect(h3.textContent).to.be.equal('It works! :)');
	});

});
