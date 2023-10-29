export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    add_product_a = '#add-to-cart-sauce-labs-backpack'
    add_product_b = '#add-to-cart-sauce-labs-bike-light'
    remove_a = '#remove-sauce-labs-backpack'
    remove_b = '#remove-sauce-labs-bike-light'
    //cart_badge = '#shopping_cart_badge'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    productAdd(){
        cy.get(this.add_product_a).click()
        cy.get(this.add_product_b).click()
    }
    productRemove(){
        cy.get(this.remove_a).click()
        cy.get(this.remove_b).click()
    }
    assertAdd(){
        cy.get('.shopping_cart_badge').should('contain','2')
    }
    assertRemove(){
        cy.get('.shopping_cart_link').should('not.contain','2')
    }
    
}