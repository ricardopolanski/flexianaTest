

const apiURL = Cypress.env('apiURL')

function createDeck(){
    return cy.request({                
        method: 'GET', 
        url: apiURL+`new`,
    })
}

function drawCardsFromDeck(deckId, numberOfCards){
    return cy.request({                
        method: 'GET', 
        url: apiURL+`${deckId}/draw/?count=${numberOfCards}`,
    })
}

function shuffleDeck(deckId){
    return cy.request({                
        method: 'GET', 
        url: apiURL+`${deckId}/shuffle/`,
    })
}

function createPile(deckId, player, arr){
    return cy.request({                
        method: 'GET', 
        url: apiURL+`${deckId}/pile/${player}/add/`,
        qs:{
            cards: `${arr[0]},${arr[1]},${arr[2]},${arr[3]},${arr[4]}`
        },
    })
}

function listPile(deckId, player){
    return cy.request({                
        method: 'GET', 
        url: apiURL+`${deckId}/pile/${player}/list/`,
    })
}

function drawCardsPile(deckId, player, draw){
    return cy.request({                
        method: 'GET', 
        url: apiURL+`${deckId}/pile/${player}/draw/?count=${draw}`,
    })
}

export {createDeck, drawCardsFromDeck, shuffleDeck, createPile, listPile, drawCardsPile}