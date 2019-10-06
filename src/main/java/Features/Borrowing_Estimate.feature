Feature: Borrowing Estimate for First Home Buyer

	As a first home buyer
	I want to know how much amount i can borrow from the bank
	So that i can work out maximum amount that can be spend for my first home
	
	Scenario: Borrowing Estimate for First Home Buyer
	
	Given User navigated to borrowing estimate page
	Then Page is available for the user
	
	When I check "Single" for "Application type"
	And I select "0" for "Number of dependants"
	And I check "Home to live in" for "Property you would like to buy"
	And I fill in "80000" for "Your income (before tax)"
	And I fill in "10000" for "Your other income"
	And I fill in "500" for "Living expenses"
	And I fill in "0" for "Current home loan repayments"
	And I fill in "100" for "Other loan repayments"
	And I fill in "0" for "Other commitments"
	And I fill in "10000" for "Total credit card limits"
	And I press "Work out how much I could borrow"
	Then I should see the borrowing limit "$467,000"
	