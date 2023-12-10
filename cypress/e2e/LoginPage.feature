# @smoke
# Feature: Admin user Grid
#       verfiy the Admin user Grid  is  working correctly for the Admin user

#      Scenario: #1 Admin should be able to add a user  then appear  the success toast message with 'successfully saved' text returned
#         Given User logged in
#         And User visits the admin page
#            When User click on add button
#            Then User should see the Add User page    
#            When User select User Role  
#            And User select Status
#            And User fills in password field
#            And User fills in confirm password field
#            And User fills in username field
#            And User fills in the Employee Name field
#            And User click on save button
#            Then User should see the success toast message with'successfully saved'text returned
# @focus
#        Scenario: #2 Admin Should be able to update the username for an existing user
#            Given User logged in
#            And User visits the admin page
#            When User click on Edit icon  for exisiting user         
#            Then User should see the Add User page
#             When User Edit User Role field
#            And User click on save button
#            Then User should see the success toast message with'Successfully Updated'

#        Scenario: #3.1 Admin Should be able to delete for an existing user by confirmation dialogue appears
#               Given User logged in 
#               And User visits the admin page
#               When User click on the trash icon for exisiting user
#               Then 'Are you Sure?' confirmation dialogue should be appeard
#               When User click on the Yes,Delete button
#               Then User should see the success toast message with 'Successfully Deleteded'

#       #  Scenario: #3.2 Admin Should be able to delete for existing user
#       #          Given User logged in 
#       #          And User visits the admin page
#       #          When User click on the Yes,Delete button
#       #          Then User should see the success toast message with 'Successfully Deleteded'
   
   @regression
Feature: Orangehrmlive Login Page
Background:
Given Access Login Portal Page
    Scenario: Login using valid credentails
        
        When  Enter a username Admin
        And  Enter a password admin123
        And  Click on the login button
        Then Should be redirected to Dashboard page

    Scenario: Login with valid username and not valid password
        And  Enter a password user1234
        And  Click on the login button
        Then Should remain on the login page

    Scenario: Login with not valid username and valid password
        When Enter a username user
        And  Enter a password admin123
        And  Click on the login button
        Then Should remain on the login page