/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/// <reference types="cypress" />

it('displays two todo items by default', () => {
	cy.visit('http://localhost:3000/login');
	cy.intercept('POST', 'http://localhost:8080/api/users/login', {
		email: 'brayan.mflores@hotmail.com',
		password: '123Brayan',
	}).as('Success');
	cy.get('form').submit();
	cy.wait('@Success').its('status').should('eq', 200);
});
