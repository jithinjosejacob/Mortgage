Feature: Clear Bororwing Estimate form

	As a first home buyer incase if i enter incorrect details
	I want to clear the entire form
	So that i can start filling the details again
	
	Scenario: Clear Bororwing Estimate form
	
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
	
	When I press "Start over"
	Then I should see "Single" checked in "Application type"
	And I should see "0" selected in dropdown "Number of dependants"
	And I should see "Home to live in" checked in "Property you would like to buy"
	And I should see "0" in textbox "Your income (before tax)"
	And I should see "0" in textbox "Your other income"
	And I should see "0" in textbox "Living expenses"
	And I should see "0" in textbox "Current home loan repayments"
	And I should see "0" in textbox "Other loan repayments"
	And I should see "0" in textbox "Other commitments"
	And I should see "0" in textbox "Total credit card limits"
	