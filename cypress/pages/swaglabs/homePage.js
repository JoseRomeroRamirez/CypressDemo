class homePage{
    elements = {
        userInput: () => cy.get('#user-name'),
        passInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }
    //This method type the user in the user input text box
    typeUser(user){
        this.elements.userInput().type(user);
    }
    //This method type the pass in the user input text box
    typePass(pass){
        this.elements.passInput().type(pass);
    }
    //This method click the login button
    clickLogin(){
        this.elements.loginButton().click();
    }
}
module.exports = new homePage();