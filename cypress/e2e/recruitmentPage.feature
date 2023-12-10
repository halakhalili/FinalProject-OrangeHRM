   @regression
Feature: Test candidate statuses on the recruitment page

Background:
Given Access Login Portal Page
When  Enter a username Admin
And  Enter a password admin123
And  Click on the login button
Then Should be redirected to Dashboard page
 When I Click on the Recruitment button
 
Scenario: Rejected Candidate 
  And Click on Add button
  And Enter the required information
  And Click the Save button
  Then Should show in another page Reject and Shortlist buttons
  And  I click on Reject button and save it 
  Then The status of candidate should be Rejected
  
Scenario: Moving the Candidate to the Shortlist
#  When I Click on the Recruitment button 
 And Click on Add button
 And Enter the Candidate Info
 And Click the Save button
 Then Should show in another page Reject and Shortlist buttons
 And  I click on Shortlist button and save it 
 Then The status of candidate should be Shortlist

Scenario: Schedule an Interview for a Candidate
    When I am on the Candidate Shortlist Options Page
    And  I click on the Interview Button
    And  I enter the required Interview Info and Save it
    Then The interview should be successfully scheduled for the candidate

Scenario: Mark Interview as Passed for a Candidate
    When Complete the interview for the candidate and navigate to the interview result page
    And  Click on the "Mark Interview Passed" Button
    And  Click the Save Button
    Then The status of the interview for the candidate should be updated as "Interview Passed”

Scenario: Offer a Job to the Candidate
    When I pass the interview for the candidate and navigate to the passed interview result page
    And I click on the "Offer Job" Button
    And I click the Save Button
    Then The status of the interview for the candidate should be updated as "Offer Job”

Scenario: Hire the Candidate
    When The offer has been accepted and we move to another page where the reject or hire button appears
    And Click on the "Hire" Button
    And Click the Save Button
    Then The status of the interview for the candidate should be updated as "Hire”

