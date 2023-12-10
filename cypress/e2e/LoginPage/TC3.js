import LoginPageAction from "../pages/loginPage.js";
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const loginPage = new LoginPageAction();

When("Enter a username user", () => {

    loginPage.EnterUserName("user");
});

And("Enter a password admin123", () => {

    loginPage.EnterPassword("admin123");
});

And("Click on the login button", () => {

    loginPage.submit();
});

Then("Should remain on the login page", () => {

    loginPage.AssertionLoginURL();
});