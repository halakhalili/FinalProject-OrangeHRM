import LoginPageAction from "../pages/loginPage.js";
import RecruitmentPage from "../pages/recruitmentPage.js";
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import TC1 from "../LoginPage/TC1.js";

const loginPage = new LoginPageAction();
const recruitment = new RecruitmentPage();

Given('I am on the Candidate Shortlist Options Page', () => {
    cy.getSavedUrl().then((url) => {
        cy.visit(url);
    });
});

When('I click on the Interview Button', () => {
    recruitment.interviewButton();
});

And('I enter the required Interview Info and Save it', () => {
    recruitment.enterInterviewInfo("Manual QA", "p")
});

Then('The interview should be successfully scheduled for the candidate', () => {
    recruitment.AssertInterviewsStatus();
    cy.url().then((url) => {
        cy.InterviewPassUrl(url);
    })
});