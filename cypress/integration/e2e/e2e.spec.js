import {pageElements} from '../pageObjects/elements'
const elements = new pageElements()
const e2eURL = Cypress.env('e2eURL')

describe('Game', () => {

    it('Starting a new game', () => {
        cy.visit(e2eURL);
        cy.get(elements.page).should('be.visible')
        cy.get(elements.startGame).click()
    });

    it('My First Move', () => {
        cy.get(elements.space02).as('space02')
        .click().invoke('attr', 'src')
        .should('be.equal', 'you2.gif', {
            timeout: 5000
        }).then((you) => {
            expect(you).to.equal('you2.gif')
        })

        cy.get(elements.space13).click().invoke('attr', 'src')
        .should('be.equal', 'you1.gif', {
            timeout: 5000
        }).then((you) => {
            expect(you).to.equal('you1.gif')
        })

        cy.get('@space02').invoke('attr', 'src')
        .should('contains', 'gray.gif')
    });

    it('Compute First Move', () => {
        cy.get(elements.space24).invoke('attr', 'src' )
        .should('be.equal', 'me1.gif', {
            timeout: 5000
        }).then((me) => {
            expect(me).to.equal('me1.gif')
        })

        cy.get(elements.space15).invoke('attr', 'src')
        .should('contains', 'gray.gif')
    });
        

    it('My Second Move', () => {
        cy.get(elements.space22).as('space22').click().invoke('attr', 'src' )
        .should('be.equal', 'you2.gif', {
            timeout: 5000
        }).then((you) => {
            expect(you).to.equal('you2.gif')
        });

        cy.get(elements.space33).click().invoke('attr', 'src' )
        .should('be.equal', 'you1.gif', {
            timeout: 5000
        }).then((you) => {
            expect(you).to.equal('you1.gif')
        })

        cy.get('@space22').invoke('attr', 'src')
        .should('contains', 'gray.gif')
    });

    it('Compute Second Move taking my piece', () => {
        cy.get(elements.space13).click().invoke('attr', 'src' )
        .should('be.equal', 'gray.gif', {
            timeout: 5000
        }).then((you) => {
            expect(you).to.equal('gray.gif')
        })

        cy.get(elements.space02).click().invoke('attr', 'src' )
        .should('be.equal', 'me1.gif', {
            timeout: 5000
        }).then((me) => {
            expect(me).to.equal('me1.gif')
        })

        cy.get(elements.space24).invoke('attr', 'src')
        .should('contains', 'gray.gif')
    });

    it('Restarting the game', () => {
        cy.get(elements.startGame).click()
    });
});