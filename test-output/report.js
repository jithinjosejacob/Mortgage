$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ADMIN/workspace/Mortgage/src/main/java/Features/Clear_Estimate_Form.feature");
formatter.feature({
  "line": 1,
  "name": "Clear Bororwing Estimate form",
  "description": "\r\nAs a first home buyer incase if i enter incorrect details\r\nI want to clear the entire form\r\nSo that i can start filling the details again",
  "id": "clear-bororwing-estimate-form",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Clear Bororwing Estimate form",
  "description": "",
  "id": "clear-bororwing-estimate-form;clear-bororwing-estimate-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User navigated to borrowing estimate page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Page is available for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I check \"Single\" for \"Application type\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select \"0\" for \"Number of dependants\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I check \"Home to live in\" for \"Property you would like to buy\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I fill in \"80000\" for \"Your income (before tax)\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I fill in \"10000\" for \"Your other income\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I fill in \"500\" for \"Living expenses\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I fill in \"0\" for \"Current home loan repayments\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I fill in \"100\" for \"Other loan repayments\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I fill in \"0\" for \"Other commitments\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I fill in \"10000\" for \"Total credit card limits\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I press \"Start over\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should see \"Single\" checked in \"Application type\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see \"0\" selected in dropdown \"Number of dependants\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see \"Home to live in\" checked in \"Property you would like to buy\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see \"0\" in textbox \"Your income (before tax)\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see \"0\" in textbox \"Your other income\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see \"0\" in textbox \"Living expenses\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see \"0\" in textbox \"Current home loan repayments\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see \"0\" in textbox \"Other loan repayments\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see \"0\" in textbox \"Other commitments\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see \"0\" in textbox \"Total credit card limits\"",
  "keyword": "And "
});
formatter.match({
  "location": "UserActions.user_navigated_to_borrowing_estimate_page()"
});
formatter.result({
  "duration": 15962021024,
  "status": "passed"
});
formatter.match({
  "location": "UserActions.page_is_available_for_the_user()"
});
formatter.result({
  "duration": 19216101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Single",
      "offset": 9
    },
    {
      "val": "Application type",
      "offset": 22
    }
  ],
  "location": "UserActions.i_check_for(String,String)"
});
formatter.result({
  "duration": 436869477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 10
    },
    {
      "val": "Number of dependants",
      "offset": 18
    }
  ],
  "location": "UserActions.i_select_for(String,String)"
});
formatter.result({
  "duration": 287823180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home to live in",
      "offset": 9
    },
    {
      "val": "Property you would like to buy",
      "offset": 31
    }
  ],
  "location": "UserActions.i_check_for(String,String)"
});
formatter.result({
  "duration": 536488340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 11
    },
    {
      "val": "Your income (before tax)",
      "offset": 23
    }
  ],
  "location": "UserActions.i_fill_in_for(String,String)"
});
formatter.result({
  "duration": 372922409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 11
    },
    {
      "val": "Your other income",
      "offset": 23
    }
  ],
  "location": "UserActions.i_fill_in_for(String,String)"
});
formatter.result({
  "duration": 304585130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 11
    },
    {
      "val": "Living expenses",
      "offset": 21
    }
  ],
  "location": "UserActions.i_fill_in_for(String,String)"
});
formatter.result({
  "duration": 232328109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 11
    },
    {
      "val": "Current home loan repayments",
      "offset": 19
    }
  ],
  "location": "UserActions.i_fill_in_for(String,String)"
});
formatter.result({
  "duration": 244272898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 11
    },
    {
      "val": "Other loan repayments",
      "offset": 21
    }
  ],
  "location": "UserActions.i_fill_in_for(String,String)"
});
formatter.result({
  "duration": 220853377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 11
    },
    {
      "val": "Other commitments",
      "offset": 19
    }
  ],
  "location": "UserActions.i_fill_in_for(String,String)"
});
formatter.result({
  "duration": 182945834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 11
    },
    {
      "val": "Total credit card limits",
      "offset": 23
    }
  ],
  "location": "UserActions.i_fill_in_for(String,String)"
});
formatter.result({
  "duration": 338985514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start over",
      "offset": 9
    }
  ],
  "location": "UserActions.i_press(String)"
});
formatter.result({
  "duration": 73470549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Single",
      "offset": 14
    },
    {
      "val": "Application type",
      "offset": 34
    }
  ],
  "location": "UserActions.i_should_see_checked_in(String,String)"
});
formatter.result({
  "duration": 58065400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    },
    {
      "val": "Number of dependants",
      "offset": 39
    }
  ],
  "location": "UserActions.i_should_see_selected_in_dropdown(String,String)"
});
formatter.result({
  "duration": 38775815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home to live in",
      "offset": 14
    },
    {
      "val": "Property you would like to buy",
      "offset": 43
    }
  ],
  "location": "UserActions.i_should_see_checked_in(String,String)"
});
formatter.result({
  "duration": 50428307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    },
    {
      "val": "Your income (before tax)",
      "offset": 29
    }
  ],
  "location": "UserActions.i_should_see_in(String,String)"
});
formatter.result({
  "duration": 52561421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    },
    {
      "val": "Your other income",
      "offset": 29
    }
  ],
  "location": "UserActions.i_should_see_in(String,String)"
});
formatter.result({
  "duration": 61276979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    },
    {
      "val": "Living expenses",
      "offset": 29
    }
  ],
  "location": "UserActions.i_should_see_in(String,String)"
});
formatter.result({
  "duration": 70891188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    },
    {
      "val": "Current home loan repayments",
      "offset": 29
    }
  ],
  "location": "UserActions.i_should_see_in(String,String)"
});
formatter.result({
  "duration": 56266867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    },
    {
      "val": "Other loan repayments",
      "offset": 29
    }
  ],
  "location": "UserActions.i_should_see_in(String,String)"
});
formatter.result({
  "duration": 52023216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    },
    {
      "val": "Other commitments",
      "offset": 29
    }
  ],
  "location": "UserActions.i_should_see_in(String,String)"
});
formatter.result({
  "duration": 48439287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    },
    {
      "val": "Total credit card limits",
      "offset": 29
    }
  ],
  "location": "UserActions.i_should_see_in(String,String)"
});
formatter.result({
  "duration": 96376085,
  "status": "passed"
});
});