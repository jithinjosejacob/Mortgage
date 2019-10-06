# Mortgage
Cucumber UI Automation Tests for Serviceability Calculation
Cucumber,Java,Selenium,Junit

Assumptions : Page will load properly without any longer load times
Selenium will not throw any exceptions like Stale Element Exceptionn ,Element Not Visible Exception

Limitations : Used xpath as locator there are places where id can be used can be consider later
There are certain reusable functions find_element_by_id needs to be used for all available functions,it seems like not all places have been used
UserActions file is too big now,this could be split into many based on functions
Code Refactoring needs to be done in many places
Before Class and After Class is not used yet,
Browser closing is done yet in this code,so we have to manually close the browser for time bieng

Folder Strcuture

src folder in repository contains 2 folder
1st Folder - Feature Tests(3 Feature Tests one for each scenario)
2nd Folder - Maintaining StepDefintions for UserActions and TestRunner class

Copy the repository to your machine and change the Feature file path(Folder1) in Test Runner to local path
Run the TestRunner using Junit
If we provide the exact feature file path,that particular feature will run
If we provide the Folder,all features will run

Implementation Requirements

You will need to create a project in either JavaScript or Java with minimal dependencies - Used Java
The project should use Cucumber (gherkin - BDD) with an open source UI test automation runtime of your choice (e.g. Puppeteer, WebdriverIO) - Used Cucumber,Selenium WebDriver
The tests should target a browser of your choice (e.g. Chrome, Firefox)- Chrome
The tests should run through Command Line Interface in order to support CI/CD -Junit tests can be run through cmd line
All tests should pass and produce new results every time they are run -Results are produced each time
The solution should output results to JSON or XML and be able to generate HTML reports from the output file.-Can produce HTML,JSON or XML Reports(Havent configured it yet)

