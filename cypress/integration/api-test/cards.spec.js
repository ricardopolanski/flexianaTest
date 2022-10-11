import * as apiRequests from '../apiRequest/requests'


let deckId;
let countCards
let piles = {
    player1: 'ricardo',
    player2: 'mario'
}
let player1Cards
let player2Cards
let arr = [];
let cards = [];

describe('Creating and Drawing cards from the Deck', () => {
    it('Creating a Deck', () => {
        apiRequests.createDeck().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true)
            expect(response.body.shuffled).to.eq(false)
            deckId = response.body.deck_id
        })
    });
    
    it('Shuffle Cards from the Deck', () => {
        apiRequests.shuffleDeck(deckId).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true)
            expect(response.body.remaining).to.eq(52)
        })
    });

    it('Draw 3 cards from the Deck', () => {
        apiRequests.drawCardsFromDeck(deckId, 3).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true);
            expect(response.body.remaining).to.eq(49);
            expect(response.body.cards).to.have.lengthOf(3)
            for(let x = 0; x < 3; x++){
                arr[x] = response.body.cards[x].code
            }
        })
    });
 });
 
describe('Making Piles and drawing cards from them', () => {
    it('Shuffle Deck', () => {
        apiRequests.shuffleDeck(deckId).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true)
            expect(response.body.remaining).to.eq(52)
        })
    });

    it('Draw 10 cards from the Deck', () => {
        apiRequests.drawCardsFromDeck(deckId, 10).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true);
            expect(response.body.remaining).to.eq(42);
            expect(response.body.cards).to.have.lengthOf(10)
            for(let x = 0; x < 10; x++){
                arr[x] = response.body.cards[x].code
            }
        })
    });

    it('Creating first pile', () => {
        cards = [arr[0],arr[1],arr[2],arr[3],arr[4]] 
        apiRequests.createPile(deckId, piles.player1, cards).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true) 
        })
    });

    it('Listing cards from the first pile', () => {
        apiRequests.listPile(deckId, piles.player1).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true)
            expect(response.body.piles).to.have.property(`${piles.player1}`)
            player1Cards = response.body.piles[piles.player1].cards
            countCards = Object.keys(player1Cards).length
            let i = 0
            while (i < countCards) {
                cy.log(player1Cards[i].code)
                i++;
            }
        })
    });

    it('Creating second pile', () => {
        cards = [arr[5],arr[6],arr[7],arr[8],arr[9]]
        apiRequests.createPile(deckId, piles.player2, cards).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true) 
        })
    });

    it('Listing cards from the second pile', () => {
        apiRequests.listPile(deckId, piles.player2).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true)
            expect(response.body.piles).to.have.property(`${piles.player2}`)
            player2Cards = response.body.piles[piles.player2].cards
            countCards = Object.keys(player2Cards).length
            let i = 0
            while (i < countCards) {
                cy.log(player2Cards[i].code)
                i++;
            }
        })
    });

    it('Drawing cards from the first pile', () => {
        apiRequests.drawCardsPile(deckId, piles.player1, 2).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true)
            expect(response.body.piles).to.have.property(`${piles.player1}`)
            // player1Cards = response.body.cards
            countCards = Object.keys(player1Cards).length
            let i = 0
            while (i < countCards) {
                cy.log(player1Cards[i].code)
                i++;
            }
        })
        
        apiRequests.listPile(deckId, piles.player1).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true)
            expect(response.body.piles).to.have.property(`${piles.player1}`)
            player1Cards = response.body.piles[piles.player1].cards
            countCards = Object.keys(player1Cards).length
            let i = 0
            while (i < countCards) {
                cy.log(player1Cards[i].code)
                i++;
            }
            expect(countCards).to.equal(3)
        })
    });

    it('Drawing cards from the second pile', () => {
        apiRequests.drawCardsPile(deckId, piles.player2, 3).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true)
            expect(response.body.piles).to.have.property(`${piles.player2}`)
            // player2Cards = response.body.cards
            countCards = Object.keys(player2Cards).length
            let i = 0
            while (i < countCards) {
                cy.log(player2Cards[i].code)
                i++;
            }
        })

        apiRequests.listPile(deckId, piles.player2).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true)
            expect(response.body.piles).to.have.property(`${piles.player2}`)
            player2Cards = response.body.piles[piles.player2].cards
            countCards = Object.keys(player2Cards).length
            let i = 0
            while (i < countCards) {
                cy.log(player2Cards[i].code)
                i++;
            }
            expect(countCards).to.equal(2)
        })
    });
 });


 