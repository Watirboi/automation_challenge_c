Feature:  Best Buy Product Search Not Found
    As a user
    if I search for a product that does not exist
    I expect to receive a message that states it did not find the product

    Background:
        Given I open the url "<url>"
    
    Scenario Outline:  The product was not found
        When I enter <products> in the BestBuy search field
        Then I do not expect to see any listing for <products> based on my search requirement
        Then I should expect to see a message that says we did not find anything for <products>

        Examples:
            |url|products|
            |www.bestbuy.com|television|