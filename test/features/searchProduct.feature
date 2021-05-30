Feature:  Best Buy Product Search
    As a user
    I want to be able to search for a product
    on the BestBuy site

    Background:
        Given I open the url "<url>"
    
    Scenario Outline:  I should be able to search for a product
        When I enter <products> in the BestBuy search field
        Then I expect that see all the <products> that meet my search requirement
        Then I should be able to apply 3 filters to limit the <parameters> products displayed
        When I click on a <products> matching sku: <sku>
        Then I should see the average ratings displayed for this <products>, sku id: <sku>
        And I should see the product specification displayed for the <products>
        Then I should now see the number of results returned and top 3 reviews

        Examples:
            |url|products|parameters|sku|
            |www.bestbuy.com|television|New Birthday Top-Rated|6395127|
            |bestbuy.com|refrigerator|Brand-Samsung Features-IceMaker PrimaryFinish-Color:BlackSS|5580245|
            |http://www.bestbuy.com|surface pro|Ram-16-Gigabytes Storage-Capacity-1000-Gigabytes Features-FF-Camera|6375049|
            




