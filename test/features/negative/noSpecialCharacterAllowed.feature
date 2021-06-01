Feature:  Best Buy Product Search by Brand
    As a user
    I expect special characters to be filtered
    and my results won't be what I expected

    Background:
        Given I open the url "<url>"
    
    Scenario Outline:  I should be able to search for a product
        When I enter <products> in the BestBuy search field
        Then I can expect any product with <products> in the name or description to display


        Examples:
            |url|products|brand|
            |www.bestbuy.com|@playstation|sony's|
            
            




