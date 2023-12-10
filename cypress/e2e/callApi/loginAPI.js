import candidateRequest from "../API/candidateReq.js";
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const api = new candidateRequest();

Given("Login to OrangeHRM", () => {
    api.login("Admin", "admin123")
});

And("Get data of the candidate", () => {
    api.getCandidate()
});

Then("Delete candidate", () => {
    api.deleteCandidate();
});