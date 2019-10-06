package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class UserActions {
	
	public WebDriver driver;
	
	public String find_label_id(String label_value) {
		
		String label_id;
		WebElement label_element = driver.findElement(By.xpath("//label[contains( text(),'"+label_value+"')]"));
		label_id = label_element.getAttribute("id");
		return label_id;
		
	}
	
	@Given("^User navigated to borrowing estimate page$")
	public void user_navigated_to_borrowing_estimate_page() throws Throwable {
	    // Write code here to navigate user to the borrowing estimate site
	    // Initiate chrome browser
		String path = System.getProperty("user.dir");
		System.setProperty("webdriver.chrome.driver",path+"\\src\\test\\java\\chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-notifications");
		
		//Created an object of driver
		driver = new ChromeDriver(options);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/");
	}

	@Given("^Page is available for the user$")
	public void page_is_available_for_the_user() {
	    // Write code here to verify the page title
		String title = driver.getTitle();
		Assert.assertEquals("Home loan borrowing power calculator | ANZ", title);

	}

	@When("^I check \"([^\"]*)\" for \"([^\"]*)\"$")
	public void i_check_for(String arg1, String arg2){
	    // Write code here to check a particular value in a checkbox field
		
		String label_id;
		WebElement label_element = driver.findElement(By.xpath("//label[contains( text(),'"+arg2+"')]"));
		label_id = label_element.getAttribute("id");
		
		WebElement input_element = driver.findElement(By.xpath("//ul[@aria-labelledby='"+label_id+"']"));
		input_element.findElement(By.xpath("//label[contains(text(),'"+arg1+"')]")).click();
	}

	@When("^I select \"([^\"]*)\" for \"([^\"]*)\"$")
	public void i_select_for(String arg1, String arg2) {
	    // Write code here to select a particular value from the dropdown
		
		Select select_list = new Select(driver.findElement(By.xpath("//select[@title ='"+arg2+"']")));
		select_list.selectByVisibleText(arg1);
	}

	@When("^I fill in \"([^\"]*)\" for \"([^\"]*)\"$")
	public void i_fill_in_for(String arg1, String arg2) {
	    // Write code here to fill in value to textbox
		String label_id;
		WebElement label_element = driver.findElement(By.xpath("//label[contains( text(),'"+arg2+"')]"));
		label_id = label_element.getAttribute("id");
		
		driver.findElement(By.xpath("//input[@aria-labelledby='"+label_id+"']")).sendKeys(arg1);

	}

	@When("^I press \"([^\"]*)\"$")
	public void i_press(String arg1) {
	    // Write code here to click on a button having button text provided by user
		
		WebElement elem = driver.findElement(By.xpath("//button[contains(text(),'"+arg1+"')]"));
		JavascriptExecutor jse2 = (JavascriptExecutor)driver;
		jse2.executeScript("arguments[0].click()", elem);
	}

	@Then("^I should see the borrowing limit \"([^\"]*)\"$")
	public void i_should_see_the_borrowing_limit(String arg1) {
	    // Write code here for verifying the borrowing limit value
		driver.findElement(By.xpath("//span[@class='borrow__result__text__amount'and contains(text(),'"+arg1+"')]"));
	}
	
	@Then("^I should see the unable to estimate message$")
	public void i_should_see_the_unable_to_estimate_message() throws Throwable {
	    // Write code here to verify unable to estimate message
		driver.findElement(By.xpath("//span[@class='borrow__error__text' and contains(text(),'Based on the details')]"));
	}
	
	@Then("^I should see \"([^\"]*)\" checked in \"([^\"]*)\"$")
	public void i_should_see_checked_in(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String label_id_value = find_label_id(arg2);
		driver.findElement(By.xpath("//ul[@aria-labelledby ='"+label_id_value+"' and li[contains(@class,'selected') and label[contains(text(),'"+arg1+"')]]]"));


	}

	@Then("^I should see \"([^\"]*)\" selected in dropdown \"([^\"]*)\"$")
	public void i_should_see_selected_in_dropdown(String arg1, String arg2) throws Throwable {
	    // Write code here to check value available in the dropdown
		
		String select_value= driver.findElement(By.xpath("//select[@title ='"+arg2+"']")).getAttribute("value");
		Assert.assertEquals(arg1, select_value);

	}
	
	@Then("^I should see \"([^\"]*)\" in textbox \"([^\"]*)\"$")
	public void i_should_see_in(String arg1, String arg2) throws Throwable {
	    // Write code here to verify that textbox contains value
		String label_id_value = find_label_id(arg2);
		String actual_value = driver.findElement(By.xpath("//input[@aria-labelledby='"+label_id_value+"']")).getAttribute("value");
		Assert.assertEquals(arg1, actual_value);

	}


}
