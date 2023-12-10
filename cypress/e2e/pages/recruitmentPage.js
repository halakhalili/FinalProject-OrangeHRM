class RecruitmentPage {

    // login() {
    //     log.navigate();
    //     log.EnterUserName("Admin");
    //     log.EnterPassword("admin123");
    //     log.submit();
    //     cy.wait(5000);
    // }
    visitRecruitment() {
        cy.wait(5000);
        cy.get('span').contains('Recruitment').click();
        return this;
    }
    addButton() {
        cy.get('button').contains('Add').click();
        cy.wait(10000);
        return this;
    }

    enterCandidateInfo(firstName, lastName, optionText, email) {
        cy.get('input[name=firstName]').type(firstName)
        cy.get('input[name=lastName]').type(lastName)
        cy.get('.oxd-select-text--arrow').click({ force: true })
        cy.get('div[role=listbox] > div[role=option] > span').contains(optionText).click()
        cy.get('form.oxd-form').children().eq(2).children().children().eq(0).children().children().eq(1).children().type(email)
    }
    saveButton() {
        cy.get('button[type=submit]').contains('Save').click()
        cy.wait(10000)
    }
    AssertButton() {
        cy.get('button').contains('Reject').should('exist');
    }

    Reject() {
        cy.get('button').contains('Reject').click({ force: true })
        cy.get('button').contains('Save').click()
        cy.wait(10000)
    }
    AssertReject() {
        cy.get('div.orangehrm-recruitment-status > p').should('include.text', 'Rejected')
    }
    Shortlist() {
        cy.get('button').contains('Shortlist').click({ force: true })
        cy.get('button').contains('Save').click()
        cy.wait(10000)
    }
    AssertShortlist() {
        cy.get('div.orangehrm-recruitment-status > p').should('include.text', 'Shortlisted')
    }

    interviewButton() {
        cy.wait(5000)
        cy.get('button').contains('Schedule Interview').click({ force: true })
    }
    enterInterviewInfo(InterviewTitle, Interviewer) {
        cy.get('form.oxd-form').children().eq(1).children().children().children().children().eq(1).find('input').type(InterviewTitle)
        cy.get('form.oxd-form').children().eq(1).children().children().eq(1).children().children().children().eq(1).children().children().find('input').type(Interviewer)
        cy.wait(5000)
        cy.get('div[role=listbox]').children().first().click()
        cy.get('i.bi-calendar').click()
        cy.get('.oxd-date-input-calendar').type('{enter}')
        cy.wait(10000)
    }
    AssertInterviewsStatus() {
        cy.get('div.orangehrm-recruitment-status > p').should('include.text', 'Interview Scheduled')
    }

    PassedButton() {
        cy.wait(5000)
        cy.get('button').contains('Mark Interview Passed').click({ force: true });
    }
    AssertPassed() {
        cy.get('div.orangehrm-recruitment-status > p').should('include.text', 'Interview Passed')
    }
    offerButton() {
        cy.wait(5000)
        cy.get('button').contains('Offer Job').click({ force: true })
    }
    AssertOffer() {
        cy.get('div.orangehrm-recruitment-status > p').should('include.text', 'Job Offered')
    }
    hireButton() {
        cy.wait(5000)
        cy.get('button').contains('Hire').click({ force: true })
    }
    AssertHire() {
        cy.get('div.orangehrm-recruitment-status > p').should('include.text', 'Hired')
    }
}
export default RecruitmentPage;