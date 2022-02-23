class homePage{
    elements = {
        userInput: () => cy.get('#user-name'),
        passInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    typeUser(user){
        this.elements.userInput().type(user);
    }

    typePass(pass){
        this.elements.passInput().type(pass);
    }

    clickLogin(){
        this.elements.loginButton().click();
    }
}
module.exports = new homePage();