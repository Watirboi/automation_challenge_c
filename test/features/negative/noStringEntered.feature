@Pending
Feature:  Best Buy Product Search
    As a user
    I expect the site to not crash if i enter no string and click the submit search icon

    Background:
        Given I open the url "<url>"
    
    Scenario Outline:  I should be able to search for a product
        When I enter no string in the BestBuy search field
        And I click the submit search icon (magnifying glass)
        Then I expect no action to occur
            
        Examples:
        |url|
        |www.bestbuy.com|




