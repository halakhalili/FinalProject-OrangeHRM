Feature: test API for login and get and delete Candidate
     

     Scenario: Login to OrangeHRM get the data of candidates and delete the candidate
     Given Login to OrangeHRM
     And Get data of the candidate
     Then Delete candidate
#      And Delete user

# Scenario: Login API Test
#     Given I have access to OrangeHRM login API
#     When I make a POST request to the login endpoint with valid credentials
#     Then I should receive a successful response with a status code 200
#     And the response should contain an authentication token or session information

