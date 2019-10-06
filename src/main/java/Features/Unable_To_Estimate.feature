Feature: Estimation failed when user entered insufficient informaiton

	As a first home buyer incase user enters insufficient information
	I want the form to give me an appropriate message
	So that I can action accordingly
	
	Scenario: Estimation failed when user entered insufficient informaiton
	
	Given User navigated to borrowing estimate page
	Then Page is available for the user
	
	When I check "Single" for "Application type"
	And I select "0" for "Number of dependants"
	And I check "Home to live in" for "Property you would like to buy"
	And I fill in "0" for "Your income (before tax)"
	And I fill in "0" for "Your other income"
	And I fill in "1" for "Living expenses"
	And I fill in "0" for "Current home loan repayments"
	And I fill in "0" for "Other loan repayments"
	And I fill in "0" for "Other commitments"
	And I fill in "0" for "Total credit card limits"
	And I press "Work out how much I could borrow"
	Then I should see the unable to estimate message