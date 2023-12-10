import {
    expect
} from "chai";
class candidateRequest {
    login(username, password) {
        cy.request({
            method: "POST",
            url: "https://opensource-demo.orangehrmlive.com/api/login",
            body: {
                username,
                password,
            }
        }).then((response) => {
            cy.log(response);
            expect(response.status).to.eq(200);
        }).catch((error) => {

            cy.log('Error occurred:', error);
        });
    }
    getCandidate() {
        cy.request({
            method: "GET",
            url: 'https://opensource-demo.orangehrmlive.com/api/v1/candidates',
            headers: {
                'Accept': 'application/json',
                'Cookie': 'orangehrm=4bb6724e9f68d1187c33bb7eeea8df73',
                'Referer': 'https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates',
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
        });
    }
    deleteCandidate() {
        cy.request({
            method: "DELETE",
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/23',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Cookie': 'orangehrm=4bb6724e9f68d1187c33bb7eeea8df73',
                'Origin': 'https://opensource-demo.orangehrmlive.com',
                'Referer': 'https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates',
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
        });
    }
}
export default candidateRequest;