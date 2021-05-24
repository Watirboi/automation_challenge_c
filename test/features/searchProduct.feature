Feature:  Best Buy Product Search
    As a user
    I want to be able to search for a product
    on the BestBuy site

    Background:
        Given I open the url "<url>"
    
    Scenario Outline:  I should be able to search for a product
        When I set <products> to the BestBuy search field
        Then I expect that the h1 header contains the text <products>
        Then I should be able to apply filter by selected <parameters>
        When I click on a <products> <sku>
        Then I should see the average ratings displayed for <products>
        Then I should see the product specification displayed for <products>

        Examples:
            |url|products|parameters|sku|
            |www.bestbuy.com|television|New Birthday Top-Rated|6395127|
            




