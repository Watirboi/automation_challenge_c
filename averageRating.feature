Feature:  Average Rating
    As a user
    I want to be able to search for a product
    on the BestBuy site

    Background:
        Given I open the url "www.bestbuy.com"
    
    Scenario Outline:  I should be able to search for a product
        When I set <products> to the BestBuy search field
        Then I expect that the h1 header contains the text <products>
        Then I should be able to filter by condition