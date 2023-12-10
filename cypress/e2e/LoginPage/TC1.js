import LoginPageAction from "../pages/loginPage.js";
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const loginPage = new LoginPageAction();

Given("Access Login Portal Page", () => {

    loginPage.navigate();
});

When("Enter a username Admin", () => {

    loginPage.EnterUserName("Admin");
});

And("Enter a password admin123", () => {

    loginPage.EnterPassword("admin123");
});

And("Click on the login button", () => {

    loginPage.submit();
});

Then("Should be redirected to Dashboard page", () => {

    loginPage.AssertionDashboardURL();
});