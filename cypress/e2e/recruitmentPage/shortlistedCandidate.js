import LoginPageAction from "../pages/loginPage.js";
import RecruitmentPage from "../pages/recruitmentPage.js";
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import TC1 from "../LoginPage/TC1.js";

const loginPage = new LoginPageAction();
const recruitment = new RecruitmentPage();

When('I Click on the Recruitment button', () => {
    recruitment.visitRecruitment();
});

When('Click on Add button', () => {
    recruitment.addButton();
});

When('Enter the Candidate Info', () => {
    recruitment.enterCandidateInfo("Hire", "Test", "Associate IT Manager", "Hire@test.cy")
});

When('Click the Save button', () => {
    recruitment.saveButton();
});

Then('Should show in another page Reject and Shortlist buttons', () => {
    recruitment.AssertButton();
});

When('I click on Shortlist button and save it', () => {
    recruitment.Shortlist();
});

Then('The status of candidate should be Shortlist', () => {
    recruitment.AssertShortlist();
    cy.url().then((url) => {
        cy.saveUrl(url);
    });
});