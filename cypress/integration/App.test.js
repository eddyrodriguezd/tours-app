/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/// <reference types="cypress" />

it('displays two todo items by default', () => {
	cy.visit('https://toursapp123456789.netlify.app/');
	cy.location().should((loc) => {
		expect(loc.protocol).to.eq('https:');
		expect(loc.toString()).to.eq('https://toursapp123456789.netlify.app/');
	});
});
