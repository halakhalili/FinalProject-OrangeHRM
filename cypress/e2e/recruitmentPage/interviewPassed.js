import LoginPageAction from "../pages/loginPage.js";
import RecruitmentPage from "../pages/recruitmentPage.js";
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import TC1 from "../LoginPage/TC1.js";

const loginPage = new LoginPageAction();
const recruitment = new RecruitmentPage();

When('Complete the interview for the candidate and navigate to the interview result page', () => {
    cy.getInterviewPassUrl().then((url) => {
        cy.visit(url);
    });
});

And('Click on the "Mark Interview Passed" Button', () => {
    recruitment.PassedButton();
});

And('Click the Save Button', () => {
    recruitment.saveButton();
});

Then('The status of the interview for the candidate should be updated as "Interview Passed”', () => {
    recruitment.AssertPassed();
    cy.url().then((url) => {
        cy.OfferJobURL(url);
    });
});