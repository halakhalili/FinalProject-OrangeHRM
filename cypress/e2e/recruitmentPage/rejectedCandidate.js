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

When('Enter the required information', () => {
    recruitment.enterCandidateInfo("Reject", "Test", "Associate IT Manager", "Reject@test.cy")
});

When('Click the Save button', () => {
    recruitment.saveButton();
});

Then('Should show in another page Reject and Shortlist buttons', () => {
    recruitment.AssertButton();
});

When('I click on Reject button and save it', () => {
    recruitment.Reject();
});

Then('The status of candidate should be Rejected', () => {
    recruitment.AssertReject();
});