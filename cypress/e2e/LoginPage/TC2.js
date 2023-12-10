import LoginPageAction from "../pages/loginPage.js";
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const loginPage = new LoginPageAction();
And("Enter a password user1234", () => {

    loginPage.EnterPassword("user1234");
});

And("Click on the login button", () => {

    loginPage.submit();
});

Then("Should remain on the login page", () => {

    loginPage.AssertionLoginURL();
});