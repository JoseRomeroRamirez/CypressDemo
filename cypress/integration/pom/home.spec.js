import homePage from "../../pages/swaglabs/homePage";
import inventoryPage from "../../pages/swaglabs/inventoryPage";

const tests = require('../../fixtures/dataDriven/swagLabsUsers.json')

describe('DEMO POM', () =>{
    //Before each test
    beforeEach(()=>{
        cy.visit('/') 
    });
    //Loop using data provider
    tests.forEach(test => {
        it(test.name , () =>{
            homePage.typeUser(test.user);
            homePage.typePass(test.pass);
            homePage.clickLogin();
            //Validate the expected text match the actual text
            if(test.name == 'should login to inventory page'){
                inventoryPage.elements.titleSpan().should('have.text', test.expected)
            }else{
                homePage.elements.errorMessage().should('have.text', test.expected)
            }
        })
    });
});