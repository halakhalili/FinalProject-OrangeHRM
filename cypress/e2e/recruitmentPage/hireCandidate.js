import LoginPageAction from "../pages/loginPage.js";
import RecruitmentPage from "../pages/recruitmentPage.js";
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import TC1 from "../LoginPage/TC1.js";

const loginPage = new LoginPageAction();
const recruitment = new RecruitmentPage();


When('The offer has been accepted and we move to another page where the reject or hire button appears', () => {
    cy.getHireURL().then((url) => {
        cy.visit(url);
    });
});

And('Click on the "Hire" Button', () => {
    recruitment.hireButton();
});

And('Click the Save Button', () => {
    recruitment.saveButton();
});

Then('The status of the interview for the candidate should be updated as "Hire”', () => {
    recruitment.AssertHire();
});