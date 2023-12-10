import LoginPageAction from "../pages/loginPage.js";
import RecruitmentPage from "../pages/recruitmentPage.js";
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import TC1 from "../LoginPage/TC1.js";

const loginPage = new LoginPageAction();
const recruitment = new RecruitmentPage();

When('I pass the interview for the candidate and navigate to the passed interview result page', () => {
    cy.getOfferJobURL().then((url) => {
        cy.visit(url);
    });
});

And('I click on the "Offer Job" Button', () => {
    recruitment.offerButton();
});

And('I click the Save Button', () => {
    recruitment.saveButton();
});

Then('The status of the interview for the candidate should be updated as "Offer Job”', () => {
    recruitment.AssertOffer();
    cy.url().then((url) => {
        cy.HireURL(url);
    })
});