@Pending
Feature:  Best Buy Product Search
    As a user
    I expect the site to not crash if i enter invalid characters
    in the search field

    Background:
        Given I open the url "<url>"
    
    Scenario Outline:  I should be able to search for a product
        When I enter <products> in the BestBuy search field
        Then I expect that see a message that says we didn't find anything for <products>

        Examples:
            |url|products|
            |www.bestbuy.com|ksdjfl;sfjals;fkjl;sjl;|
            
            




