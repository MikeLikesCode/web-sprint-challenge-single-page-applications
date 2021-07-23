describe('Quotes App',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })

    it('Check if each of the form elements exist' , () => {
        nameInput().should('exist').type('Michael Guerrero').should('have.value', "Michael Guerrero")
        sizeSelect().should('exist').select('Large')
        sauceSelect().should('exist').check('Original Red')
        toppingSelect().should('exist').check().should('be.checked')
    })

    it('Check if submit button can be clicked and works' , () => {
        nameInput().should('exist').type('Michael Guerrero').should('have.value', "Michael Guerrero")
        sizeSelect().should('exist').select('Large')
        sauceSelect().should('exist').check('Original Red')
        toppingSelect().should('exist').check().should('be.checked')
        submitBtn().should('not.be.disabled').click()
    })
})

const nameInput = () => cy.get('input[name="name"]')
const sizeSelect = () => cy.get('select[id="size-dropdown"]')
const sauceSelect = () => cy.get('input[name="sauce"]')
const toppingSelect = () => cy.get('input[type="checkbox"]')
const submitBtn = () => cy.get('button[id="order-button"]')