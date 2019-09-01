// https://docs.cypress.io/api/introduction/api.html

describe('basic flow', () => {
	it('Create new entry with the add new from empty file', () => {
		cy.visit('/')
		cy.get('#addNewButton')
			.should('be.visible')
			.click()
		cy.get('.transcription-table-row')
			.should('be.visible')
			.should('have.length', 1)
	})
	it('Create entries by downloading information', () => {
		cy.visit('/')
		cy.get('#downloadData')
			.should('be.visible')
			.click()
		cy.get('.transcription-table-row')
			.should('be.visible')
			.should('have.length', 3)
	})
	it('Create entries with add new after downloading', () => {
		cy.visit('/')
		cy.get('#downloadData')
			.click()
		cy.get('#addNewButton')
			.click()
		cy.get('.transcription-table-row')
			.should('have.length', 4)
	})
	it('deletes all entries', () => {
		cy.visit('/')
		cy.get('#downloadData')
			.click()
		cy.get('.delete-button')
			.each(($el) => {
				$el.click()
			})
		cy.get('.transcription-table-row')
			.should('have.length', 0)
	})
})
