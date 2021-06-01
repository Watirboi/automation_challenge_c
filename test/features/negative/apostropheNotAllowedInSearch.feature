Feature:  Best Buy Product Search by Brand
    As a user
    I expect no filtering to occur when entering a string
    with an apostrophe

    Background:
        Given I open the url "<url>"
    
    Scenario Outline:  I should be able to search for a product
        When I enter <products> in the BestBuy search field
        And I submit the text <brand> in the Brand filter by field
        Then I expect an alert 'No Results' to display


        Examples:
            |url|products|brand|
            |www.bestbuy.com|playstation's|sony's|
            
            




