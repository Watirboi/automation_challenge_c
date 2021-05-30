Feature:  Best Buy Product Search
    As a user
    I should not find <product>
    on the BestBuy site

    Background:
        Given I open the url "<url>"
    
    Scenario Outline:  I should be able to search for a product
        When I enter <products> in the BestBuy search field
        Then I do not expect that see any listing for <products> based on my search requirement
        Then I should expect to see a message that says we did not find anything for <products>

        Examples:
            |url|products|
            |www.bestbuy.com|television|